import styled from 'styled-components'

import bg_image from '../../images/foto-background-pc-blue.png'
import { Container, breakpoints } from '../../style'

export const Banner = styled.div`
  background-image: url(${bg_image});
  color: #fff;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 24px 0;
  margin-bottom: 24px;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoints.celphone}) {
      flex-direction: column;
    }
  }
`
export const Profile = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: ${breakpoints.celphone}) {
    flex-direction: column;
    text-align: center;
  }

  img {
    border-radius: 24px;
    max-width: 140px;
    height: 140px;
  }

  div {
    h2 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
      margin: 8px 0;
    }
  }
`

export const ButtonsLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${breakpoints.celphone}) {
    margin-top: 16px;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #9450fc;
    padding: 8px 16px;
    letter-spacing: 1px;
    border-radius: 8px;
    transition: 0.5s ease;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
      padding: 8px;
      text-align: center;
    }

    @media (max-width: ${breakpoints.celphone}) {
      font-size: 12px;
      padding: 8px;
      text-align: center;
    }

    &:hover {
      background-color: #bc93ff;
      transition: 0.5s ease;
    }
  }
`
