import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            buyItems : ['holo','moz','gilas'],
            message : 'this Item is exist'
        }
    }
    
    
    // Adding a new Item and prevent default behavior 
    // solving bugs like empty input or repeating items
    addNewItem(e){
        e.preventDefault();
        const {buyItems,message} = this.state;
        const newItem = this.newItem.value;
        let Itexist = buyItems.includes(newItem);
        if(newItem == ''){
            alert('The input is empty please fill it');
             this.setState({
              buyItems : [...this.state.buyItems]
            })
        }else if(!newItem == '' && !Itexist){
            this.setState({
              buyItems : [...this.state.buyItems,newItem]
            })
        }
        if(Itexist){
            alert(message);
        }
    }
    
    //rendering all the elements
    render() {
        return(
            <div className="Parent">
            <div className="parentOfForm">
            <form onSubmit={(info) => {this.addNewItem(info)}}>
            <input ref={(newAnotheritem) => {this.newItem = newAnotheritem}} placeholder="your favorite fruite" className="Favinput" type="text" />
            <input className="SubmitButton" type="submit" value="press me" />
            </form>
            </div>
            <div className="ShopingList">
            <h4 className="Title">Items</h4>
            <hr className="line"></hr>
            <ul>
            {
            this.state.buyItems.map(items => {
                return(
                    <li className="spaces" key={items}>{items}</li>
                );
            })
            }
            </ul>
            </div>
            </div>
        );
   }
}
//exporting to the app file for DOM render
export default App;