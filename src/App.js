// import logo from './logo.svg';
import { useDispatch } from "react-redux";
import "./App.css";
import { requestUsers } from "./redux/modules/users/userAction";
import HomePage from './pages/homepage'

function App() {

  const dispatch = useDispatch();
  const handleClick = (e) => {
    console.log( requestUsers());
    dispatch(requestUsers());
  };

  return (
    <div className="App">
      <header className="App-header">Header Here</header>
      <HomePage />
      <button onClick={(e) => handleClick(e)}> Click Here </button>
    </div>
  );
}

export default App;
