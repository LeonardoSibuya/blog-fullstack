import { useState } from 'react'

import * as S from './styles'

import { Container } from '../../style'

import add from '../../images/add-fav.png'
import remove from '../../images/remove-fav.png'
import post from '../../images/post.png'
import PostsClass from '../../models/Post'

type PostsProps = PostsClass

const Posts = ({ modal, date, description, titlePost }: PostsProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const favoritePost = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <Container>
      <S.PostContent>
        <S.HeadPost>
          <div>
            <h4>{titlePost}</h4>
            <span>{date}</span>
          </div>
          <S.ButtonList>
            <button onClick={favoritePost} className="favorite">
              {isFavorite ? (
                <img src={remove} alt="" />
              ) : (
                <img src={add} alt="" />
              )}
            </button>
            <button onClick={modal}>
              <img src={post} alt="" />
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
