import './App.css';
import Chatbot from './component/Chatbot/Chatbot';
import Form from './component/Form/Form';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element = {<Form />}/>
        <Route exact path = '/chatbot' element = {<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
