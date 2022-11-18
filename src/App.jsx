import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css"
import Header from "./components/Header"
import Meme from "./components/Meme"
import Footer from "./components/Footer"



function App() {

  return (
    <div className="App">
      <Header />
      <Meme />
      <Footer />
    </div>
  )
}

export default App
