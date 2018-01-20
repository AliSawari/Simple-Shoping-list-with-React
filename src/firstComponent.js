import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buyItems : ['holo','moz','gilas']
        }
    }
    
    render() {
        return(
            <div className="Parent">
            <p>This is a paragraph that we can put long text in it</p>
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