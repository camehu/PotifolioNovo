import React from "react";

const Menu = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-sm bg-light"
        style={{ position: "fixed", width: "100%" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://wallup.net/wp-content/uploads/2019/09/261374-speed-racer-action-family-sport-race-cartoon-race-racing-56.jpg"
              alt="Avatar Logo"
              style={{ width: "50px" }}
              class="rounded-pill"
            />
          </a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#sobre">
                Sobre mim
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projetos">
                Projetos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
