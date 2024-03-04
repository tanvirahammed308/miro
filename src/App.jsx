
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
import BuildFor from './components/BuildFor'
import BuildTeams from './components/BuildTeams'
import LoveBy from './components/LoveBy'

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
    <BuildFor/>
    <BuildTeams/>
    <LoveBy/>

<Outlet />
<Footer></Footer>
    </>
  )
}

export default App
