import React from "react";
import Button from "../components/Button";

const Banner = () => {
  return (
    <>
      <div class="row">
        <div class="col-sm-5">
          <img
            src="https://www.threadscript.com/images/department/ZkoTXjGauq1aiiAUIlB52hkW1vPHj6gg.jpg"
            alt="Banner Dev"
            style={{ width: "650px", padding: "1rem", marginTop: "3rem" }}
            class="rounded-pill"
          />
        </div>

        <div class="col-sm">
          <div id="Titulo" style={{ padding: "10rem" }}>
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
