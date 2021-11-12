import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        const {count,increment} = this.props
        return (
            <h4 onMouseOver={increment}> hovered {count} times</h4>
        )
    }
}

export default HoverCounterTwo
