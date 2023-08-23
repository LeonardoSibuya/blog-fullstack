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
          <a href="mailto:e_sibuya@outlook.com">Contact Me</a>
          <a
            href="https://www.linkedin.com/in/leonardo-sibuya"
            target="_blank"
            rel="noreferrer"
          >
            Conenct Me on LinkedIn
          </a>
        </S.ButtonsLinks>
      </Container>
    </S.Banner>
  )
}

export default Banner
