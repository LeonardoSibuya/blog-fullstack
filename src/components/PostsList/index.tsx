import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { Container } from '../../style'

import { deletePost, edit } from '../../store/reducers/posts'
import { searchPosts } from '../../store/reducers/filtros'

import { RootReducer } from '../../store'
import Posts from '../../components/Posts'

import close from '../../images/close.png'
import lupa from '../../images/lupa.png'
import person from '../../images/person.png'
import {
  ResultsPosts,
  useGetPostsIdQuery,
  useGetPostsQuery
} from '../../services/api'

export interface ModalState extends ResultsPosts {
  isVisible: boolean
}

interface PostsListProps {
  posts: ResultsPosts[]
}

const PostsList = ({ posts }: PostsListProps) => {
  const { data: postsItem } = useGetPostsIdQuery()

  const { data: postsApi } = useGetPostsQuery()

  const { items } = useSelector((state: RootReducer) => state.posts)
  const { titlePostSearch } = useSelector((state: RootReducer) => state.filter)

  const dispatch = useDispatch()

  const [isEdit, setIsEdit] = useState(false)

  const [titleState, setTitleState] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    if (postsApi && postsApi.length > 0) {
      setTitleState(postsItem?.title || '')
      setText(postsItem?.description || '')
    }
  }, [postsApi?.length, postsItem?.title, postsItem?.description])

  const cancelEdit = () => {
    setTitleState(postsItem!.title)
    setText(postsItem!.description)
    setIsEdit(false)
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    title: '',
    created_on: '',
    description: '',
    id: items.length + 1,
    update_on: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      title: '',
      created_on: '',
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

  const verifyEdit = () => {
    if (titleState.length <= 3 || text.length <= 5) {
      alert('Edit is invalid, check title and text size')
    } else {
      dispatch(
        edit({
          id: modal.id,
          created_on: modal.created_on,
          title: postsItem!.title,
          description: postsItem!.description,
          update_on: modal.update_on
        })
      )
      setIsEdit(false)
      closeModal()
    }
  }

  return (
    <>
      <Container>
        <S.InfosPost>
          <h3>Latest Posts</h3>
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
        <ul>
          {searchFilterPosts?.map((post) => (
            <Posts
              key={post.id}
              id={post.id}
              title={post.title}
              created_on={post.created_on}
              description={post.description}
              update_on={post.update_on}
              modal={() =>
                setModal({
                  created_on: post.created_on,
                  description: post.description,
                  id: post.id,
                  isVisible: true,
                  title: post.title,
                  update_on: post.update_on
                })
              }
            />
          ))}
        </ul>
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
                        dispatch(deletePost(modal.id))
                        closeModal()
                      }}
                    >
                      Delete
                    </button>
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
  )
}

export default PostsList
