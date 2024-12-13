import { Box, Button } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/react"
import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
function App() {

  return (
    <div>
      {/* Navbar */}
     <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
      </Routes>
    </div>
  )
}

export default App
      