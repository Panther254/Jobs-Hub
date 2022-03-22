import React,{ useState,useEffect } from 'react'
import '../styles/JobSeekerProfile.css'

const JobSeekerProfile = () => {

	const initialState = {
		username:"",
		email:"",
		educationLevel:"",
		linkedInProfile:"",
		about:"",
		editable: false,
		reset: false
	}

	const [state, setState] = useState(initialState)
	
	const updateProfile =(e)=>{
		setState({...state, editable:true})

	}

	const handleChange = (e) => {
		const {name,value}= e.target
		setState({...state, [name]:value})
	}

	const confirmUpdate =(e) => {
		const yes = window.confirm("You Are About To Change Your Details, Are You Sure?")
		if (yes) {
			alert("Data Sent To Backend For Processing,Please Wait")
		}
	}

	useEffect(() => {
		const initialState1 = {
			username:"jsjdkljjs",
			email:"klksgk;sk",
			educationLevel:"gkslk;ldks",
			linkedInProfile:"gkskgll;dk",
			about:"kgksdlkgs;l",
			editable: false 
		}

		setState(initialState1)
	}, [state.reset])

	return (
		<div className="JobSeekerProfile">
			<form action="">
				<div className="jobSeekerDetails">
					<label>Username:</label>
					<input type="text"  name="username" value={state.username} onChange={handleChange} {...{"disabled": `${state.editable?"":"true"}`}}/>
				</div>

				<div className="jobSeekerDetails">
					<label>Email:</label>
					<input type="text"  name="email" value={state.email} onChange={handleChange} {...{"disabled": `${state.editable?"":"true"}`}}/>
				</div>

				<div className="jobSeekerDetails">
					<label>Education Level:</label>
					<input type="text"  name="educationLevel" value={state.educationLevel} onChange={handleChange} {...{"disabled": `${state.editable?"":"true"}`}}/>
				</div>

				<div className="jobSeekerDetails">
					<label>LinkedIn Profile:</label>
					<input type="text"  name="linkedInProfile" value={state.linkedInProfile} onChange={handleChange} {...{"disabled": `${state.editable?"":"true"}`}}/>
				</div>

				<div className="jobSeekerDetails">
					<label>About:</label>
					<textarea cols="20" rows="5"  name="about" value={state.about} onChange={handleChange} {...{"disabled": `${state.editable?"":"true"}`}}/>
				</div>

			</form>

			<div className="buttonContainer">	
				{state.editable?(<button className="btn" onClick={confirmUpdate}>Confirm</button>):(<button className="btn" onClick={updateProfile}>Update</button>)}	
				{!state.editable?"":(<button className="btn cancelBtn" onClick={()=>setState({...state,editable:false,reset:true})}>Cancel</button>)}
			</div>
		</div>
	)
}

export default JobSeekerProfile