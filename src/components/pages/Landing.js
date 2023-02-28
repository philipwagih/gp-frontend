import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Background from '../Background'
import Logo from '../Logo'
import Login from '../pages/Login'

export default function Landing({ navigation }) {
  return (
    <Background>
      <Login />
    </Background>
  );
}