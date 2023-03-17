import React from "react";
import Button from "../components/Button";

const Banner = () => {
  return (
    <>
      <div class="d-flex flex-wrap  justify-content-center align-content-center">
          <div class="p-2"> 
              <img
                id="imgBanner"
                src="https://www.threadscript.com/images/department/ZkoTXjGauq1aiiAUIlB52hkW1vPHj6gg.jpg"
                alt="Banner Dev"
                style={{ width: "710px", padding: "1rem", marginTop: "3rem" }}
                class="rounded-pill"
              />
          </div>
        
      
          <div class="p-2">

            <div id="Titulo">
            
           <h1>Desenvolvedor Python</h1>
            <p>
              <h4> React | TypeScript | Flask | FastAPI | Django </h4>
              <Button />
            </p>
            
          </div>
          </div>
        
        </div>
          
          </>
  );
};

export default Banner;
