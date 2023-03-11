import React, {Component} from 'react'
import styled from "styled-components";
import {login} from '../../web3Client';




const Container = styled.div`
  width: 120vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

class Login extends Component{
    
    state = {
        username: '', 
        userpass: ''
      }
 
handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
}

 handleSubmit = (e) => {
    e.preventDefault();
    login(this.state.username,this.state.userpass).then((res)=>{
      console.log(res)
    }); 
    }

render(){
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={this.handleSubmit}>
          <Input placeholder="username" id='username' onChange={this.handleChange}/>
          <Input type='password' placeholder="password" name='userpass' onChange={this.handleChange}/>
          <Button type='submit'>LOGIN</Button>
          <Link to="/sign-up">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
}
export default Login;