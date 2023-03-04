import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../UserLoggedIn.css'
// import { ChangeEvent, useState, use } from 'react';


function UserLoggedIn() {
	return(
		<div className='land-hero-container'>
			<h1>SCAN PRODUCT TO BEGIN</h1>
			<div className='hero-btns'>
				<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
					UPLOAD QR CODE
				</Button>
			</div>
		</div>
	);
}
export default UserLoggedIn;