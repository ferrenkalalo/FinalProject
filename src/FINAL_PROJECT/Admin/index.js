import React, {useEffect, useState} from 'react';
import firebase from "../Config/Firebase"

const ListMenu = () => {

    const [Country, setCountry] = useState("");
    const [City, setCity] = useState("");
    const [Info, setInfo] = useState("");
    const [Concert, setConcert] = useState([]);
    const [Button, setButton] = useState("Save");
    const [SelectedConcert, setSelectedConcert] = useState({})

    useEffect(() => {
        firebase
        .database()
        .ref('Concert') 
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
                setConcert(ProductArray);
            }
        })
    }, []);

    const ResetForm = () => {
        setCountry('');
        setCity('');
        setInfo('');
        setButton('Save');
        setSelectedConcert({});
    }

    const OnSubmit = () => {
        const data = {
            Country: Country,
            City: City,
            Info: Info,
        };
        if(Button === 'Save') {
            //untuk simpan data
            firebase.database().ref('Concert').push(data);
        }
        else{
            //untuk update data
            firebase.database().ref(`Concert/${SelectedConcert.id}`).set(data);
        }
        ResetForm();
    }

    const OnUpdateData = (item) => {
        setCountry(item.Country)
        setCity(item.City)
        setInfo(item.Info)
        setButton("Update");
        setSelectedConcert(item)
    }

    const OnDeleteData = (item) => {
        alert('The data will permanently gone!');
        //delete data
        firebase.database().ref(`Concert/${item.id}`).remove();
    }

    return (
        <div className="container mt-2">
            <h3 className="text-center fs-2">Admin</h3><br/><br/>
            <div className="col-5">
                <p className="form-label mt-4">Country</p>
                <input 
                    className="form-control" 
                    placeholder="please type the Country" 
                    value={Country} 
                    onChange={(e)=> setCountry(e.target.value)}/>
                <p className="form-label mt-4">City</p>
                <input 
                    className="form-control" 
                    placeholder="please type the City" 
                    value={City} 
                    onChange={(e)=> setCity(e.target.value)}/>
                <p className="form-label mt-4">Info</p>
                <input 
                    className="form-control" 
                    placeholder="please type the Info" 
                    value={Info} 
                    onChange={(e)=> setInfo(e.target.value)}/> 
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
                            <th>Country</th>
                            <th>City</th>
                            <th>Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Concert.map(item => (
                                <tr key={item.id}>
                                    <td>{item.Country}</td>
                                    <td>{item.City}</td>
                                    <td>{item.Info}</td>
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

export default ListMenu;