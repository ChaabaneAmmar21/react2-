import a from './Component/Profile/ProfilePhoto';
import './App.css';
import b from './Component/Profile/Address';
import c from './Component/Profile/FullName';
import nav from './Component/Profile/nav'
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
     
      {nav()}
      <Card>
        
      {c()}
      {a()}
      {b()}
      </Card>
    
       
       
      
    </div>
  );
}

export default App;
