import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Header = styled.header`
  background-color: #9450fc;
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 0.4px 4px #000;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  h1 {
    font-size: 24px;
    padding: 24px 0;
  }
`

export const LinkHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  color: #fff;
  transition: 0.5s ease;

  img {
    max-width: 100%;
    width: 16px;
    object-fit: cover;
  }

  &:hover {
    background-color: #ab79fc;
    border-radius: 16px;
    transition: 0.5s ease;
    padding: 8px;
  }
`

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    max-width: 80px;
    height: 60px;
    border-radius: 50%;
  }
`
