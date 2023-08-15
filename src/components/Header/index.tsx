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
              <img src={post} alt="" />
              <a href="">Posts</a>
            </li>
            <li>
              <img src={fav} alt="" />
              <a href="">My Favorite Posts</a>
            </li>
          </S.ListLinks>
          <S.Perfil>
            <p>Olá Leonardo!</p>
            <img src={photo_perfil} alt="" />
          </S.Perfil>
        </S.Content>
      </Container>
    </S.Header>
  )
}

export default Header
