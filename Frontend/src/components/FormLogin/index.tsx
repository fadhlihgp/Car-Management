import rectangle from "../../resources/Rectangle62.png"
import {Alert, Button, Form, FormGroup} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormLogin = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let name = event.target.name;

        setInput({ ...input, [name]: value });
    }

    const handleOnClick = () => {
        setError("")
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post(process.env.REACT_APP_API_URL+'/api/v1/auth/login', input)
            .then((res) => {
                const token = res.data.data.token;
                // console.log(res.data.data.token)
                Cookies.set("token", token, { expires: 1} )
                navigate("/admin");
            })
            .catch((err) => {
                // console.log(err.response.data.message)
                toast.error(err.response.data.message, {
                    position: toast.POSITION.BOTTOM_CENTER,
                    theme: "colored"
                })
                setError(err.response.data.message)
            })
    }


    return (
        <div className="d-flex flex-column justify-content-center w-100 p-5 gap-4" style={{ minHeight: "100vh" }}>
            <img src={rectangle} alt={'logo'} width='100px'/>
            <h4><b>Welcome, Admin BCR</b></h4>
            {error && (<Alert variant='danger'>{error}</Alert>)}
            <Form onSubmit={handleLogin}>
                <FormGroup className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder={'Contoh: johndee@gmail.com'}
                        value={input.email}
                        onChange={handleChange}
                        onClick={handleOnClick}
                        name='email' required />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder={'6+ karakter'}
                        value={input.password}
                        onChange={handleChange}
                        onClick={handleOnClick}
                        minLength={7}
                        name='password' required />
                </FormGroup>
                <Button type='submit' style={{backgroundColor: '#0D28A6'}} className='container-fluid mt-2'>Sign In</Button>
            </Form>
        </div>
    )
}
export default FormLogin
