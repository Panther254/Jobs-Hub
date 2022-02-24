import React from 'react'
import '../styles/Job.css'
import WorkIcon from '@material-ui/icons/Work'

const Job = () => {
	return (
		<div className="job__detailView">
			<div className="job__icon">
				<WorkIcon />
			</div>
			<div className="job__description">
				<p><strong>Sales Assistant- Nairobi</strong></p>
				<p>iRob Technologies</p>
				<p>IT</p>
				<p>Full-Time</p>
				<p>Fintech | IT</p>
				<p>⭐⭐⭐⭐</p>
			</div>
		</div>
	)
}

export default Job