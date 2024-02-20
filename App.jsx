import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import DisplayCounter from './Components/DisplayCounter'
import Container from './Components/Container'
import Controls from './Components/Controls'
import { useSelector } from 'react-redux'
import WelcomeMessage from './Components/WelcomeMessage'


function App() {
  const privacy=useSelector(store=>store.privacy)

  return (
    <Container>
    
    <div className="px-4 py-5 my-5 text-center">
  
   
      <Header></Header>
    <div className="col-lg-6 mx-auto">
       {privacy ? <WelcomeMessage></WelcomeMessage>:<DisplayCounter></DisplayCounter>}
       <Controls></Controls>
    </div>
  </div>
  </Container>
  )
}

export default App
