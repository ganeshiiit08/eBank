import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #152850;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 20px;
  height: 60px;
`

export const LogoImage = styled.img`
  height: 100%;
`
export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 1px solid #ffffff;
  height: 40px;
  width: 120px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const Heading = styled.h1`
  font-size: 44px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 40px;
`
export const HomeBgImage = styled.img`
  width: 60%;
`
