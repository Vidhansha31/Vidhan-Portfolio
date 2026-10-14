import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Header from '../components/header'

export default function Projects({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>Projects | Vidhan Sharma</title>
        <meta property="og:title" content="Projects | Vidhan Sharma" />
        <meta
          property="og:description"
          content="Selected product work across enterprise commerce and distribution operations by Vidhan Sharma."
        />
      </Head>
      <Container>
        <Header />
        <MoreStories
          posts={allPosts}
          title="More Projects"
          intro="These projects highlight selected product work across enterprise commerce and distribution operations. Some enterprise details are summarized to respect client confidentiality."
        />
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
