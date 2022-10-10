import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Register } from './components/forms/register';
import { Login } from './components/forms/log-in';
import RecipeDetail from './components/recipes/detailrecipe/detailrecipe';
import { CalculatorIMC } from './components/utils/imcalculator/imcalculator';
import { CreateRecipe } from './components/recipes/createrecipe/createrecipe';
import { Payment } from './components/utils/Stripe/payment'
import { UserContextProvider } from './Context/UserContext';
import {UserTable} from './components/admin/UserTable';


function App() {
  return (
    <UserContextProvider>
    <div className="App">
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path="/calculatorimc" element={<CalculatorIMC/>} />
      <Route exact path="/detail/:id" element={<RecipeDetail/>} />
      <Route exact path="/createrecipe" element={<CreateRecipe/>} />
      <Route exact path="/suscription" element={<Payment/>}/> 
      <Route exact path="/table" element={<UserTable/>}/> 
    </Routes>
    </div>
    </UserContextProvider>
  );
}

export default App;
