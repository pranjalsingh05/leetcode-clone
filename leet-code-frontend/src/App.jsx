import {Navbar,SignUp,Login,Problems,Problem} from "./components/index"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"



const App = () => {
  return (
    <BrowserRouter>
       <div className="bg-white relative h-full flex flex-col">
        <Navbar />
        
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/problems' element ={<Problems />} />
          <Route path="/problems/:problemId" element={<Problem />} />
          

        </Routes>
      
    </div>
     
    </BrowserRouter>
  )
}

export default App



