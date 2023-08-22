import styled from 'styled-components'

export const PostContent = styled.div`
  background-color: #eee;
  padding: 24px 16px;
  border-radius: 16px;
  margin-bottom: 24px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.5s ease;

  &:hover {
    border: 1px solid #712ce0;
    transition: 0.5s ease;
  }

  h4 {
    font-size: 18px;
  }
`

export const HeadPost = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const DivDate = styled.div`
  display: flex;
  gap: 8px;

  div {
    text-align: center;
    gap: 4px;
    background-color: #d4baff;
    border-radius: 24px;
    padding: 4px 0;
    width: 100px;

    p {
      font-size: 10px;
      letter-spacing: 1px;
    }

    span {
      font-size: 10px;
      color: #712ce0;
    }
  }
`
