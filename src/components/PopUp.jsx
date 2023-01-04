import React from 'react'

const PopUp = (props) => {

    // console.log(props)
    return ((props.trigger) ? (

        <div>
            <button onClick={() => props.setTrigger(false)}>CLOSE</button>
            {props.children}
        </div>
    ) : ""
    )
}

export default PopUp
