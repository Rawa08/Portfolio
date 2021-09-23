import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return (

        <>
       <Nav />
        <Header />
        {children}
        <Footer />

        </>
        
    )
}

export default Layout
