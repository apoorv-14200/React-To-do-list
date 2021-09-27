import React from "react";


const DeleteBtn=(props)=>
{
    return(
        <div className="delete-btn" onClick={()=>props.deleteItems()}>
            <img className="delete-img" src="https://cdn-icons-png.flaticon.com/512/1214/1214594.png"></img>
            <div className="deletename">Delete</div>
        </div>
    );
};

export default DeleteBtn;