import React from 'react'
import withCounter from './withCounter'

function ClickCounter({count,increment}) {
    return (
        <div>
            <button onClick={increment}>clicked {count} times</button>
        </div>
    )
}

export default withCounter(ClickCounter)

