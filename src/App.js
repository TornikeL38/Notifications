import logo from './logo.svg';
import './App.css';
import Notification from "./Components/Notification/Notification";


function App() {
  return(
    <div className='conteiner'>
      <Notification type="success"/>
      <Notification type="error"/>
      <Notification type="warning"/>
      <Notification type="info"/>
    </div>
  )
}

export default App;
