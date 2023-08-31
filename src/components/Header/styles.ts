import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { breakpoints } from '../../style'

export const Header = styled.header`
  background-color: #3877f4;
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

  @media (max-width: ${breakpoints.celphone}) {
    flex-direction: column;
  }
`

export const TitleDiv = styled(Link)`
  cursor: pointer;
  text-decoration: none;

  h1 {
    font-size: 24px;
    padding: 24px 0;
    color: #fff;
  }
`

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${breakpoints.celphone}) {
    margin-bottom: 16px;
  }
`
