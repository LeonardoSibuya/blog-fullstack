import * as S from './styles'
import { Container } from '../../style'

import postImage from '../../images/post.png'
import { ResultsPosts } from '../../services/api'

interface Props extends ResultsPosts {
  modal?: () => void
}

const Posts = ({ created_on, description, title, modal, update_on }: Props) => {
  return (
    <Container>
      <S.PostContent>
        <S.HeadPost>
          <div>
            <h4>{title}</h4>
            <div>
              <span>{created_on}</span>
              <span>{update_on}</span>
            </div>
          </div>
          <S.ButtonList>
            <button onClick={modal}>
              <img src={postImage} alt="" />
              View Post
            </button>
          </S.ButtonList>
        </S.HeadPost>
        <p>{description}</p>
      </S.PostContent>
    </Container>
  )
}

export default Posts
