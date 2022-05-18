
import './App.css';
import {Payment} from './components/paymentcard'

function App() {
  return (
    <div className="App">
  <Payment color={"rgb(251,145,16)"} date="28/10/2020" image="https://www.citypng.com/public/uploads/preview/-115963929680nrisg4fie.png" head="Case Study" subhead="Amazon Gift Pay" device1={"Desktop"} device2={"Mobile"}></Payment>
  <Payment color={"whitesmoke"} date="17 Sep 2020" image="http://cdn.wccftech.com/wp-content/uploads/2013/09/Apple-logo1.jpg" head="Case Study" subhead="Apple Gift Payment" device1={"MacOS"} device2={"Mobile"}></Payment>
    </div>
  );
}

export default App;
