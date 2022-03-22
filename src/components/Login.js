import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../styles/Login.css'
import { Icon } from '@iconify/react';
import { auth, provider } from "../firebase.js"
import { signInWithPopup } from '@firebase/auth';
import { useStateValue } from '../DataStore';
import { actionTypes } from '../reducer';

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [,dispatch] = useStateValue()
	const navigate = useNavigate()

	const facebookAuth = ()=>{

	}

	const twitterAuth = ()=>{

	}

	const googleAuth =()=>{
		signInWithPopup(auth, provider).then((results)=>{
			// const userData = results.user
            const name = results.user.displayName
            dispatch({
                type: actionTypes.SET_USER,
                user: name,
            });
            navigate('/')
        }).catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error code ${errorCode}: ${errorMessage}`);
         })
	}

	const signIn = ()=>{
		alert("Data Sent To Backend")
	}


	return (
		<div className="Login">
			<div className="login__container">
				<div className="illustrator__container">

				</div>
				<div className="login__details">
					<div className="login__prompt">
						<p>Don't Have An Account?</p>
						<button onClick={()=> navigate('../signUp')}>Sign Up</button>
					</div>
					<h3>Welcome To Jobs-Hub</h3>
					<h4>Sign In</h4>

					<form action="">
						<label>Email:</label>
						<input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
						<label>Password:</label>
						<input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
					</form>

					<button onClick={signIn}>Sign In</button>

					<p>Or Sign In Using</p>

					<div className="social__icons">
						<Icon icon="logos:facebook" onClick={facebookAuth}/>
						<Icon icon="logos:twitter" onClick={twitterAuth}/>
						<Icon icon="flat-color-icons:google" onClick={googleAuth}/>
					</div>
				</div>
			</div>	
		</div>
	)
}

export default Login