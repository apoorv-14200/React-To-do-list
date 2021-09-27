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
                    <input type="text" className="item-box" placeholder="Enter to do item" ></input>
                    <input className="date-input" type="date"></input>
                    <button type="submit" className="add-btn" onClick={()=> {
                        let e=document.querySelector('.item-box');
                        console.log(e);
                        let itemname=e.value;
                        let duedate=document.querySelector(".date-input").value;
                        this.props.additem(itemname,duedate);
                    }}>Add</button>
                </div>
            </div>
        );
    }
}


export default ListForm;