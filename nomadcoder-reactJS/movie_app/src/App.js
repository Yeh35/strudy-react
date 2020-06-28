import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
        
    state = {
        count: 0
    };
    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    };
    render() {
        return <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minuss</button>
        </div>;
    }
}

export default App;