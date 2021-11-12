import React,{Component} from "react";

const withCounter = WrappedComponent=> {
    
    class withCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }

        increment = () => {
            this.setState(prevValue => {
               return {count: prevValue.count + 1}
            })
        }
        

        render() {
            return (
                <div>
                    <WrappedComponent count={this.state.count} increment={this.increment} />
                </div>
            )
        }
    }
    return withCounter  

}

export default withCounter