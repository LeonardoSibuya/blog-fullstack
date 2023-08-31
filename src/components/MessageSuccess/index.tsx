import * as S from './styles'

type Props = {
  action: string
}

const MessageSuccess = ({ action }: Props) => {
  return (
    <S.Container>
      <p>O Post foi {action} com sucesso!</p>
    </S.Container>
  )
}

export default MessageSuccess
