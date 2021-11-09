import React, { Component } from 'react'
import FRinput from './FRinput'

class ParentFRinput extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    

    render() {
    console.log(this.inputRef)

        return (
            <div>
                <FRinput ref={this.inputRef}/>
                <button onClick={this.clickHandler}> click</button>
            </div>
        )
    }
}

export default ParentFRinput
