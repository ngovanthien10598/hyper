import './App.scss';
import CustomerScreen from 'components/CustomerScreen/CustomerScreen';
import DriverScreen from 'components/DriverScreen/DriverScreen';

function App() {
  return (
    <div className="App">
      <div className="screens-wrapper">
        <CustomerScreen />
        <DriverScreen />
      </div>
    </div>
  );
}

export default App;
