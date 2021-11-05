import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Nache"
        }
        console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifecyclB componentDidMount ")
    }

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("LifecycleB componentDidUpdate")
    }

    
    render() {
        console.log("LifecycleB render")
        return (
            <div>
                 
            </div>
        )
    }
}

export default LifecycleB
