import * as S from './styles'

import photo_perfil from '../../images/foto-prefil-peq.jpg'
import post from '../../images/post.png'

import { Container } from '../../style'

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Content>
          <h1>My Blog</h1>
          <S.LinkHome to="/">
            <img src={post} alt="imagem de postagem" /> Posts
          </S.LinkHome>
          <S.Perfil>
            <p>Olá Leonardo!</p>
            <img src={photo_perfil} alt="Foto de perfil" />
          </S.Perfil>
        </S.Content>
      </Container>
    </S.Header>
  )
}

export default Header
