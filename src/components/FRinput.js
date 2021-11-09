import React from 'react'

const FRinput = React.forwardRef((props, x) => {
    return (
        <div>
            <input type="text" ref={x}/>
        </div>
    )
})

export default FRinput
