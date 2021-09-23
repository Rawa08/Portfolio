import Nav from './Nav'
import Footer from '../components/Footer';
import Header from '../components/Header';

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
