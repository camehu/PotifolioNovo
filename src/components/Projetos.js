import React from "react";

const Menu = () => {
  return (
    <>
      <h1 className="p-4">Projetos</h1>

      <div id="projetos" class="d-flex justify-content-center p-2 flex-wrap">
        <div class="card m-2" style={{ width: "300px", height: "440px" }}>
          <img
            class="card-img-top"
            src="https://appboss.com/wp-content/uploads/2018/09/How_to_create_a_mobile_app_for_your_online_courses.jpg"
            alt="Analisador de gastos"
          />
          <div class="card-body">
            <h4 class="card-title">Analisador de Gastos</h4>
            <p class="card-text">
              Usando a analise de Dados e graficos este sistema mostra os
              valores dos gastros de uma familia com base no extrato do cartão
            </p>
            <a href="#" className="btn btn-primary">
              Ver detalhes
            </a>
          </div>
        </div>

        <div class="card  m-2" style={{ width: "300px", height: "440px" }}>
          <img
            class="card-img-top"
            src="https://appboss.com/wp-content/uploads/2018/09/How_to_create_a_mobile_app_for_your_online_courses.jpg"
            alt="webScraping"
          />
          <div class="card-body">
            <h4 class="card-title">Web Scraping</h4>
            <p class="card-text">
              Usando Python este sistema usa o web scraping para a relização de
              uma consulta sobre medicamentos e usando o React para exibir dados
            </p>
            <a href="#" className="btn btn-primary">
              Ver detalhes
            </a>
          </div>
        </div>

        <div class="card m-2" style={{ width: "300px", height: "440px" }}>
          <img
            class="card-img-top"
            src="https://appboss.com/wp-content/uploads/2018/09/How_to_create_a_mobile_app_for_your_online_courses.jpg"
            alt="contaçãoDolar"
          />
          <div class="card-body">
            <h4 class="card-title">Cotação do Dolar</h4>
            <p class="card-text">
              Usando Python este sistema usa o web scraping para a relização de
              uma consulta sobre medicamentos e usando o React para exibir dados
            </p>
            <a href="#" className="btn btn-primary">
              Ver detalhes
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
