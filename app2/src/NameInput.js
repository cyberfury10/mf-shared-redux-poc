import { useDispatch, useSelector } from "react-redux";

import React from "react";

const CounterButtons = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);

  return (
    <div>
      App2 component Hello, {name}.
      <br />
      <input
        type="text"
        value={name}
        onChange={e =>
          dispatch({ type: "NAME_CHANGE_APP2", payload: e.target.value })
        }
      />
    </div>
  );
};

export default CounterButtons;
