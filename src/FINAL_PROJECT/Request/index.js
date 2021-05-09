import React, {useEffect, useState} from 'react';
import firebase from "../Config/Firebase"
import NavBar from '../Navbar';

const Request = () => {

    const [Country, setCountry] = useState("");
    const [City, setCity] = useState("");
    const [Note, setNote] = useState("");
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
        setNote('');
        setButton('Save');
        setSelectedConcert({});
    }

    const OnSubmit = () => {
        const data = {
            Country: Country,
            City: City,
            Note: Note,
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
        setNote(item.Note)
        setButton("Update");
        setSelectedConcert(item)
    }

    const OnDeleteData = (item) => {
        alert('The data will permanently gone!');
        //delete data
        firebase.database().ref(`Concert/${item.id}`).remove();
    }

    return (
        <div>
            <NavBar/>
        <div className="p-5 bg-info">
            <h2 className="text-center text-white">REQUEST HERE</h2>
            <div className="">
                <div className="form-floating mt-5">
                    <input  
                            className="form-control" 
                            id="floatingCountry" 
                            value={Country} 
                            onChange={(e)=> setCountry(e.target.value)}/>
                    <label for="floatingCountry">INPUT THE COUNTRY</label>
                </div>
                <div className="form-floating mt-5">
                    <input  
                            className="form-control" 
                            id="floatingCity" 
                            value={City} 
                            onChange={(e)=> setCity(e.target.value)}/>
                    <label for="floatingCity">INPUT THE CITY</label>
                </div>
                <div className="form-floating mt-5">
                    <input  
                            className="form-control" 
                            id="floatingNote" 
                            value={Note} 
                            onChange={(e)=> setNote(e.target.value)}/>
                            
                    <label for="floatingNote">INPUT THE NOTE</label>
                 </div><br/>
                <button className="btn btn-primary d-grid gap-5 col-4 mx-auto" onClick={OnSubmit}>
                   {Button}
                </button><br/>
                {
                    Button === 'Update' && (
                    <button 
                    className="btn btn-secondary d-grid gap-5 col-4 mx-auto"
                    onClick={ResetForm}>
                    Cancel Update
                    </button>
                )}
            </div><br/><br/><br/>
            <hr/>
                <table className="table table-light table-striped table-hover mt-5">
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
                                    <td>{item.Note}</td>
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
        </div>
    )
}

export default Request;