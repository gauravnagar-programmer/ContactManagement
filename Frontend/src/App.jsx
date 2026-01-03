
import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './components/Contact'
import Hero from './components/Hero'



function App() {
 
  return (
  
<Routes>
  <Route path="/" element={<Layout />}>
    <Route path='' element={<Hero />} />
    <Route path='contacts/data' element={<Contact/>}/>
  </Route>
  
</Routes>


    
  )
}

export default App
