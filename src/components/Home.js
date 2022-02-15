import React from 'react'
import '../styles/Home.css'
import NavBar from './NavBar.js'
import Footer from './Footer.js'

const Home = () => {
	return (
		<div className="Home">
			<h1>This is The Home</h1>
			<NavBar />
			<Footer />
		</div>
	)
}

export default Home