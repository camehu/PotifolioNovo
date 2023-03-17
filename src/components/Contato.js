import React from "react";

const Menu = () => {
  return (
    <>
      <div
        id="contato"
        class="d-flex justify-content-center bg-primary p-4 flex-wrap"
      >
        <form
          style={{
            width: "350px",
            backgroundColor: "#DCDCDC",
            padding: "10px"
          }}
        >
          <h3>Contato</h3>
          <div class="mb-3 mt-3">
            <label htmlFor="nome_completo" class="form-label">
              Nome completo:
            </label>
            <input
              type="text"
              class="form-control"
              id="nome_completo"
              placeholder="digite seu nome"
              name="nome_copmpleto"
            />
          </div>
          <div class="mb-3">
            <label htmlfor="email" class="form-label">
              Email:
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="digite seu email"
              name="email"
            />
          </div>

          <div class="mb-3">
            <label htmlfor="email" class="form-label">
              Telefone:
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="digite seu telefone"
              name="ermail"
            />
          </div>

          <label for="comment">Mensagem:</label>
          <textarea
            class="form-control"
            rows="5"
            id="comment"
            name="text"
          ></textarea>

          <button type="submit" class="btn btn-secondary mt-4">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Menu;
