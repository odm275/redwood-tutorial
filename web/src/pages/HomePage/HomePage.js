import { MetaTags } from '@redwoodjs/web'
import ArticlesCellStories from 'src/components/ArticlesCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <>
        <ArticlesCellStories />
      </>
    </>
  )
}

export default HomePage
