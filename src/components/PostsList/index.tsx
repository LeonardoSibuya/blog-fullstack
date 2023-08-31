import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { Container } from '../../style'

import { deletePostReducer, edit } from '../../store/reducers/posts'
import { searchPosts } from '../../store/reducers/filtros'

import { RootReducer } from '../../store'
import Posts from '../../components/Posts'

import close from '../../images/close.png'
import lupa from '../../images/lupa.png'
import person from '../../images/person.png'

import {
  ResultsPosts,
  useDeletePostMutation,
  useGetPostsIdQuery,
  useGetPostsQuery,
  useUpdatePostMutation
} from '../../services/api'
import Loader from '../Loader'
import MessageSuccess from '../MessageSuccess'

export interface ModalState extends ResultsPosts {
  isVisible: boolean
}

interface PostsListProps {
  posts: ResultsPosts[]
}

const PostsList = ({ posts }: PostsListProps) => {
  const dispatch = useDispatch()

  const { data: postsItem } = useGetPostsIdQuery()
  const { data: postsApi } = useGetPostsQuery()
  const { '0': dataPost } = useUpdatePostMutation()
  const { '0': dataDeletePost } = useDeletePostMutation()

  const { titlePostSearch } = useSelector((state: RootReducer) => state.filter)

  const [titleState, setTitleState] = useState('')
  const [text, setText] = useState('')
  const [actionType, setActionType] = useState('')
  const [numId] = useState(Number)
  const [isEdit, setIsEdit] = useState(false)
  const [isDelet, setIsDelet] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const formatCreateDate = (date: string) => {
    return format(new Date(date), 'dd/MM/yyyy')
  }

  const formatUpdateDate = (date: string) => {
    return format(new Date(date), 'dd/MM/yyyy')
  }

  useEffect(() => {
    if (postsApi && postsApi.length > 0 && postsItem !== undefined) {
      setTitleState(postsItem.title)
      setText(postsItem.description)
    }
  }, [
    postsApi?.length,
    postsItem?.title,
    postsItem?.description,
    postsItem,
    postsApi
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false)
        setShowLoader(true)
        window.location.reload()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [showSuccessMessage])

  const cancelEdit = () => {
    if (postsItem) {
      setTitleState(postsItem.title)
      setText(postsItem.description)
      setIsEdit(false)
    }
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    title: '',
    created_on: '',
    description: '',
    id: numId,
    update_on: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      title: '',
      created_on: modal.created_on,
      description: '',
      id: modal.id,
      update_on: modal.update_on
    })
  }

  const filterPosts = () => {
    let filteredPosts = posts

    if (titlePostSearch !== undefined) {
      filteredPosts = filteredPosts.filter(
        (item) =>
          item.title.toLowerCase().search(titlePostSearch.toLowerCase()) >= 0
      )
      return filteredPosts
    } else {
      return posts
    }
  }

  const searchFilterPosts = filterPosts()

  const verifyEdit = async () => {
    if (titleState.length <= 3 || text.length <= 5) {
      alert('ERROR: Edit is invalid, title or text size is too short')
    } else if (titleState.length >= 26 || text.length >= 401) {
      alert('ERROR: Edit is invalid, title or text size is too large')
    } else {
      try {
        const updatedData = await dataPost({
          id: modal.id,
          data: {
            title: titleState,
            description: text,
            update_on: modal.update_on
          }
        }).unwrap()
        dispatch(edit(updatedData))
        setIsEdit(false)
        closeModal()
        setShowSuccessMessage(true)
        setActionType('Edited')
      } catch (error) {
        console.error('Error editing post:', error)
      }
    }
  }

  const verifyDelete = async () => {
    if (postsItem) {
      try {
        await dataDeletePost(modal.id).unwrap()
        dispatch(deletePostReducer(modal.id))
        setIsEdit(false)
        closeModal()
        setShowSuccessMessage(true)
        setActionType('Deleted')
      } catch (error) {
        console.error('Error', error)
      }
    }
  }

  const actionMessageSuccess = (action: string) => {
    if (action === 'Edited') {
      return 'Atualizado'
    } else if (action === 'Deleted') {
      return 'Deletado'
    }
    return ''
  }

  return (
    <S.ContentPage>
      {showSuccessMessage ? (
        <MessageSuccess action={actionMessageSuccess(actionType)} />
      ) : (
        <>
          {showLoader ? (
            <Loader />
          ) : (
            <>
              <Container>
                <S.InfosPost>
                  <h3>Your Posts</h3>
                  <div>
                    <img src={lupa} alt="" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={titlePostSearch}
                      onChange={(e) => dispatch(searchPosts(e.target.value))}
                    />
                  </div>
                  <S.ButtonNewPost to="newpost">Add New</S.ButtonNewPost>
                </S.InfosPost>
              </Container>

              {posts.length < 1 ? (
                <Container>
                  <S.NoPostDiv>
                    <img src={person} alt="pessoa no computador" />
                    <p>No posts yet</p>
                  </S.NoPostDiv>
                </Container>
              ) : (
                <S.ListPosts>
                  {searchFilterPosts?.map((post) => (
                    <Posts
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      created_on={formatCreateDate(post.created_on)}
                      description={post.description}
                      update_on={formatUpdateDate(post.update_on)}
                      modal={() =>
                        setModal({
                          created_on: formatCreateDate(post.created_on),
                          description: post.description,
                          id: post.id,
                          isVisible: true,
                          title: post.title,
                          update_on: formatUpdateDate(post.update_on)
                        })
                      }
                    />
                  ))}
                </S.ListPosts>
              )}

              <S.Modal className={modal.isVisible ? 'visible' : ''}>
                <S.ModalContent>
                  <S.ImageClose
                    src={close}
                    alt=""
                    onClick={() => {
                      closeModal()
                      cancelEdit()
                    }}
                  />
                  <div>
                    <div>
                      {isEdit ? (
                        <S.ModalForm>
                          <input
                            type="text"
                            value={titleState}
                            onChange={(e) => setTitleState(e.target.value)}
                          />
                          <div>
                            <textarea
                              value={text}
                              onChange={(e) => setText(e.target.value)}
                            />
                          </div>
                        </S.ModalForm>
                      ) : (
                        <S.HeadModal>
                          <h3>{modal.title}</h3>
                          <span>{modal.created_on}</span>
                          <div>
                            <p>{modal.description}</p>
                          </div>
                        </S.HeadModal>
                      )}
                      <S.ContainerButton>
                        {isEdit ? (
                          <>
                            <button onClick={verifyEdit}>Save</button>
                            <button onClick={cancelEdit}>Cancel</button>
                          </>
                        ) : (
                          <S.ContainerButton>
                            {isDelet ? (
                              <>
                                <button onClick={() => setIsDelet(false)}>
                                  Cancel
                                </button>
                                <button
                                  onClick={() => {
                                    closeModal()
                                    verifyDelete()
                                  }}
                                >
                                  Confirm
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={() => {
                                    setIsEdit(true)
                                    setTitleState(modal.title)
                                    setText(modal.description)
                                  }}
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => {
                                    setIsDelet(true)
                                  }}
                                >
                                  Delete
                                </button>
                              </>
                            )}
                          </S.ContainerButton>
                        )}
                      </S.ContainerButton>
                    </div>
                  </div>
                </S.ModalContent>
                <div
                  className="overlay"
                  onClick={() => {
                    closeModal()
                    cancelEdit()
                  }}
                ></div>
              </S.Modal>
            </>
          )}
        </>
      )}
    </S.ContentPage>
  )
}

export default PostsList
