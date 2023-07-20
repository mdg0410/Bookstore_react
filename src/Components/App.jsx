import '../Styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Routes/Home'
import Layout from './Layout';
import Categories from '../Routes/Categories';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='Categories' element={<Categories />} />
      </Route>
    </Routes>
  );  
}

export default App;
