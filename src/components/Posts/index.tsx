import PostsClass from '../../models/Post'

import * as S from './styles'
import { Container } from '../../style'

import postImage from '../../images/post.png'

type Props = {
  post: PostsClass
  modal: () => void
}

const Posts = ({ post, modal }: Props) => {
  return (
    <Container>
      <S.PostContent>
        <S.HeadPost>
          <div>
            <h4>{post.titlePost}</h4>
            <span>{post.date}</span>
          </div>
          <S.ButtonList>
            <button onClick={modal}>
              <img src={postImage} alt="" />
              View Post
            </button>
          </S.ButtonList>
        </S.HeadPost>
        <p>{post.description}</p>
      </S.PostContent>
    </Container>
  )
}

export default Posts
