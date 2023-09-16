import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomeRoute from './routes/HomeRoute';

function App() {
  console.log('hello');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
