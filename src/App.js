import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Menu from './components/Menu';
import List from './components/List';

function App() {


  return (
    <BrowserRouter>
    <div className=" p-8">
      <div className=' py-3'>
        <Menu />
      </div>

      <Routes>

        <Route exact path="/" element={<List />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/list" element={<List />} /> */}

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
{/* <div className=" p-8">
      {menu}
      {list}
      {cart}
    </div> */}