import { useNavigate } from 'react-router-dom'
import { useState, FormEvent, useEffect } from 'react'

import * as S from './styles'
import { Container } from '../../style'

import Header from '../../components/Header'
import { useCreatePostMutation } from '../../services/api'
import MessageSuccess from '../../components/MessageSuccess'

const NewPost = () => {
  const navigate = useNavigate()

  const [titleState, setTitleState] = useState('')
  const [text, setText] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const [createPostMutation] = useCreatePostMutation()

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false)
        navigate('/')
        window.location.reload()
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [navigate, showSuccessMessage])

  const handleCreatePost = async () => {
    const newPostApi = {
      title: titleState,
      description: text
    }

    createPostMutation(newPostApi)
  }

  const createPost = (event: FormEvent) => {
    event.preventDefault()

    if (titleState.length <= 3) {
      alert('ERROR: Title must be more than 3 characters')
    } else if (text.length <= 5) {
      alert('ERROR: Description must be more than 5 characters')
    } else if (titleState.length >= 26 || text.length >= 401) {
      alert('ERROR: Creation is invalid, title or text size is too large')
    } else {
      setShowSuccessMessage(true)
      handleCreatePost()
    }
  }

  return (
    <S.Content>
      {showSuccessMessage ? (
        <MessageSuccess action="Criado" />
      ) : (
        <>
          <Header />
          <Container>
            <S.TitlePage>Add New Post</S.TitlePage>
            <S.Form onSubmit={createPost}>
              <S.ContainerInput>
                <label>Title</label>
                <input
                  type="text"
                  value={titleState}
                  onChange={(e) => setTitleState(e.target.value)}
                  required
                />
              </S.ContainerInput>
              <S.ContainerInput>
                <label>Text</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </S.ContainerInput>
              <S.ContainerButtons>
                <button type="submit">Save</button>
                <S.ButtonPage to="/">Cancel</S.ButtonPage>
              </S.ContainerButtons>
            </S.Form>
          </Container>
        </>
      )}
    </S.Content>
  )
}

export default NewPost
