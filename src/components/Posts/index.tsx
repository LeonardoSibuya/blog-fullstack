import PostsClass from '../../models/Post'

import * as S from './styles'
import { Container } from '../../style'

import postImage from '../../images/post.png'

type Props = PostsClass

const Posts = ({ date, description, titlePost, modal }: Props) => {
  return (
    <Container>
      <S.PostContent>
        <S.HeadPost>
          <div>
            <h4>{titlePost}</h4>
            <span>{date}</span>
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
