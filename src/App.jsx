import './App.css'
import Hero1 from './hero/hero1/Hero1'
import MultiStepForm from './Registration/MultiStepForm'

function App() {

  return (
    <>
      <MultiStepForm onComplete={(all) => console.log("all answers:", all)} />
    </>
  )
}

export default App
