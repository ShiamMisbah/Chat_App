import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route } from 'react-router-dom';
import Home from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact/>
      <Route path='/chat' component={ChatPage} />
    </div>
  );
}

export default App;
