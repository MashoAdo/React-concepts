import React, { Component } from 'react'



class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    handleClick = () => {
        alert(this.inputRef.current.value)
    }

    componentDidMount() {
        console.log(this.inputRef)
        // add focus on input element
        this.inputRef.current.focus()
    }


    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} placeholder="user name" />
                <button onClick={this.handleClick}> click </button>
            </div>
        )
    }
}

export default RefsDemo
