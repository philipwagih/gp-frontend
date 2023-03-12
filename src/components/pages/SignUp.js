import React, {Component} from 'react'
import styled from "styled-components";
import Background from "../Background";
import {register} from '../../web3Client';


const Container = styled.div`
  width: 100vw;
  height: 83vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// `;

const Button = styled.button`
  width: 47%;
  margin: 20px 5px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

class SignUp extends Component{  
  
  constructor() {
    super();
    this.state = {
      input: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  validate(){
    let input = this.state.input;
    let isValid = true;
    if (typeof input['userpass'] !== "undefined" && typeof input['confirmpass'] !== "undefined") 
        if (input['userpass'] !== input['confirmpass']) 
                isValid = false;
      return isValid;
    }

    handleChange(event) {
      let input = this.state.input;
      input[event.target.name] = event.target.value;
    
      this.setState({
        input
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();

      console.log(this.validate())
      console.log(this.state);
      if(this.validate==true)
      {
        register(this.state.input['username'],
        this.state.input['useremail'],
        this.state.input['userpass'])
      }
      else{
        //invalid pass
      }
      }
render(){
  return (
    <Background>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={this.handleSubmit}>
          {/* <Input placeholder="name" />
          <Input placeholder="last name" /> */}

          <Input type='text' name='username' placeholder="username" required onChange={this.handleChange}/>
          <Input placeholder="email" name='useremail' required onChange={this.handleChange}/>
          <Input type='password' name='userpass' placeholder="password" required onChange={this.handleChange}/>
          <Input type='password' name='confirmpass' placeholder="confirm password" required onChange={this.handleChange}/>
          <Button>CREATE</Button>
          <Button>COMPANY REGISTRATION</Button>
        </Form>
      </Wrapper>
    </Container>
    </Background>
  );
};
}
export default SignUp;