import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            buyItems : ['holo','moz','gilas']
        }
    }
    addNewItem(e){
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.newItem.value;
        let Itexist = buyItems.includes(newItem);
        if(Itexist){
            alert("This item is existing");
        }else{
            this.setState({
              buyItems : [...this.state.buyItems,newItem]
            })
        }
    }
    
    render() {
        return(
            <div className="Parent">
            <div className="parentOfForm">
            <form onSubmit={(info) => {this.addNewItem(info)}}>
            <input ref={(newAnotheritem) => {this.newItem = newAnotheritem}}placeholder="your favorite fruite" className="Favinput" type="text" />
            <input type="submit" value="press me" />
            </form>
            </div>
            <ul>
            {
            this.state.buyItems.map(items => {
                return(
                    <li key={items}>{items}</li>
                );
            })
            }
            </ul>
            </div>
        );
    }
}
export default App;
//efji
//wdwd
//dvdv
//iwjfo