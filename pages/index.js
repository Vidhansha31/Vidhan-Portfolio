import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1, 3)
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <Container>
        <Intro />
      </Container>
      <div className="bg-sky-50 pt-16 pb-16">
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
        </Container>
      </div>
      <Container>
        <div className="mt-16">
          {morePosts.length > 0 && (
            <MoreStories
              posts={morePosts}
              title="More Projects"
              intro="These projects highlight selected product work across enterprise commerce and distribution operations. Some enterprise details are summarized to respect client confidentiality."
            />
          )}
        </div>
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
