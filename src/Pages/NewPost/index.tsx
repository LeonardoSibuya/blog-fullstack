import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'

import { RootReducer } from '../../store'
import { create } from '../../store/reducers/posts'

import * as S from './styles'
import { Container } from '../../style'

import Header from '../../components/Header'
import { useCreatePostMutation } from '../../services/api'

const currentDate = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()

  if (month <= 9) {
    return `${day}/0${month}/${year}`
  }
  return `${day}/${month}/${year}`
}

const NewPost = () => {
  const navigate = useNavigate()

  const [titleState, setTitleState] = useState('')
  const [text, setText] = useState('')

  const [createPostMutation, { isSuccess }] = useCreatePostMutation()

  const handleCreatePost = async () => {
    const newPostApi = {
      title: titleState,
      description: text,
      created_on: currentDate()
    }

    createPostMutation(newPostApi)
  }

  const createPost = (event: FormEvent) => {
    event.preventDefault()

    if (titleState.length <= 3) {
      alert('This title is short')
    } else if (text.length <= 5) {
      alert('This Text is short')
    } else {
      handleCreatePost()
    }
  }

  if (isSuccess) {
    navigate('/')
  }

  return (
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
  )
}

export default NewPost
