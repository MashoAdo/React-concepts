import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }

        this.changeLogged = this.changeLogged.bind(this)
    }

    changeLogged (){
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }
    
    render() {
        return (
            <div>
                
            {this.state.isLoggedIn? <div>Welcome Khalid</div> :<div>Welcome Guest</div>}
            <button onClick={this.changeLogged}>change</button>

            </div>
        )
    }
}

export default UserGreetings
