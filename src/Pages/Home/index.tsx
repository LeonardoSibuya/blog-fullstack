import Banner from '../../components/Banner'
import Header from '../../components/Header'
import PostsList from '../../components/PostsList'
import { useGetPostsQuery } from '../../services/api'

const Home = () => {
  const { data: postsApi } = useGetPostsQuery()

  return (
    <>
      <Header />
      <Banner />
      <PostsList posts={postsApi ? postsApi : []} />
    </>
  )
}

export default Home
