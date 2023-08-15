import * as S from './styles'

import { Container } from '../../style'

import photo_perfil from '../../images/foto-prefil-peq.jpg'

const Banner = () => {
  return (
    <S.Banner>
      <Container>
        <S.Profile>
          <img src={photo_perfil} alt="" />
          <div>
            <h2>Leonardo Sibuya</h2>
            <p>Desenvolvedor Front-end | Back-end Python.</p>
          </div>
        </S.Profile>
        <S.ButtonsLinks>
          <a href="">Contact Me</a>
          <a href="">Conenct Me on LinkedIn</a>
        </S.ButtonsLinks>
      </Container>
    </S.Banner>
  )
}

export default Banner
