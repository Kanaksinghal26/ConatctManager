import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { contacts } from '../utils/Data'
import "./Home.css"
// import add from '../Images/Addnew'

const Home = () => {

const[data, setData] = useState(contacts);
  
  return (


		<div>
			<div className='heading'><h1>Contact Manager</h1></div>

			<div className='contactlist'>
{/* 
				{data} && {data}.map(ab => {
						return (
							<div>
								{ab.name}
							</div>
						)
				}) */}

			</div>
				<Link to={"/Home/Addnew"}>
					<button className='add_sign'>+</button>
					{/* <button>{add}</button> */}
				</Link>
		</div>
      	
    
    
  )
}

export default Home