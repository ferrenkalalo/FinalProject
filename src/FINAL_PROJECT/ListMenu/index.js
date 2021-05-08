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
        <div className="p-5 bg-light">
            <h1 className="text-center text-info"> LIST CONCERT CITY </h1><br/><br/>
            <table className="table table-info table-borderless">
                    <thead className="table-info">
                        <tr>
                            <th>Country</th>
                            <th>City</th>
                            <th>Info</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Concert.map(item => (
                                <tr key={item.id}>
                                    <td>{item.Country}</td>
                                    <td>{item.City}</td>
                                    <td>{item.Info}</td>
                                    <td>{item.Price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

        </div>
    )
}

export default Admin;
