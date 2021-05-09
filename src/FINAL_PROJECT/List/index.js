import React, {useEffect, useState} from 'react';
import firebase from "../Config/Firebase";
import NavBar from '../Navbar';


const List = () => {

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
            <NavBar/>
        <div className="p-5 bg-light">
            <h2 className="text-center text-info"> LIST OF YOUR REQUESTED CONCERT CITY </h2><br/><br/>
            <table className="table table-info table-borderless">
                    <thead className="table-info">
                        <tr>
                            <th>Country</th>
                            <th>City</th>
                            <th className="  text-center">Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Concert.map(item => (
                                <tr key={item.id}>
                                    <td>{item.Country}</td>
                                    <td>{item.City}</td>
                                    <td className="text-center">{item.Note}</td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table><br/><br/>
            <h5 className="text-center text-info"> - may your wish come true - </h5>
        </div>
        </div>
    )
}

export default List;
