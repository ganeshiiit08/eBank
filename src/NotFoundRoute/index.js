import {AppContainer, ImageLogo, Heading, Description} from './styled'

const NotFound = () => (
  <AppContainer>
    <ImageLogo
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Description>
      We are sorry, the page you requested could not be found.
    </Description>
  </AppContainer>
)

export default NotFound
