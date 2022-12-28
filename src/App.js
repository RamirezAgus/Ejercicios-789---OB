import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';




const App = () => {
    return (
      <div className='App'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ContactList/>
        </header>

      </div>
    )
}

export default App;
