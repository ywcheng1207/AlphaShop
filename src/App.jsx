import './reset.css'
import './base.scss'
import { AppContextProvier } from 'context/AppContext'
// ---
import { Header, Main, Footer } from './component'
// ---
function App () {
  return (
    <AppContextProvier>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </AppContextProvier>
  )
}

export default App
