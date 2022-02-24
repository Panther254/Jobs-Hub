import React from 'react'
import '../styles/Login.css'
import { Icon } from '@iconify/react';

const Login = () => {
	return (
		<div className="Login">
			<div className="login__container">
				<div className="illustrator__container">

				</div>
				<div className="login__details">
					<div className="login__prompt">
						<p>Don't Have An Account?</p>
						<button>Sign Up</button>
					</div>
					<h3>Welcome To Jobs-Hub</h3>
					<h4>Sign In</h4>

					<form action="">
						<label>Email:</label>
						<input type="text"/>
						<label>Password:</label>
						<input type="password"/>
					</form>

					<button>Sign In</button>

					<p>Or Sign In Using</p>

					<div className="social__icons">
						<Icon icon="logos:facebook" />
						<Icon icon="logos:twitter" />
						<Icon icon="flat-color-icons:google" />					
					</div>
				</div>
			</div>	
		</div>
	)
}

export default Login