import React from "react";
import ListForm from "./ListForm";
import ListItem from "./ListItem";
import DeleteBtn from "./delete-btn";


class List extends React.Component{
    constructor()
    {
        super();
        this.state={
            items:
            [
                {
                    itemname:"Buying Vegetables",
                    duedate:"12/23/14",
                    id:1,
                },
                {
                    itemname:"Microprocessor Assignment",
                    duedate:"12/10/15",
                    id:2,
                },
                {
                    itemname:"Cleaning House",
                    duedate:"5/5/10",
                    id:3,
                }
            ],
            curid:4,
            checked_ids:[],
        };
    }
    checkitem=(item)=>
    {
        let checked_ids=this.state.checked_ids;
        checked_ids.push(item.id);
        console.log(checked_ids);
        this.setState({
            checked_ids:checked_ids,
        });
    }
    uncheckitem=(item)=>
    {
        let checked_ids=this.state.checked_ids;
        let indx=checked_ids.indexOf(item.id);
        checked_ids.splice(indx,1);
        console.log(checked_ids);
        this.setState({
            checked_ids:checked_ids,
        });
    }
    render()
    {
        const items =this.state.items;
        return(
            <div className="list-container">
                <ListForm/>
                { items.map((item)=>{ return <ListItem item={item} checkitem={this.checkitem} uncheckitem={this.uncheckitem}/>})}
                <DeleteBtn/>
            </div>
        );
    }
}

export default List;