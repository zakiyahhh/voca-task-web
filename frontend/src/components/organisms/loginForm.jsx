import React, { useState } from 'react'
import InputField from '../molecules/inputFields'
import Button from '../atoms/Button';
import { loginAuth } from '../../api/login'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await loginAuth(email, password)
            setUser(response.data.user)
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="bg-[#1b1424] p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-center text-purple-400 text-2xl font-semibold mb-1">VOCA</h2>
            <p className="text-center text-white mb-6">Task</p>
            <form onSubmit={handleSubmit}>
                <InputField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="sarah.santoso@gmail.com" />
                <InputField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" placeholder="********" />
                <Button type="submit">Sign In</Button>
            </form>
        </div>
    )
};

export default LoginForm;