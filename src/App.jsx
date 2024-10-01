import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle'
import Navbar from './components/navbar'

const BackgroundGradient = styled.div`
background-color: #d82020;
width: 100%;
min-height: 100vh;
`

function App() {

  return (
    <BackgroundGradient>
    <GlobalStyle/>
    <>
    <Navbar></Navbar>
    </>
    </BackgroundGradient>
  )
}

export default App
