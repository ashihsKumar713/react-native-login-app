import React from 'react';

import { connect } from 'react-redux';

import {SignupPage} from './../pages/signup'

import * as signup_actions from './../actions/signup/index'
import * as login_actions from './../actions/login/index'


class SignupContainer extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
	    return ( 
          <SignupPage 
            navigator={this.props.navigator} 
            onRegister={this.props.onRegister} 
            googleSignup={this.props.onGoogleSignup} 
            login_user={this.props.login}
            ui={this.props.ui} />
      )
  }
}


function mapStateToProps(state,props){
  state = state.toJS()  
  return {
    login : state.login,
    ui: state.ui
  }
}
const mapDispatchToProps = (dispatch) => {   //es6 way
     return {
      onGoogleSignup : (text) => {
        return dispatch(login_actions.loginTodo())
      },
      onRegister : (firstname,lastname,email,password) => {
        return dispatch(signup_actions.signup(firstname,lastname,email,password))
      }
     }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupContainer)
