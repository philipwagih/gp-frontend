import React from 'react';
import '../../App.css';
import Background from '../Background'
import Login from '../pages/Login'

export default function Landing({ navigation }) {
  return (
    <Background>
      <Login />
    </Background>
  );
}