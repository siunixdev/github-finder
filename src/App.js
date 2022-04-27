import logo from './logo.svg';
import './App.sass'
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import List from './components/list/List';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <List />
    </div>
  );
}

export default App;
