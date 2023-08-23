import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { PostContent } from '../Posts/styles'

export const ContentPage = styled.div`
  position: relative;
`

export const InfosPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  h3 {
    font-size: 24px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    padding: 8px;
    gap: 6px;
    border-radius: 8px;

    img {
      max-width: 16px;
    }

    input {
      border: none;
      outline: none;
      background-color: #eee;
    }
  }
`
export const ButtonNewPost = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #9450fc;
  padding: 8px 16px;
  letter-spacing: 1px;
  border-radius: 8px;
  transition: 0.5s ease;

  &:hover {
    background-color: #bc93ff;
    transition: 0.5s ease;
  }
`

export const NoPostDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  img {
    max-width: 360px;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`

export const ListPosts = styled.ul`
  overflow-y: scroll;
  max-width: 80%;
  margin: 0 auto 32px;
  height: 400px;
  max-height: 100%;
  position: relative;

  ::-webkit-scrollbar {
    width: 16px;
    border-radius: 40px;
    background-color: #bc93ff;
    border-left: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9450fc;
    border-radius: 40px;
  }

  ${PostContent} {
    margin: 16px 0;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
`
export const ModalContent = styled.div`
  width: 60%;
  position: relative;
  z-index: 1;
  background-color: #eee;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0px 1px 8px #000;
`
export const ImageClose = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  right: 0;
  margin: 16px;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 1024px) {
    top: -64px;
    left: 50%;
    right: 50%;
    width: 20px;
    height: 20px;
  }
`
export const HeadModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 24px;
    letter-spacing: 1px;
    color: #000;
  }

  span {
    color: #9450fc;
    font-size: 12px;
  }

  p {
    margin-top: 16px;
    line-height: 22px;
    text-align: justify;
  }
`
export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

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

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;

  button {
    text-align: center;
    width: 80px;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #9450fc;
    padding: 8px;
    border-radius: 8px;
    border: none;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
      background-color: #bc93ff;
      transition: 0.5s ease;
    }
  }
`
