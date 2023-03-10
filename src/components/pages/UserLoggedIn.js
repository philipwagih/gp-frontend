import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../UserLoggedIn.css'
import QrScanner from 'qr-scanner';
import { ChangeEvent, useState, use } from 'react';


const UserLoggedIn = props => {

	const [result, setResult] = useState("")

	//QR Code Read function
	const readQcode = (e) => {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		QrScanner.scanImage(file, { returnDetailedScanResult: true })
			.then(result => console.log(result.data))
			.catch(e => console.log(e));
	  }
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
	  console.log(fileUploaded.type)
	  //props.handleFile(fileUploaded);
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
					// onChange={handleChange}
					onChange={(e) => readQcode(e)}
					style={{display: 'none'}} />
			</div>
		</div>
	);
}
export default UserLoggedIn;