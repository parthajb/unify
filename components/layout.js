import Header from './header'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="antialiased overflow-hidden">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}