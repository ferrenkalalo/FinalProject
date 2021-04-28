import React, {useState} from 'react'
import NavBar from '../Navbar';
import Axios from "axios";

const AddUser = () => {

    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
 
    const TambahUser = () => {
         const data = {
             avatar: 'https://source.unsplash.com/random',
             email: email,
             first_name: first_name,
             last_name: last_name
         };
         Axios.post('http://localhost:3004/users', data);
         alert('New user added! Please check in the dashboard area');
        }

    return (
        <div className="container mt-2">
            <NavBar />
            <br/><br/>
            <h4 className="text-center fs-2">Add New User</h4>
            <p className="form-label">Email</p>
            <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="please input your email">
            </input><br/><br/>
            <p className="form-label">First Name</p>
            <input
                className="form-control"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="please input your first name">
            </input><br/><br/>
            <p className="form-label">Last Name</p>
            <input
                className="form-control"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="please input your last name">
            </input>
            <br/><br/>
            <button className="btn btn-primary mb-3" onClick={TambahUser}>
                Add New User
            </button>
        </div>
    )
}

export default AddUser;
