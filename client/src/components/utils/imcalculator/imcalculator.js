import React from 'react';
import "./imcalculator.css"
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import swal from 'sweetalert';
import { addCalculator } from '../../../redux/actions/useractions';


export const CalculatorIMC= ()=>{

  const dispatch = useDispatch()

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const user = window.sessionStorage.getItem("user")
  let userLogged
  if(user){
   userLogged = JSON.parse(user)
}

  const [mensagem, setMensagem] = useState("");
  const [efeitos, setEfeitos] = useState("");
  const [imcMessage, setImcMessage] = useState("");

  function calcularIMC (){

    const alt = altura / 100; 
    const imc = peso / (alt * alt);

    if(altura === "" && peso === ""){
      swal("Debes insertar ambos datos, Peso y Altura");
    }else if(!alt){
      swal("Por favor, rellene el peso y la altura correctamente !");
        
    }else if (imc < 16.9){
     setMensagem(`Estas muy bajo de peso!`);
     setEfeitos(`Efectos secundarios: pérdida de cabello, infertilidad, períodos menstruales perdidos.`);
     setImcMessage(`Su IMC : ${imc.toFixed(2)}`);
     
   }else if(imc >= 17 && imc < 18.4){
    setMensagem(`Estas bajo de peso !`);
    setEfeitos(`Efectos secundarios: fatiga, estrés, ansiedad.`);
    setImcMessage(`Su IMC es: ${imc.toFixed(2)}`);
     
   }else if (imc >= 18.5 && imc < 24.9){
    setMensagem(`Eres de peso normal !`);
    setEfeitos(`Efectos secundarios: menor riesgo de enfermedades cardíacas y vasculares.`);
    setImcMessage(`Su IMC es: ${imc.toFixed(2)}`);
    
   }else if(imc >= 25 && imc < 29.9){
    setMensagem(`¿Tienes sobrepeso? !`);
    setEfeitos(`Efectos secundarios: menor riesgo de enfermedades cardíacas y vasculares.`);
    setImcMessage(`Su IMC es: ${imc.toFixed(2)}`);
     
   }else if(imc >= 30 && imc < 34.9){
    setMensagem(`Tienes Obesidad Grado I!`);
    setEfeitos(`Efectos secundarios: apnea del sueño, dificultad para respirar.`);
    setImcMessage(`Su IMC es: ${imc.toFixed(2)}`);

   }else if(imc >= 35 && imc < 40){
    setMensagem(`Tienes Obesidad Grado II!`);
    setEfeitos(`Efectos secundarios: diabetes, angina de pecho, infarto de miocardio, aterosclerosis`);
    setImcMessage(`Su IMC es: ${imc.toFixed(2)}`);
   }else if(imc >= 40){
    setMensagem(`Tienes Obesidad Grado III !`);
    setEfeitos(`Efectos secundarios: reflujo, dificultad para moverse, úlceras de decúbito, diabetes, ataque cardíaco, accidente cerebrovascular.`);
    setImcMessage(`Su IMC es: ${imc.toFixed(2)}`);
   }
    
  }

  const userId = userLogged?userLogged.id:"nada";

  const handleCalculator = (e) =>{
      e.preventDefault()
      dispatch(addCalculator({userId,peso,altura,imcMessage}))
      setImcMessage("")
      setPeso("")
      setAltura("")
      setEfeitos("SAVE IN YOUR PROFILE SUCCESS !!!")
      setMensagem(``);
  }

    
  return(
    <div className='IMC'>
   <div className="imc-calculator">
      <div className="area-input-calculator">
      <h1>Calculadora de IMC</h1>
      <span>Vamos Calcular su IMC ?</span>
          <input 
            className='form-control'
            type="text"
            placeholder="Peso en KG Ej: 75"
            value={peso}
            onChange={ (e) => setPeso(e.target.value) }
          />

          <input 
            className='form-control'
            type="text"
            placeholder="Altura en CM Ej: 170"
            value={altura}
            onChange={ (e) => setAltura(e.target.value) }
          />

          <button className="btn btn-primary" onClick={calcularIMC}>
            Calcular
          </button>

            <h2>
                {mensagem} <br/>
                {efeitos} <br/>
                
            </h2>
            <h3>
            {imcMessage}
            </h3>
      </div>
      <div>
        
      </div>
      <button className="btn btn-secondary" disabled={imcMessage.length === 0} onClick={handleCalculator} >Save in profile</button>
      <a className="btn btn-primary" href='/me'>Go to Profile!</a>
   </div>
   
   </div>
  );
}

