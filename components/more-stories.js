import PostPreview from '../components/post-preview'
import Link from 'next/link'

export default function MoreStories({
  posts,
  title = "More Projects",
  intro = "These projects highlight selected product work across enterprise commerce and distribution operations. Some enterprise details are summarized to respect client confidentiality."
}) {
  return (
    <section className="mb-16">
      <h2 className="mb-4 text-3xl md:text-4xl leading-tight font-bold">
        <Link href="/projects">
          <a className="hover:text-success duration-200 transition-colors block">
            {title}
          </a>
        </Link>
      </h2>
      {intro && (
        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl">
          {intro}
        </p>
      )}
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
