import * as S from './styles'
import { Container } from '../../style'

import { ResultsPosts } from '../../services/api'

interface Props extends ResultsPosts {
  modal?: () => void
}

const Posts = ({ created_on, description, title, modal, update_on }: Props) => {
  return (
    <Container>
      <S.PostContent onClick={modal}>
        <S.HeadPost>
          <h4>{title}</h4>
          <S.DivDate>
            <div>
              <p>Created At</p>
              <span>{created_on}</span>
            </div>
            <div>
              <p>Edited At</p>
              <span>{update_on}</span>
            </div>
          </S.DivDate>
        </S.HeadPost>
        <p>{description}</p>
      </S.PostContent>
    </Container>
  )
}

export default Posts
