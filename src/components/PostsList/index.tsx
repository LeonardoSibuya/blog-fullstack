import * as S from './styles'

import { Container } from '../../style'

import Posts, { PostsProps } from '../../components/Posts'

import close from '../../images/close.png'

import lupa from '../../images/lupa.png'
import { useState } from 'react'

const Mock: PostsProps[] = [
  {
    id: 1,
    titlePost: 'Teste',
    date: '20/01/2023',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo rerum fugiat doloribus, earum quo nisi modi, dolorem incidunt hic, quidem aut. Odio porro dolorem, dolor corporis sed voluptatem mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo rerum fugiat doloribus, earum quo nisi modi, dolorem incidunt hic, quidem aut. Odio porro dolorem, dolor corporis sed voluptatem mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo rerum fugiat doloribus, earum quo nisi modi, dolorem incidunt hic, quidem aut. Odio porro dolorem, dolor corporis sed voluptatem mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo rerum fugiat doloribus, earum quo nisi modi, dolorem incidunt hic, quidem aut. Odio porro dolorem, dolor corporis sed voluptatem mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit.?'
  },
  {
    id: 2,
    titlePost: 'Teste2',
    date: '20/01/2023',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo rerum fugiat doloribus, earum quo nisi modi, dolorem incidunt hic, quidem aut. Odio porro dolorem, dolor corporis sed voluptatem mollitia?'
  },
  {
    id: 3,
    titlePost: 'Teste3',
    date: '20/01/2023',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo rerum fugiat doloribus, earum quo nisi modi, dolorem incidunt hic, quidem aut. Odio porro dolorem, dolor corporis sed voluptatem mollitia?'
  },
  {
    id: 4,
    titlePost: 'Teste4',
    date: '20/01/2023',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo rerum fugiat doloribus, earum quo nisi modi, dolorem incidunt hic, quidem aut. Odio porro dolorem, dolor corporis sed voluptatem mollitia?'
  }
]

export interface ModalState extends PostsProps {
  isVisible: boolean
}

const PostsList = () => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    titlePost: '',
    date: '',
    description: '',
    id: 80
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
          <a href="">Add New</a>
        </S.InfosPost>
      </Container>

      <ul>
        {Mock.map((post) => (
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

      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent>
          <S.ImageClose src={close} alt="" onClick={closeModal} />
          <div>
            <S.HeadModal>
              <h3>{modal.titlePost}</h3>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </S.HeadModal>
            <span>{modal.date}</span>
            <p>{modal.description}</p>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default PostsList
