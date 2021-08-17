import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { ChevronDoubleDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Form from '../components/form'


export default function Services() {
    return (
      <div>
        <Head>
          <title>Services</title>
          <meta name="description" content="Partner with us" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <section>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-6 md:pt-40 md:pb-8">
              <div className="text-center pb-0 md:pb-0">
                
                <h1 className="text-gray-900 text-3xl md:text-5xl font-bold leading-wider font-serif mb-6">Our services</h1>
                <p className="text-base md:text-xl text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus turpis ac neque venenatis elementum. Praesent vitae orci ornare, tincidunt augue et, venenatis metus.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-8 md:pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <Form />
          </div>
        </section>
        
          <div className="h-24"></div>
        </Layout>
      </div>
    )
}