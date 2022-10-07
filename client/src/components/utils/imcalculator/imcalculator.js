import React from 'react';
import { useState } from 'react';


export const CalculatorIMC= ()=>{

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [efeitos, setEfeitos] = useState("");
  const [imcMessage, setImcMessage] = useState("");

  function calcularIMC (){

    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(altura === "" && peso === ""){
        alert("[ERROR 404] Por favor, rellene el peso y la altura correctamente !");
    }else if(!alt){
        alert("[ERROR 404] Por favor, rellene el peso y la altura correctamente !");
        
    }else if (imc < 16.9){
     setMensagem(`Estas muy bajo de peso!`);
     setEfeitos(`Efectos secundarios: pérdida de cabello, infertilidad, períodos menstruales perdidos.`);
     setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
     
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
     setPeso("");
     setAltura("");
  }

  return(
   <div className="app">
      <div className="area-input">
      <h1>Calculadora de IMC</h1>
      <span>Vamos Calcular su IMC ?</span>
          <input 
            type="text"
            placeholder="Peso en KG Ej: 75"
            value={peso}
            onChange={ (e) => setPeso(e.target.value) }
          />

          <input 
            type="text"
            placeholder="Altura en CM Ej: 170"
            value={altura}
            onChange={ (e) => setAltura(e.target.value) }
          />

          <button onClick={calcularIMC}>
            Calcular
          </button>

            <h2>
                {mensagem} <br/>
                {efeitos} <br/>
                {imcMessage}
            </h2>
      </div>
      <footer className='footer'>
          &copy; 2022 Nutry-U
      </footer>
   </div>
  );
}

