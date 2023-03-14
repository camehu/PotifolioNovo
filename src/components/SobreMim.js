import React from "react";

const Menu = () => {
  return (
    <>
      <div
        id="sobre"
        class="row bg-light p-3 flex-wrap"
        style={{ width: "100wh" }}
      >
        <h2 style={{ padding: "20px" }}>Sobre Mim</h2>
        <div class="col-sm-6">
          <p style={{ textAlign: "justify", margin: "30px" }}>
            Graduado em Analise e Desenvolvidmento de sistemas pela Universidade
            Paulista(UNIP). Possuo Habilidade com os frameworks Flask, FastAPI,
            Django e Rest Framework. Possuo conhecimento em Desenvolvimento
            front-end React, TypeScript, HTML, CSS
          </p>
        </div>
        <div class="col-sm">
          <div class="container-fluid">
            <a class="navbar-brand" href="#sobreMim">
              <img
                id="imgSobre"
                src="https://wallup.net/wp-content/uploads/2019/09/261374-speed-racer-action-family-sport-race-cartoon-race-racing-56.jpg"
                alt="Avatar Logo"
                style={{ width: "350px" }}
                class="rounded-pill"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
