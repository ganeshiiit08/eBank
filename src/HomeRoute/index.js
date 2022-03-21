import Cookies from 'js-cookie'
import {
  AppContainer,
  HomeContainer,
  Heading,
  Navbar,
  LogoImage,
  LogoutBtn,
  HomeBgImage,
} from './styled'

const HomeRoute = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  return (
    <AppContainer>
      <Navbar>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutBtn onClick={onClickLogout}>Logout</LogoutBtn>
      </Navbar>
      <HomeContainer>
        <Heading>Your Flexibility, Our Excellence</Heading>
        <HomeBgImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </HomeContainer>
    </AppContainer>
  )
}

export default HomeRoute
