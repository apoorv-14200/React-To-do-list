import React from "react";
import ListForm from "./ListForm";
import ListItem from "./ListItem";
import DeleteBtn from "./delete-btn";
import NavBar from "./Navbar";
import * as firebase from "firebase";
import ToggleTab from "./ToggleTab";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      checked_ids: [],
      loading: true,
      deleted: [],
      todotab: true,
    };
  }
  componentDidMount() {
    // firebase.
    //     firestore()
    //     .collection('items')
    //     .get()
    //     .then((snapshot)=>{
    //         console.log(snapshot);
    //         let items=[];
    //         snapshot.docs.map((doc)=>
    //         {
    //             let item=doc.data();
    //             item['id']=doc.id;
    //             items.push(item);
    //         })
    //         this.setState({
    //             items:items,
    //             loading:false,
    //         });
    //     });
    firebase
      .firestore()
      .collection("items")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        let items = [];
        snapshot.docs.map((doc) => {
          let item = doc.data();
          item["id"] = doc.id;
          items.push(item);
        });
        this.setState({
          items: items,
          loading: false,
        });
      });
  }
  checkitem = (item) => {
    let checked_ids = this.state.checked_ids;
    checked_ids.push(item.id);
    console.log(checked_ids);
    this.setState({
      checked_ids: checked_ids,
    });
  };
  uncheckitem = (item) => {
    let checked_ids = this.state.checked_ids;
    let indx = checked_ids.indexOf(item.id);
    checked_ids.splice(indx, 1);
    console.log(checked_ids);
    this.setState({
      checked_ids: checked_ids,
    });
  };
  find_and_delete(id) {
    let items = this.state.items;
    let indx = 0;
    for (indx = 0; indx < items.length; indx++) {
      if (items[indx].id === id) {
        break;
      }
    }
    if (indx != items.length) {
      // items.splice(indx,1);
      // this.setState({
      //     items:items,
      // });
      let deleted = this.state.deleted;
      deleted.push(items[indx]);
      this.setState({
        deleted: deleted,
      });
      firebase
        .firestore()
        .collection("items")
        .doc(items[indx].id)
        .delete()
        .then(() => console.log("deleted successfully"))
        .catch((error) => console.log("error in deleting", error));
      return indx;
    }
    return -1;
  }
  deleteItems = () => {
    let checked_ids = this.state.checked_ids;
    console.log("to be deleted", checked_ids);
    for (let id of checked_ids) {
      this.find_and_delete(id);
    }
    checked_ids = [];
    this.setState({
      checked_ids: checked_ids,
    });
  };
  additem = (itemname, duedate) => {
    // let items=this.state.items;
    // let cur_id=this.state.cur_id;
    firebase
      .firestore()
      .collection("items")
      .add({
        itemname: itemname,
        duedate: duedate,
      })
      .then((docRef) => {
        console.log("ITEM ADDED", docRef);
      })
      .catch((error) => {
        console.log("error occurred", error);
      });
    // items.push({
    //     itemname:itemname,
    //     duedate:duedate,
    //     id:cur_id,
    // });
    // cur_id+=1;
    // this.setState({
    //     items:items,
    //     cur_id:cur_id,
    // });
  };
  toggletab = () => {
    let tab = this.state.todotab;
    tab = !tab;
    this.setState({
      todotab: tab,
    });
  };
  render() {
    const items = this.state.items;
    console.log(this.state.deleted);
    let showtodo = this.state.todotab;
    let itemstoshow = showtodo ? items : this.state.deleted;
    return (
      <div className="list-container">
        <ToggleTab toggletab={this.toggletab} showtodo={showtodo} />
        <NavBar count={itemstoshow.length} />
        {showtodo && <ListForm additem={this.additem} />}
        {itemstoshow.length == 0 && <h1>Nothing To Show</h1>}
        {itemstoshow.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              checkshow={showtodo}
              checkitem={this.checkitem}
              uncheckitem={this.uncheckitem}
            />
          );
        })}
        {this.state.loading && <h1 className="loading">Loading List</h1>}
        {showtodo && <DeleteBtn deleteItems={this.deleteItems} />}
      </div>
    );
  }
}

export default List;
