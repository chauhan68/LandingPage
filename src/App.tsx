import { Fragment } from 'react'

import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import MiddleSection from './Components/Sections/MiddleSection'
import LeftSection from './Components/Sections/LeftSection'
import RightSection from './Components/Sections/RightSection'
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <MiddleSection />
            <LeftSection />
            <RightSection />
            <Footer />
        </Fragment>
    )
}

export default App
