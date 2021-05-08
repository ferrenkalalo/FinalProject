import React from 'react';

const Menu = () => {

    return (
        <div className="p-5 bg-light">
            <h3 className="text-center mt-5">Hai, What are you looking for?</h3>
            <button className="btn btn-primary d-grid gap-5 col-4 mx-auto mt-5">
                List
            </button><br/>
            <button className="btn btn-primary d-grid gap-5 col-4 mx-auto mt-3">
                Admin
            </button><br/>
            <button className="btn btn-primary d-grid gap-5 col-4 mx-auto mt-3">
                Info
            </button>
        </div>
    )
}

export default Menu;
