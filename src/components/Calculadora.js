import { useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";
import '../styles/style.css';
import { evaluate } from "mathjs";

export function Calculadora() {
    
    const [expression, setExpression] = useState(""); 
    
    


  const botones=[
        '+','-','*','/','1','2','3','4','5','6','7','8','9','0','C','='
      ];
     const handleClick = (valor) => {
    if (valor === "C") {
      setExpression("");
      return;
    }

    if (valor === "=") {
       const resultado = evaluate(expression);
      setExpression(resultado.toString());
      return;
    }

    setExpression((prev) => prev + valor);
  };
      
      return (
        <div className="app-fondo">
    
      
            <div className="section">
           <h1 className="text-title">Calculadora</h1>
           <div className="section-header">
            <Display value={expression}/>
           </div>
       
          <div className="section-body">
        
               {
                botones.map((btn)=>(
                  <Button
                      key={btn}
                       onClick={handleClick}
                      text={btn}
                      theme={
                        [    '+','-','*','/','C','='].includes(btn)?'operacion':'botones'
                      }
                  />
                )
               )}
          </div>
          
         
            </div>
    
        </div>
      );
}
