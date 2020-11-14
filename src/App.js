import logo from './logo.svg';
import './App.css';
import Banner from './banner/Banner';
import Menu from './menu/Menu';
import catPaw from './assets/cat-paw.png'

function App() {
  return (
    <div className="App">
      <Banner />
      <img src = {catPaw} />
      <Menu />
    </div>
  );
}

export default App;
