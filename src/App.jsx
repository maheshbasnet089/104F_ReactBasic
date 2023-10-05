
import './App.css'

function App() {
  const name = "Manish"

const myCssObject ={
  color : "red"
}
  return (
    <div>

    <h1 style={{color : "blue"}}>Mahesh Basnet</h1>
    <h3 style={myCssObject} >I am a Student</h3>
    <h5>Age : {11+10-2}</h5>
    <h2>{name}</h2>
    </div>


  )
}

export default App
