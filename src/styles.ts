import styled from "styled-components";

export const Main = styled.main`
  background-color: tomato;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  padding: 3rem 1rem;
  h1 {
    font-family: sans-serif;
    font-size: 3rem;
    color: #fff;
    font-weight: bold;
  }
`;

export const TimerWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  span {
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const NumberBox = styled.div`
  background-color: #fff;
  width: 10rem;
  height: 15rem;
  color: tomato;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  font-size: 6rem;
  font-family: sans-serif;
  font-weight: bolder;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PlayWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Icon = styled.svg`
  color: #fff;
  width: 50%;
`;

export const GoalWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

export const Goal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: bolder;
  font-family: sans-serif;
  strong {
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }
`;
