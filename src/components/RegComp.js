import React, { Component } from 'react'

class RegComponent extends Component {
    render() {
        console.log("reg comp render")
        return (
            <div >
                Regular component {this.props.name}
            </div>
        )
    }
}

export default RegComponent
