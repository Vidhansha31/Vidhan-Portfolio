import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="border-b border-slate-200 last:border-0 pb-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div>
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            height={278}
            width={278}
          />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl mb-3 leading-snug font-bold">
            <Link href={`/projects/${slug}`}>
              <a className="hover:underline hover:text-success duration-200 transition-colors">
                {title}
              </a>
            </Link>
          </h3>
          <div className="text-sm mb-3 text-slate-400">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-base md:text-lg leading-relaxed text-slate-600">
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  )
}
