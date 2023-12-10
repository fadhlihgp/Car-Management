import imgLogin from "../../resources/imgLogin.png"
import FormLogin from "../../components/FormLogin";
import {GoogleLogin} from "@react-oauth/google";
import React from "react";


const Login = () => {
    return (
        <div className='d-flex w-100'>
            <div style={{width: '65%'}}>
                <img src={imgLogin} alt='login' width='100%'/>
            </div>
            <div style={{width:'35%'}}>
                <FormLogin />
                {/*<GoogleLogin*/}
                {/*    onSuccess={credentialResponse => {*/}
                {/*        console.log(credentialResponse);*/}
                {/*    }}*/}
                {/*    onError={() => {*/}
                {/*        console.log('Login Failed');*/}
                {/*    }}*/}
                {/*/>;*/}
            </div>
        </div>
    )
}

export default Login;
