import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

function App(props) {
  const { counter, theme } = useSelector((state) => state.entities);

  const StyledDiv = styled.div`
    background: ${theme.isLight ? "#03a9f4" : "#482880"};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      color: #fff;
      font-size: 56px;
      margin-bottom: 30px;
    }
    p {
      text-align: center;
      color: #fff;
      font-size: 24px;
    }
    button {
      border: none;
      background: ${theme.isLight ? "#81d4f9" : "#a393bf"};
      color: #fff;
      padding: 10px 25px;
      border-radius: 7px;
      font-size: 18px;
      margin: 0 30px;
      outline: none;

      &:hover {
        background: #f98000;
      }
    }
  `;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <StyledDiv className="App">
      <div>
        <p>Theme is {theme.isLight ? "Light" : "Dark"}</p>
        <h1>{counter.counter}</h1>
        <button onClick={handleIncrement}> Increment</button>
        <button onClick={handleDecrement}> Decrement</button>
        <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>change Theme</button>
      </div>
    </StyledDiv>
  );
}

export default App;
