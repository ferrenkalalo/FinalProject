import React, {useState, useEffect} from 'react';
import NavBar from "../../molecules/NavBar";
import firebase from '../../../config/Firebase'

const Dashboard = () => {

    const [ProductName, setProductName] = useState("");
    const [Category, setCategory] = useState("");
    const [Price, setPrice] = useState("");
    const [Products, setProducts] = useState([]);
    const [Button, setButton] = useState("Save");
    const [SelectedProduct, setSelectedProduct] = useState({})

    useEffect(() => {
        firebase
        .database()
        .ref('Products') 
        .on('value', (res) => {
            if(res.val()) {
                //mengubah object menjadi array object
                const RawData = res.val();
                const ProductArray = [];
                Object.keys(RawData).map(item => {
                    ProductArray.push({
                        id: item,
                        ...RawData[item]
                    });
                });
                setProducts(ProductArray);
            }
        })
    }, []);

    const ResetForm = () => {
        setProductName('');
        setCategory('');
        setPrice('');
        setButton('Save');
        setSelectedProduct({});
    }

    const OnSubmit = () => {
        const data = {
            ProductName: ProductName,
            Category: Category,
            Price: Price,
        };
        if(Button === 'Save') {
            //untuk simpan data
            firebase.database().ref('Products').push(data);
        }
        else{
            //untuk update data
            firebase.database().ref(`Products/${SelectedProduct.id}`).set(data);
        }
        ResetForm();
    }

    const OnUpdateData = (item) => {
        setProductName(item.ProductName)
        setCategory(item.Category)
        setPrice(item.Price)
        setButton("Update");
        setSelectedProduct(item)
    }

    const OnDeleteData = (item) => {
        alert('The data will permanently gone!');
        //delete data
        firebase.database().ref(`Products/${item.id}`).remove();
    }

    return (
        <div className="container mt-2">
            <NavBar />
            <h3 className="text-center fs-2">Dashboard</h3><br/><br/>
            <div className="col-5">
                <p className="form-label mt-4">Product Name</p>
                <input 
                    className="form-control" 
                    placeholder="please type the product name" 
                    value={ProductName} 
                    onChange={(e)=> setProductName(e.target.value)}/>
                <p className="form-label mt-4">Category</p>
                <input 
                    className="form-control" 
                    placeholder="please type the category" 
                    value={Category} 
                    onChange={(e)=> setCategory(e.target.value)}/>
                <p className="form-label mt-4">Price</p>
                <input 
                    className="form-control" 
                    placeholder="please type the price" 
                    value={Price} 
                    onChange={(e)=> setPrice(e.target.value)}/> 
                <br/><br/>
                <button className="btn btn-primary" onClick={OnSubmit}>
                   {Button}
                </button>
                {
                    Button === 'Update' && (
                    <button 
                    className="btn btn-secondary"
                    onClick={ResetForm}>
                    Cancel Update
                    </button>
                )}
            </div><br/>
                <hr/>
                <table className="table table-light table-striped table-hover ">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products.map(item => (
                                <tr key={item.id}>
                                    <td>{item.ProductName}</td>
                                    <td>{item.Category}</td>
                                    <td>{item.Price}</td>
                                    <td>
                                        <button 
                                            className="btn btn-primary"
                                            onClick={()=> OnUpdateData(item)}>
                                            Update
                                        </button>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={()=> OnDeleteData(item)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
    )
}

export default Dashboard;
