import React from 'react';
import {useHistory} from "react-router-dom";

const Menu = () => {

    let history = useHistory();

    return (
        <div className="p-5 bg-light">
            <h3 className="text-center mt-5">Hai, What are you looking for?</h3>
            <button 
                className="btn btn-primary d-grid gap-5 col-4 mx-auto mt-5"
                onClick={()=> history.push("/List")}>
                List of your requested concert city
            </button><br/>
            <button 
                className="btn btn-primary d-grid gap-5 col-4 mx-auto mt-3"
                onClick={()=> history.push("/Request")}>
                Place to input your request
            </button><br/>
            <button 
                className="btn btn-primary d-grid gap-5 col-4 mx-auto mt-3"
                onClick={()=> history.push("/AboutUs")}>
                About Us
            </button><br/><br/><br/><br/>
            <h4 className="text-end mt-5">
                <button 
                    className="btn btn-danger"
                    onClick={()=> history.push("/")}>
                    EXIT
                </button>
            </h4>

        </div>
    )
}

export default Menu;
