import React, { useState } from 'react'
import './index.css'

const Form = (props) => {

    const { handleSubmit, user, setUser } = props

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    return (
        <div className='form-container'>

            <input className="userInput" type='text' name='name' placeholder='Enter Your Name' value={user.name} onChange={handleChange} />
            <input className="userInput" min="1" type='number' name="age" placeholder='Enter Your Age' value={user.age} onChange={handleChange} />
            <br />
            <div className='radio-form'>
                <input type="radio" value="Male" name="gender" checked={user.gender === "Male"} onChange={handleChange} /> Male
                <input type="radio" value="Female" name="gender" checked={user.gender === "Female"} onChange={handleChange} /> Female
                <input type="radio" value="Other" name="gender" checked={user.gender === "Other"} onChange={handleChange} /> Other
            </div>
            <br />
            {
                user.id ? <button className="toggleEditButton" onClick={handleSubmit} > Update </button> :
                    <button className="addButton" onClick={handleSubmit} > SUBMIT </button>
            }
        </div>
    )
}
export default Form












// const [btnPopup, setBtnPopup] = useState(false)
// {/* <button className="addButton" onClick={handleSubmit} > SUBMIT </button> */ }
// {/* // <button className="addButton" onClick={() => setBtnPopup(true)} > OPEN POPUP </button>
//              // <PopUp trigger={btnPopup} setTrigger={setBtnPopup}>
//             //     <h3>My PoPup value </h3>
//             // </PopUp> */}


// checked={users.gender === "Other"}