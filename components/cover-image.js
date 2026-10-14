import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('rounded shadow-sm object-cover', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/projects/${slug}`}>
          <a aria-label={title} className="block overflow-hidden rounded">
            {image}
          </a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
