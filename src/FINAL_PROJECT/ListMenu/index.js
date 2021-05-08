import React, {useEffect, useState} from 'react';
import firebase from "../Config/Firebase";


const Admin = () => {

    const [Concert, setConcert] = useState([]);

    useEffect(() => {
        firebase
        .database()
        .ref('Concert') 
        .on('value', (res) => {
            if(res.val()) {
                //mengubah object menjadi array object
                const RawData = res.val();
                const ConcertArray = [];
                Object.keys(RawData).map(item => {
                    ConcertArray.push({
                        id: item,
                        ...RawData[item]
                    });
                });
                setConcert(ConcertArray);
            }
        })
    }, []);

    return (
        <div>
            
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
                                        TEST
                                        {/* <button 
                                            className="btn btn-primary"
                                            onClick={()=> OnUpdateData(item)}>
                                            Update
                                        </button>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={()=> OnDeleteData(item)}>
                                            Delete
                                        </button> */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

        </div>
    )
}

export default Admin;
