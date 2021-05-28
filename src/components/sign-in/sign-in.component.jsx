import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try{
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email: '', password: ''});
		}catch(error){
			console.log(error);
		}

	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name] : value});
	}

	render(){
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput 
						handleChange={this.handleChange} 
						name="email" 
						label="email"
						type="email" 
						value={this.state.email} 
						required 
					/>
					<FormInput 
						handleChange={this.handleChange} 
						label="password"
						name="password" 
						type="password" 
						value={this.state.password} 
					/>

					<div className='buttons'>
						<CustomButton type="submit" value="Submit Form" >
							Sign In
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn value="Submit Form" >
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;