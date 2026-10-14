import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <section className="md:grid grid-cols-2 gap-8 items-center">
      <div className="md:mr-4">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={359}
          width={400}
        />
      </div>
      <div>
        <div className="uppercase tracking-widest text-xs font-semibold text-slate-500 mb-2">
          Featured Project
        </div>
        <h3 className="mb-3 text-3xl lg:text-5xl leading-tight font-bold text-text-color">
          <Link href={`/projects/${slug}`}>
            <a className="hover:underline hover:text-success duration-200 transition-colors">
              {title}
            </a>
          </Link>
        </h3>
        <div className="text-sm mb-4 text-slate-400">
          <DateFormatter dateString={date} />
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 text-slate-600">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}
