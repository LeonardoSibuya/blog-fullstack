import * as S from './styles'

import Header from '../../components/Header'
import { Container } from '../../style'

const NewPost = () => {
  return (
    <>
      <Header />
      <Container>
        <S.TitlePage>Add New Post</S.TitlePage>
        <S.Form>
          <S.ContainerInput>
            <label>Title</label>
            <input type="text" />
          </S.ContainerInput>
          <S.ContainerInput>
            <label>Text</label>
            <textarea />
          </S.ContainerInput>
          <S.ContainerButtons>
            <button>Save</button>
            <S.ButtonPage to="/">Cancel</S.ButtonPage>
          </S.ContainerButtons>
        </S.Form>
      </Container>
    </>
  )
}

export default NewPost
