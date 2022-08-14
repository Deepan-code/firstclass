import React from "react";

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }

    incNumber = () => {
        let newValue = this.state.number + 1;
        this.setState({ number: newValue })
    }

    render() {
        return (
            <button onClick={this.incNumber}> {this.state.number} </button>
        )
    }
}
export default MyApp;