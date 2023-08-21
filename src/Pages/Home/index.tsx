import Banner from '../../components/Banner'
import Header from '../../components/Header'
import PostsList from '../../components/PostsList'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <PostsList titlePost={''} description={''} id={80} date={''} />
    </>
  )
}

export default Home
