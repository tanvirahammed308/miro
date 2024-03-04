
import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Collaborate from './components/Collaborate'
import WorkTogether from './components/WorkTogether'
import ConnectYour from './components/ConnectYour'
import MiddlePic from './components/MiddlePic'

function App() {
  

  return (
    <>
    <Header>
      
    </Header>
    <Hero/>
    <Trustedby/>
    <Collaborate/>
    <WorkTogether/>
    <ConnectYour/>
    <MiddlePic/>

<Outlet />
<Footer></Footer>
    </>
  )
}

export default App
