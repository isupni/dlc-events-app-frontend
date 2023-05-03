import './App.css';
import Header from './components/header';
import Dashboard from './components/dashboard';
import Typography from "@mui/material/Typography";
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Typography variant="h3" >Events Log</Typography>
      <hr/>
      <Dashboard/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
