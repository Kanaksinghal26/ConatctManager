import React from 'react'
import './Home.css'

const Addnew = () => {
  return (
    <>
		<h1 className='addnew_heading'>ADD NEW</h1>

		<input type="file" id="img" name="img" accept="image/*">
		</input>
			<div className='camera_box'>
				<p>camera</p>
			</div>
		
		<form>
			<div className='inputs'><strong>Name:</strong> <input type="text" name="" id="name" /></div>
			<div className='inputs'><strong>Email:</strong> <input type="email" name="" id="email" /></div>
			<div className='inputs'><strong>Phone</strong> <input type="number" name="" id="phone" /></div>
			<div className='inputs'><strong>Nation</strong> <input type="text" name="" id="nation" /></div>
			<div className='inputs'><strong>Profession:</strong> <input type="text" name="" id="profession" /></div>
			<div className='inputs'><strong>Nickname:</strong> <input type="text" name="" id="nickname" /></div>
			<div className='inputs'><strong>Mutuality:</strong> <input type="text" name="" id="mutuality" /></div>
			<div className='inputs'><strong>Address:</strong> <input type="text" name="" id="address" /></div>

		</form>

		<div className='submit'>ADD</div>
    </>
  )
}

export default Addnew