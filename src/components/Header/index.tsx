import * as S from './styles'

import photo_perfil from '../../images/foto-prefil-peq.jpg'
import post from '../../images/post.png'
import fav from '../../images/add-fav.png'

import { Container } from '../../style'

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Content>
          <h1>My Blog</h1>
          <S.ListLinks>
            <li>
              <img src={post} alt="imagem de postagem" />
              <S.ButtonsLink to="/">Posts</S.ButtonsLink>
            </li>
            <li>
              <img src={fav} alt="imagem de coração" />
              <S.ButtonsLink to="favoriteposts">
                My Favorite Posts
              </S.ButtonsLink>
            </li>
          </S.ListLinks>
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
