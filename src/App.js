import logo from './logo.svg';
import './App.css';
import Menu from './containers/Menu';
import Infomation from './containers/Information';
import Button from './containers/Button';
import Hello from './containers/Hello';
import Car from './containers/Car';

const userName = "Khang"
const handleClick = () => {
  alert('Button clicked!');
};
const isLogin = true;
const App = () => {
  return (
    <div>
      <h1>Đây là Menu</h1>
      <Infomation userName={userName} />
      <Menu />
      <Button label="Click Me, Bà ly" onClick={handleClick} style={{ backgroundColor: '#111', color: 'white', padding: '10px 20px' }} />
      <div>
        {isLogin ? <p>Welcome back!</p> : <p>Chưa đăng nhập</p>}
      </div>
      <Hello />
      <Car/>
    </div>
  );
};

export default App;
