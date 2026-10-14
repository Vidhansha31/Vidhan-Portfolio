import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Vidhan Sharma</title>
        <meta property="og:title" content="About | Vidhan Sharma" />
        <meta
          property="og:description"
          content="Learn more about Vidhan Sharma, Product Associate working in enterprise SaaS, Order Management, and system integrations."
        />
      </Head>
      <Container>
        <Header />
      </Container>
      <div className="bg-sky-50 pt-16 pb-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
            <div className="flex justify-center md:justify-start">
              <Image
                title="Vidhan Sharma"
                alt="Vidhan Sharma avatar"
                src="/assets/about/vidhan.svg"
                height={295}
                width={293}
                priority
              />
            </div>
            <div className="md:pr-8 md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-text-color">
                I build products.
              </h1>
              <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed">
                <p>
                  I’m a Product Associate at HotWax Commerce, working on enterprise SaaS products across Order Management, Shopify, and enterprise integrations.
                </p>
                <p>
                  My work includes understanding client requirements, defining functional behavior, writing functional specifications and user stories, supporting User Acceptance Testing, and coordinating product releases into production.
                </p>
                <p>
                  I also investigate production issues using SQL/PLSQL, API responses, JSON payloads, and logs. I work with QA, Development, and client-side teams to clarify issues, validate fixes, and verify product behavior.
                </p>
                <p>
                  Alongside my professional work, I’m building Vitaran Distribution Management System, a product inspired by operational needs in a family-run milk distribution business. As Product Owner, I’m defining user workflows and requirements for customer-specific pricing, inventory, deliveries, and expenses.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}