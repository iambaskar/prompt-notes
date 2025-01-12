import { Provider } from 'react-redux'
import './App.css'
import AllNotes from './components/AllNotes'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="container">
          <AllNotes />
        </div>
      </div>
    </Provider>
  )
}

export default App
