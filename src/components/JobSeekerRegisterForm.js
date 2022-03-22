import React,{ useState } from 'react'
import '../styles/JobSeekerRegisterForm.css'
// import { useNavigate } from "react-router-dom"


const JobSeekerRegisterForm = () => {
	// const navigate = useNavigate()
	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: ""
	})

	const register =(e)=>{
		alert("Data Sent to Backend!")
	}

	return (
		<div className="JobSeekerRegisterForm">
			<form>
				<div>
					<label>Username:</label>
					<input type="text" value={data.username} onChange={(e)=> setData({...data,username: e.target.value})}/>
				</div>
				<div>
					<label>Email:</label>
					<input type="text" value={data.email} onChange={(e)=> setData({...data,email: e.target.value})}/>
				</div>
				<div>
					<label>Password:</label>
					<input type="password" value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
				</div>
				<div>
					<label>Confirm Password:</label>
					<input type="password" value={data.confirmPassword} onChange={(e)=> setData({...data,confirmPassword: e.target.value})}/>
				</div>
			</form>
			<button onClick={register}>Sign Up</button>
		</div>
	)
}

export default JobSeekerRegisterForm 