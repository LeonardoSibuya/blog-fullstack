import * as S from './styles'

import { Container } from '../../style'
import { useGetPostsQuery } from '../../services/api'

const Header = () => {
  const { data: postsApi } = useGetPostsQuery()

  return (
    <S.Header>
      <Container>
        <S.Content>
          <S.TitleDiv to="/">
            <h1>BlogPost</h1>
          </S.TitleDiv>
          <S.Perfil>
            <p>Hi Leonardo!</p>
            {postsApi !== undefined && postsApi.length < 1 ? (
              <p>You have no posts yet</p>
            ) : (
              <p>
                You Have<span> {postsApi?.length} Posts </span>
              </p>
            )}
          </S.Perfil>
        </S.Content>
      </Container>
    </S.Header>
  )
}

export default Header
