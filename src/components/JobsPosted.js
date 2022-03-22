import React,{ useState} from 'react'
import '../styles/JobsPosted.css'

const JobsPosted = () => {
	const [selectedRow, setSelectedRow] = useState("")

	const updateJob = (e) => {
		
	}

	const handleClick = (e)=>{
		const key = e.currentTarget.id
		setSelectedRow(key)
	}

	return (
		<div className="JobsPosted">
			<table>
				<thead>
					<tr>
						<th>Position</th>
						<th>Job Type</th>
						<th>Date Posted</th>
						<th>Sector</th>
						<th>Location</th>
						<th>Available</th>
					</tr>
				</thead>
				<tr id="1" className={`${selectedRow==="1"?"selectedRow":""}`} onClick={handleClick}>
					<td>Sales Agent</td>
					<td>Full-Time</td>	
					<td>12/02/2019</td>	
					<td>Agriculture</td>	
					<td>Eldoret</td>	
					<td>No</td>	
				</tr>
				<tr id="2" className={`${selectedRow==="2"?"selectedRow":""}`} onClick={handleClick}>
					<td>Sales Agent</td>
					<td>Full-Time</td>	
					<td>12/02/2019</td>	
					<td>Agriculture</td>	
					<td>Eldoret</td>	
					<td>No</td>	
				</tr>
				<tr id="3" className={`${selectedRow==="3"?"selectedRow":""}`} onClick={handleClick}>
					<td>Sales Agent</td>
					<td>Full-Time</td>	
					<td>12/02/2019</td>	
					<td>Agriculture</td>	
					<td>Eldoret</td>	
					<td>No</td>	
				</tr>
				<tr id="4" className={`${selectedRow==="4"?"selectedRow":""}`} onClick={handleClick}>
					<td>Sales Agent</td>
					<td>Full-Time</td>	
					<td>12/02/2019</td>	
					<td>Agriculture</td>	
					<td>Eldoret</td>	
					<td>No</td>	
				</tr>	
			</table>
			{selectedRow?<button onClick={updateJob}>Update</button>:""}
		</div>
	)
}

export default JobsPosted