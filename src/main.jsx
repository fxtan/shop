
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.scss"
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'



createRoot(document.getElementById('root')).render(
  <>

  <Header/>
  <App/>
  <Footer/>
  </>
    
)
