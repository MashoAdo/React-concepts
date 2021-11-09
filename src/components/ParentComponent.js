import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import PureComp from './PureComp'
// import RegComp from './RegComp'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "nache"
        }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: "nache"
            })
        },2000)
    }
    
    render() {
        console.log("===================parent comp render=================")
        return (
            <div>
                parent component
                <MemoComp />
                {/* <RegComp  name={this.state.name}/> */}
                {/* <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComponent
