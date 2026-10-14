import Link from 'next/link'

export default function Intro() {
  return (
    <section className="py-12 md:py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-2/3">
          <p className="text-lg md:text-xl text-slate-600 mb-3">
            Hi, I'm Vidhan Sharma,
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
            Associate Product Management
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-7">
            Product Associate at HotWax Commerce working on enterprise Order
            Management Systems, omnichannel commerce, inventory, fulfillment,
            product requirements, system integrations, and production releases.
            I also built Vitaran Distribution Management System as a Product
            Owner.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/assets/resume/Vidhan_Sharma_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-slate-800 transition-colors"
            >
              View Resume
            </a>

            <a
              href="https://www.linkedin.com/in/vidhan-shama/"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-slate-300 px-6 py-3 rounded-md hover:bg-slate-50 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/assets/about/Vidhan-Avatar.png"
            alt="Vidhan Sharma"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}