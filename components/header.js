import Link from 'next/link'

export default function Header() {
  return (
    <div className="mb-8 mt-6">
      <Link href="/">
        <a className="inline-flex items-center text-base md:text-lg font-semibold text-slate-700 hover:text-success transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Home
        </a>
      </Link>
    </div>
  )
}
