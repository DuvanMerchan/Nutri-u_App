import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About.js';
import { Register } from './components/forms/register';
import { Login } from './components/forms/log-in';
import RecipeDetail from './components/recipes/detailrecipe/detailrecipe';
import { CalculatorIMC } from './components/utils/imcalculator/imcalculator';
import { CreateRecipe } from './components/recipes/createrecipe/createrecipe';
import { Payment } from './components/utils/Stripe/payment'
import { UserContextProvider } from './Context/UserContext';
import {UserTable} from './components/admin/UsersTable/UserTable';
import { Recovery } from './components/utils/forgot-password/recovery-password/recovery';
import { Change } from './components/utils/forgot-password/change-password/change';
import { ConfirmAccount } from './components/utils/confirmAccount/confirm';
import AdminProfil from './pages/admin/adminProfile';
import { RecipeTable } from './components/admin/RecipesTable/RecipeTable';
import UserProfile from './pages/userBoart.js/userProfile';



function App() {
  return (
    <UserContextProvider>
    <div className="App">
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/me' element={<UserProfile />} />
      <Route exact path="/calculatorimc" element={<CalculatorIMC/>} />
      <Route exact path="/detail/:id" element={<RecipeDetail/>} />
      <Route exact path="/createrecipe" element={<CreateRecipe/>} />
      <Route exact path="/suscription" element={<Payment/>}/> 
      <Route exact path="/admin/users" element={<UserTable/>}/> 
      <Route exact path="/admin" element={<AdminProfil/>}/> 
      <Route exact path="/admin/recipes" element={<RecipeTable />}/> 
      <Route exact path="/recovery-password" element={<Recovery/>}/>
      <Route exact path="/change-password/:token" element={<Change/>}/>
      <Route exact path="/confirm-account/:token" element={<ConfirmAccount/>}/>
    </Routes>
    </div>
    </UserContextProvider>
  );
}

export default App;
