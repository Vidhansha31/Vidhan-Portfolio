import Image from 'next/image'
import { RESUME_PATH } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8 md:max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 text-text-color">
          Hi, I&apos;m Vidhan Sharma,<br />
          Associate Product Management
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed">
          Product Associate at HotWax Commerce, working on enterprise SaaS
          products across Order Management Systems, omnichannel commerce,
          inventory, fulfillment, and system integrations. I translate business
          requirements into product workflows, functional documentation, and
          testable changes, collaborating with QA, Development, and client-side
          teams through User Acceptance Testing and production releases.
        </p>

        <a
          href={RESUME_PATH}
          download="Vidhan_Sharma_Resume.pdf"
          className="bg-accent-1 hover:bg-white hover:text-accent-1 border border-accent-1 text-white font-bold py-3 px-10 duration-200 transition-colors mt-6 inline-block rounded-sm shadow-sm"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-8 md:mt-0 flex-shrink-0">
        <Image
          title="Vidhan Sharma"
          alt="Vidhan Sharma avatar"
          src="/assets/about/Vidhan-Avatar.png"
          height={295}
          width={293}
          priority
        />
      </div>
    </section>
  )
}
