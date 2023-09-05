import './App.css';
import RootPage from './components/RootPage';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <SideNav></SideNav>
      <RootPage></RootPage>
    </div>
  );
}

export default App;
