import {Component} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  BgContainer,
  LoginContainer,
  LoginImage,
  LoginForm,
  LoginButton,
  Heading,
  LabelField,
  InputText,
  ErrorMsg,
} from './styled'

class LoginRoute extends Component {
  state = {userId: '', pinNumber: '', loginError: '', errorMsg: ''}

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginError = error => {
    this.setState({loginError: true, errorMsg: error})
  }

  onLoginRequest = async event => {
    event.preventDefault()
    const {userId, pinNumber} = this.state
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const userData = {user_id: userId, pin: pinNumber}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginError(data.error_msg)
    }
  }

  toChangePinNumber = event => {
    this.setState({pinNumber: event.target.value})
  }

  toChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  render() {
    const {userId, pinNumber, loginError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <BgContainer>
        <LoginContainer>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />

          <LoginForm onSubmit={this.onLoginRequest}>
            <Heading>Welcome Back</Heading>
            <LabelField htmlFor="ID">User ID</LabelField>
            <InputText
              id="ID"
              type="text"
              value={userId}
              placeholder="Enter User ID"
              onChange={this.toChangeUserId}
            />

            <LabelField htmlFor="PIN">PIN</LabelField>
            <InputText
              id="PIN"
              type="password"
              value={pinNumber}
              placeholder="Enter PIN"
              onChange={this.toChangePinNumber}
            />

            <LoginButton type="submit">Login</LoginButton>
            {loginError ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
          </LoginForm>
        </LoginContainer>
      </BgContainer>
    )
  }
}
export default LoginRoute
