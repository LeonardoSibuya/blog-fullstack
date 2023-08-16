import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const TitlePage = styled.h2`
  text-align: center;
  font-size: 28px;
  letter-spacing: 1px;
  margin-top: 32px;
`
export const Form = styled.form`
  margin-top: 24px;
  text-align: center;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  label {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  input {
    border-radius: 8px;
    border: 2px solid #ccc;
    padding: 8px;
    outline: none;
    transition: 0.5s ease;

    :focus {
      border-color: #9450fc;
      outline: none;
      transition: 0.5s ease;
      padding: 8px 16px;
    }
  }

  textarea {
    border-radius: 8px;
    border: 2px solid #ccc;
    padding: 8px;
    outline: none;
    transition: 0.5s ease;
    resize: none;
    width: 400px;
    height: 160px;

    :focus {
      border-color: #9450fc;
      outline: none;
      transition: 0.5s ease;
      width: 480px;
    }
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  button {
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #9450fc;
    padding: 6px 16px;
    letter-spacing: 1px;
    border-radius: 8px;
    transition: 0.5s ease;

    &:hover {
      background-color: #bc93ff;
      transition: 0.5s ease;
    }
  }
`

export const ButtonPage = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #9450fc;
  padding: 6px 16px;
  letter-spacing: 1px;
  border-radius: 8px;
  transition: 0.5s ease;

  &:hover {
    background-color: #bc93ff;
    transition: 0.5s ease;
  }
`
