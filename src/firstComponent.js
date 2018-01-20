import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buyItems : ['holo','moz','gilas']
        }
    }
    addNewItem(e){
        e.preventDefault();
        let {buyItems} = this.state;
        const newItem = 'text';
            buyItems.setState({
              buyItems : [...this.state.buyItems,newItem]
            })
    }
    
    render() {
        return(
            <div className="Parent">
            <div className="parentOfForm">
            <form onSubmit={(info) => {this.addNewItem(info)}}>
            <input placeholder="your favorite fruite" className="Favinput" type="text" />
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