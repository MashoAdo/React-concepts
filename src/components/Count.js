import React, { Component } from 'react'

export class Count extends Component {
    constructor() {
        super()
        this.state = {
            increase: 0
        }

        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({
            increase: this.state.increase + 1
        })
    }


    render() {
        return (
            <div>
                <h1>count - {this.state.increase}</h1>
                <button onClick={this.increment}>increase</button>
            </div>
        )
    }
}

export default Count
