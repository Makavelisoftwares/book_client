import {BrowserRouter,Routes,Route} from "react-router-dom"
import LayOut from "./layout/LayOut"
import Create from "./Pages/Create"
import Home from "./Pages/Home"

function App() {
  

  return (
    <div className="App">
      
      <BrowserRouter>
        <LayOut>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
          </Routes>
        </LayOut>
      </BrowserRouter>
      

    </div>
  )
}

export default App
