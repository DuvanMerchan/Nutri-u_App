import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Register } from './components/forms/register';
import RecipeDetail from './components/recipes/detailrecipe/detailrecipe';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/detail/:id" element={<RecipeDetail/>} />
    </Routes>
    </div>
  );
}

export default App;
