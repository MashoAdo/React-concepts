import React, { Component } from 'react'
import withCounter from './withCounter'


export class HoverCounter extends Component {
    render() {
        const { count, increment} = this.props
        return (
            <div>
                <h5 onMouseOver={increment}>hover {count} times</h5>
            </div>
        )
    }
}

export default withCounter(HoverCounter)
