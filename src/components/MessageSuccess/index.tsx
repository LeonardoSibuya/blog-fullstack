import * as S from './styles'

type Props = {
  action: string
}

const MessageSuccess = ({ action }: Props) => {
  return (
    <S.Container>
      <p>The post has been successfully {action}</p>
    </S.Container>
  )
}

export default MessageSuccess
