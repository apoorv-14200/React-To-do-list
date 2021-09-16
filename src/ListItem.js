import React from "react";



class ListItem extends React.Component{
    constructor()
    {
        super();
        this.state={
            checked:0,
            classname:"item-name",
        };
    }

    toggleitem=(item,checkitem,uncheckitem)=>
    {
        console.log("Button clicked");
        let {checked,classname}=this.state;
        checked=1-checked;
        if(checked==1)
        {
            classname="item-name checked";
            checkitem(item);
        }
        else
        {
            classname="item-name";
            uncheckitem(item);
        }
        console.log(classname);
        this.setState({
            checked:checked,
            classname:classname,
        });
        return;
    }
    render()
    {
        let {itemname,duedate,id}=this.props.item;
        return(
            <div className="ListItem">
                <input type="checkbox" className="checkbox" onClick={()=>this.toggleitem(this.props.item,this.props.checkitem,this.props.uncheckitem)}></input>
                <div className={this.state.classname}>{itemname}</div>
                <div className="duedate">{duedate}</div>
            </div>
        );
    }
}


export default ListItem;