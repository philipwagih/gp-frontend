import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../UserLoggedIn.css'
// import { ChangeEvent, useState, use } from 'react';


const UserLoggedIn = props => {
	// Create a reference to the hidden file input element
	const hiddenFileInput = React.useRef(null);
  
	// Programatically click the hidden file input element
	// when the Button component is clicked
	const handleClick = event => {
	  hiddenFileInput.current.click();
	};
	
	// Call a function (passed as a prop from the parent component)
	// to handle the user-selected file 
	const handleChange = event => {
	  const fileUploaded = event.target.files[0];
	  props.handleFile(fileUploaded);
	};
	return(
		<div className='land-hero-container'>
			<h1>SCAN PRODUCT TO BEGIN</h1>
			<div className='hero-btns'>
				<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={handleClick}>
					UPLOAD QR CODE
				</Button>
				<input
					type="file"
					accept="image/*"
					ref={hiddenFileInput}
					onChange={handleChange}
					style={{display: 'none'}} />
			</div>
		</div>
	);
}
export default UserLoggedIn;