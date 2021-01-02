import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css'
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../StateProvider';

const Login = () => {
    const [state , dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: "SET_USER",
                user: result.user
            });
            console.log(result);
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt ="" />

                <img src ="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt ="" />           
            </div>

            <Button onClick = {signIn} type= "submit" > Sign In </Button>
        </div>
    )
}

export default Login;