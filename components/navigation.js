import Link from 'next/link'
import Container from './container'

export default function Navigation() {
  return (
    <Container>
      <nav aria-label="Main Navigation">
        <ul className="flex justify-end items-center">
          <li>
            <Link href="/projects">
              <a className="hover:text-success duration-200 transition-colors p-4 block font-medium">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <a
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-success duration-200 transition-colors p-4 block font-medium"
            >
              Blog
            </a>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:text-success duration-200 transition-colors p-4 block font-medium">
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
