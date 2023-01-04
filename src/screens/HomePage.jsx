import React, { useState } from 'react'
import Card from '../components/card'
import Form from '../components/Form'
import './index.css'

const HomePage = () => {

    const [user, setUser] = useState({
        name: '',
        age: '',
        gender: '',
    });

    const [userList, setUserList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.name === '' || user.age === '' || user.gender === '') {
            alert("Please fill the details");
        }
        else if (user.id) {
            setUserList(userList.map((elem) => {
                if (elem.id === user.id) {
                    elem = user;
                }
                return elem
            }))
            setUser({
                name: '',
                age: '',
                gender: '',
            })
        }
        else {
            setUserList([...userList, { ...user, id: Date.now() }])
            setUser({
                name: '',
                age: '',
                gender: '',
            })
        }
    }

    const handleUpdate = (id) => {
        let updateValue = userList.find((CurrElem, i) => {
            return CurrElem.id === id
        })
        setUser(updateValue);
    }

    const handleDelete = (id) => {
        let newUserList = userList.filter((CurrElem, i) => {
            return (CurrElem.id !== id)
        })
        setUserList(newUserList)
    }

    const cardArgs = {
        userList,
        handleUpdate,
        handleDelete
    };

    const formArgs = {
        user,
        handleSubmit,
        setUser
    };

    return (
        <div className='home-container'>
            <Card {...cardArgs} />
            <Form {...formArgs} />
        </div>
    )
}

export default HomePage
