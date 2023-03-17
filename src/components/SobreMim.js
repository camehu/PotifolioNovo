import React from "react";

const Menu = () => {
  return (
    <>
      <div
        id="sobre"
        class="row bg-primary p-5 mt-5 flex-wrap"
        style={{ width: "auto" }}
      >
        <h1 style={{ padding: "13px" }}>Sobre Mim</h1>

        <div class="col-sm">
          <p style={{  margin: "15px" }}>
            Graduado em Analise e Desenvolvidmento de sistemas pela Universidade
            Paulista(UNIP). Possuo Habilidade com os frameworks Flask, FastAPI,
            Django e Rest Framework. Possuo conhecimento em Desenvolvimento
            front-end React, TypeScript, HTML, CSS
          </p>
        </div>
        <div class="col">
          <div class="container-fluid">
            <a class="navbar-brand" href="#sobreMim">
              <img
                id="imgSobre"
                src="https://wallup.net/wp-content/uploads/2019/09/261374-speed-racer-action-family-sport-race-cartoon-race-racing-56.jpg"
                alt="Avatar Logo"
                style={{ width: "380px" }}
                class="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
