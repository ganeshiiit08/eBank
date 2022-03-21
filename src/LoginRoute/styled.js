import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #152850;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.div`
  width: 80%;
  height: 80vh;
  background-color: #e0eefe;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const LoginImage = styled.img`
  width: 50%;
`
export const LoginForm = styled.form`
  width: 40%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const Heading = styled.h1`
  color: #183b56;
  font-size: 30px;
  font-weight: 800;
`
export const LabelField = styled.label`
  color: #5a7184;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 500;
`
export const InputText = styled.input`
  width: 90%;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  color: #183b56;
  border-radius: 10px;
  border: 1px solid #c3cad9;
  outline: none;
  padding-left: 20px;
  margin-bottom: 20px;
  background-color: transparent;
`
export const LoginButton = styled.button`
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  width: 90%;
  height: 40px;
  background-color: #1565d8;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  align-self: center;
  color: #ff0b37;
  font-size: 12px;
  font-weight: 800;
`
