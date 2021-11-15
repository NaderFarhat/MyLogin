import React, { useState, useRef } from "react";
import "../Login/style.css";

//TODO Deixar mais bonito
//TODO melhorar desenho da carinha
//TODO refatorar codigo
//FIXME Arruma calculo angulo

function Login() {
  const [x, setX] = useState();
  const [isClosed, setIsClosed] = useState(false);
  const inputRef = useRef();

  const getDegreesInput = (x) => {
    if (x > 31) {
      x = 31;
    }
    let value = 4.5 * x - 80;
    return value;
  };

  const styleEye = {
    transform: `rotate(${-getDegreesInput(x)}deg)`,
    transition: `all 200ms ease`,
  };

  const closedEyes = {
    backgroundColor: "#916dbf",
    backgroundPosition: "top",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  return (
    <div className="App">
      <div>
        <div className="container-face rotating">
          <div class="head ">
            <div
              class="semi-circle left-circle"
              style={isClosed ? closedEyes : undefined}
            >
              <div class="rotate" style={styleEye}>
                <div
                  class="pupil"
                  style={isClosed ? closedEyes : undefined}
                ></div>
              </div>
            </div>
            {isClosed && <div class="eyelash-left" />}

            <div
              class="semi-circle right-circle"
              style={isClosed ? closedEyes : undefined}
            >
              <div class="rotate" style={styleEye}>
                <div
                  class="pupil"
                  style={isClosed ? closedEyes : undefined}
                ></div>
              </div>
            </div>
            {isClosed && <div class="eyelash-right" />}
            <div class="smile">
              <div class="corner"></div>
              <div class="corner right"></div>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={() => handleSubmit()}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="nome@email.com.br"
              ref={inputRef}
              onKeyDown={() =>
                inputRef &&
                inputRef.current &&
                setX(inputRef.current.value.length)
              }
              style={{ width: 280 }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onFocus={() => setIsClosed(true)}
              onBlur={() => setIsClosed(false)}
              style={{ width: 280 }}
            />
          </div>
          <button className="primary">ENTER</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
