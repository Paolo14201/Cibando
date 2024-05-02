import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const { TextArea } = Input;

const Contatti = () => {
  return (
    <Contenitore>
      <div className="form-nome">
        <form>
          <label>
            <h6>Nome</h6>
            <Input.TextArea className="textarea" rows={4} />
          </label>
        </form>
      </div>
      <div className="form-email">
        <form>
          <label>
            <h6>E-mail</h6>
            <Input.TextArea className="textarea" rows={4} />
          </label>
        </form>
      </div>
      <div className="form-oggetto">
        <form>
          <label>
            <h6>Oggetto</h6>
            <Input.TextArea className="textarea" rows={4} />
          </label>
        </form>
      </div>
      <div className="form-testo">
      <form>
          <label>
            <h6>Testo</h6>
            <Input.TextArea className="textarea" rows={4} />
          </label>
        </form>
      </div>
      <div className="d-flex">
        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-lg"
        >
          Invia
        </button>
      </div>
    </Contenitore>
  );
};

const Contenitore = styled.div`
  .form-email {
    margin-left: 200px;
    display: flex;
    margin-top: 40px;
  }

  .form-nome {
    margin-left: 200px;
    display: flex;
  }

  .input-testo {
    width: 200px;
  }

  .input-testo1 {
    clear: both;
  }
  .input-testo2 {
    clear: both;
  }

  .form-oggetto {
    margin-left: 200px;
    display: flex;
    margin-top: 40px;
  }

  .form-testo {
    margin-left: 200px;
    display: flex;
    margin-top: 40px;
  }

  .input-testo3 {
    clear: both;
  }

  .d-flex {
    margin-left: 200px;
    margin-top: 40px;
  }

  .textarea {
    resize: none;
  }
`;

export default Contatti;
