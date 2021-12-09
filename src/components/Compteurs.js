import React, { useState } from "react";
import "./Compteurs.css";

const Compteurs = () => {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);

  let cond1plus = c1<9;
  let cond1moins = c1>0;
  let cond2plus = c2<9;
  let cond2moins = c2>0;
  let cond3 = (c1+c2<15);

  return (
    <div className="bgdCompteurs">

      <div>COMPTEUR EXEMPLE 1</div>
      <div>
        {cond1moins
          ? <button onClick={() => { setC1(c1 - 1); }}>-</button>
          : null}
        {/* Conditional rendering (react): Cette syntaxe est equivalente (et nous epargne le else avec null): */}
        {/* {cond1moins
          ? <button onClick={() => { setC1(c1 - 1); }}>-</button>
          : null} */}
        {c1}
        {cond1plus&&cond3
          ? <button onClick={() => { setC1(c1 + 1); }}>+</button>
          : null}
      </div>

      <div>COMPTEUR EXEMPLE 2</div>
      <div>
        {cond2moins
          ? <button onClick={() => { setC2(c2 - 1); }}>-</button>
          : null}

        {c2}
        {cond2plus&&cond3
          ? <button onClick={() => { setC2(c2 + 1); }}>+</button>
          : null}
      </div>

      <div>SOMME</div>
      <div>
        {c1 + c2}
      </div>

    </div>
  );
};

export default Compteurs;
