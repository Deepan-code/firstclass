import React, { Component } from 'react'

class ConditonalRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    render() {

      return  this.state.isLoggedIn && <div>Welcome Deepan </div>

        /* Ternary  conditional operator  */
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Deepan</div> 
        //         : <div>Welcome Guest</div>
        // )

        /* Element variables  */

        // let message;

        // if (this.state.isLoggedIn){
        //     message = "Welcome Deepan";
        // } else {
        //     message= "Welcome Guest"
        // }

        // return <div> {message} </div>

        /* if else method  */

        // if (this.state.isLoggedIn) {
        //     return <div> welcome Deepan</div>

        // } else {
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default ConditonalRendering