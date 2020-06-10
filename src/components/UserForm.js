import React, {useState} from 'react'
import useForm from './Hooks/useForm'

function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useForm('')
    const [lastName, bindLastName, resetLastName] = useForm('')

    const handleSubmit = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
            <label>First Name</label>
            <input 
            {...bindFirstName}
            type="text"/>
            </div>
            <div>
            <label>Last Name</label>
            <input 
            {...bindLastName}
            type="text"/>
            </div>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
