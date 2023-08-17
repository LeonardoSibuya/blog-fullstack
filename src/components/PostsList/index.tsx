import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { Container } from '../../style'

import { deletePost, edit } from '../../store/reducers/posts'
import PostsClass from '../../models/Post'
import { RootReducer } from '../../store'
import Posts from '../../components/Posts'

import close from '../../images/close.png'
import lupa from '../../images/lupa.png'
import person from '../../images/person.png'

export interface ModalState extends PostsClass {
  isVisible: boolean
}

type PostsProps = PostsClass

const PostsList = ({ description, titlePost }: PostsProps) => {
  const { items } = useSelector((state: RootReducer) => state.posts)
  const dispatch = useDispatch()

  const [isEdit, setIsEdit] = useState(false)

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    if (description.length && titlePost.length > 0) {
      setTitle(titlePost)
      setText(description)
    }
  }, [titlePost, description])

  const cancelEdit = () => {
    setTitle(description)
    setText(titlePost)
    setIsEdit(false)
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    titlePost: title,
    date: '',
    description: text,
    id: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      titlePost: '',
      date: '',
      description: '',
      id: 80
    })
  }

  return (
    <>
      <Container>
        <S.InfosPost>
          <h3>Latest Posts</h3>
          <div>
            <img src={lupa} alt="" />
            <input type="text" placeholder="Procurar" />
          </div>
          <S.ButtonNewPost to="newpost">Add New</S.ButtonNewPost>
        </S.InfosPost>
      </Container>

      {items.length < 1 ? (
        <Container>
          <S.NoPostDiv>
            <img src={person} alt="pessoa no computador" />
            <p>No posts yet</p>
          </S.NoPostDiv>
        </Container>
      ) : (
        <ul>
          {items.map((post) => (
            <Posts
              key={post.id}
              id={post.id}
              titlePost={post.titlePost}
              date={post.date}
              description={post.description}
              modal={() =>
                setModal({
                  date: post.date,
                  description: post.description,
                  id: post.id,
                  isVisible: true,
                  titlePost: post.titlePost
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                  <h3>{modal.titlePost}</h3>
                  <span>{modal.date}</span>
                  <div>
                    <p>{modal.description}</p>
                  </div>
                </S.HeadModal>
              )}
              <S.ContainerButton>
                {isEdit ? (
                  <>
                    <button
                      onClick={() => {
                        dispatch(
                          edit({
                            id: modal.id,
                            date: modal.date,
                            titlePost: title,
                            description: text
                          })
                        )
                        setIsEdit(false)
                        closeModal()
                      }}
                    >
                      Save
                    </button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <S.ContainerButton>
                    <button
                      onClick={() => {
                        setIsEdit(true)
                        setTitle(modal.titlePost)
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
