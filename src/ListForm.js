import React from "react";



class ListForm extends React.Component{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div>
                <div className="Listform">
                    <input className="item-box" placeholder="Enter to do item"></input>
                    <input className="date-input" type="date"></input>
                    <button type="submit" className="add-btn">Add</button>
                </div>
            </div>
        );
    }
}


export default ListForm;