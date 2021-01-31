import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });

    } catch(error) {
      console.log(error)
    }  

  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Уже есть аккаунт</h2>
        <span>Войдите, указав адрес электронной почты и пароль</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Войти </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Войти через google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;