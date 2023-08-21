import styled from 'styled-components'

export const PostContent = styled.div`
  background-color: #eee;
  padding: 24px 16px;
  border-radius: 16px;
  margin-bottom: 24px;

  h4 {
    font-size: 18px;
  }

  span {
    font-size: 12px;
    margin-top: 8px;
    display: block;
    color: #712ce0;
  }

  p {
    width: 100%;
    padding-right: 16px;
    text-align: justify;
  }
`

export const HeadPost = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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

    img {
      max-width: 16px;
    }
  }
`
