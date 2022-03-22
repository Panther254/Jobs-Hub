import React,{ useState } from 'react'
import '../styles/EmployerRegisterForm.css'


const EmployerRegisterForm = () => {
	const [data, setData] = useState({
		companyName: "",
		companyEmail: "",
		companyPhone: "",
		password: "",
		confirmPassword: ""
	})

	const register =(e)=>{
		alert("Data Sent to Backend!")
	}
	return (
		<div className="EmployerRegisterForm">
			<form action="">
				<div>
					<label>Company Name:</label>
					<input type="text" value={data.companyName} onChange={(e)=> setData({...data,companyName: e.target.value})}/>
				</div>
				<div>
					<label>Company Email:</label>
					<input type="text" value={data.companyEmail} onChange={(e)=> setData({...data,companyEmail: e.target.value})}/>
				</div>
				<div>
					<label>Company Phone:</label>
					<input type="text" value={data.companyPhone} onChange={(e)=> setData({...data,companyPhone: e.target.value})}/>
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

export default EmployerRegisterForm