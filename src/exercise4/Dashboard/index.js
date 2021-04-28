import React, {useState, useEffect} from 'react';
import Card from '../Card';
import NavBar from '../Navbar';
import Axios from "axios";

const Dashboard = () => {

    const[users, setUsers] = useState([]);

    useEffect(()=>{
        //fetch
            // fetch('https://reqres.in/api/users')
            // .then((res)=> res.json())
            // .then((json) => setUsers(json.data));
        //axios
            Axios.get('http://localhost:3004/users').then(res=> 
            // setUsers(res.data.data)
            setUsers(res.data)
            );
    }, [users]);

    const AddUser = () => {
        const data = {
            avatar: 'https://source.unsplash.com/random',
            email: "verren@mail.com",
            first_name: "Verren",
            last_name: "Kalalo"
        };
        Axios.post('http://localhost:3004/users', data);
    }
    
    return (
        <div className="container mt-2">
            <NavBar/>
            <br/><br/>
            <h3 className="text-center fs-2">Dashboard</h3> <hr/>
            <button className="btn btn-primary mb-3" onClick={AddUser}>
                Test Add User
            </button>
            <div  className="row align-items-start">
               {users.map((item) => [
                   <>
                        <Card 
                        avatar = {item.avatar}
                        fullName = {`${item.first_name} ${item.last_name}`}
                        email = {item.email}
                        />
                   </>
               ])}
            </div>
        </div>
    );
};

export default Dashboard;
