import styled from 'styled-components'

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

    &:hover {
      background-color: #bc93ff;
      transition: 0.5s ease;
    }
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
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #eee;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0px 1px 8px #000;

  span {
    color: #9450fc;
    font-size: 12px;
  }

  p {
    margin-top: 16px;
    max-width: 740px;
    line-height: 22px;
    text-align: justify;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    max-width: 640px;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 320px;
  }
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
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 24px;
    letter-spacing: 1px;
    color: #000;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

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
