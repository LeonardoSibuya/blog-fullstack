import styled from 'styled-components'
import { breakpoints } from '../../style'

export const Container = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  background-color: #00c903;
  width: 800px;
  margin-top: 24px;
  padding: 8px 0px;
  border-radius: 32px;
  text-align: center;

  p {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 0px 1px 2px #000;
  }

  @media (max-width: ${breakpoints.celphone}) {
    left: 32px;
    width: 320px;

    p {
      font-size: 12px;
    }
  }
`
