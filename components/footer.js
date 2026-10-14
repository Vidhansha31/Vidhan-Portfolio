import Container from './container'
import { GITHUB_URL, EMAIL_ADDRESS, LINKEDIN_URL } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-accent-2">
      <Container>
        <div className="py-12">
          <div className="flex justify-center items-center gap-6">
            <a
              className="text-slate-600 hover:text-black transition-transform hover:scale-110 duration-200"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <img alt="GitHub logo" src="/icons/github-fill.svg" height={36} width={36} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              className="text-slate-600 hover:text-black transition-transform hover:scale-110 duration-200"
              href={`mailto:${EMAIL_ADDRESS}`}
              aria-label="Send an email"
              title="Email"
            >
              <img alt="Email icon" src="/icons/mail-fill.svg" height={36} width={36} />
              <span className="sr-only">Email</span>
            </a>
            <a
              className="text-slate-600 hover:text-black transition-transform hover:scale-110 duration-200"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <img alt="LinkedIn logo" src="/icons/linkedin-box-fill.svg" height={36} width={36} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            © {new Date().getFullYear()} Vidhan Sharma. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  )
}
