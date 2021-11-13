import { UserConsumer } from './UserContext'
import React, { Component } from 'react'

export class ComponentC extends Component {
    render() {
        return (
        <UserConsumer>
         {
             userName => {
                 return <div>Tricky {userName}</div>
             }
         }
        </UserConsumer>
        )
    }
}

export default ComponentC
