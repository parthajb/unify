import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Unify</title>
        <meta name="description" content="Unify assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="container mb-16 md:mb-0">

          <div className="h-24"></div>
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full md:w-6/12">
              <h1 className="text-3xl md:text-5xl text-gray-900 font-bold font-serif mb-3 md:mb-6 leading-normal md:leading-normal ">A Digital Engineering Company</h1>
              <p className="text-base md:text-lg text-gray-600">We are on a mission to engineer the digital era. Our commitment to excellence is our core principle in our drive to assist organizations scale, reinvent and transform themselves digitally.</p>
              <Link href="/services">
                <a className="bg-indigo-800 hover:bg-indigo-900 inline-block mt-6 md:mt-10 uppercase px-8 py-3 font-bold tracking-widest  text-white rounded">Services</a>
              </Link>
            </div>
            <div className="order-first md:order-last w-6/12 md:6/12 lg:w-6/12 py-2 md:py-20">
            <div className="max-w-sm mx-auto">
              <Image
                    className=""
                    src="/hero.png"
                    layout="responsive"
                    width={445}
                    height={521}
                    objectFit="contain"
              ></Image>
              </div>
            </div>
          </div>

          <div className="h-24"></div>
        </div>
      </Layout>
    </div>
  )
}
