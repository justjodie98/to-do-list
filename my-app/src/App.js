import Title from "./Title";
import Task from "./Task";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Button = styled.button`
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: inline-block;
  flex: 1;
  border: white;
  background-color: #219ebc;
  color: white;
  height: 70px;
  width: 100px;
  border-radius: 2px;
  cursor: pointer;
`;

const Text = styled.input`
  border: 2px solid #000;
`;

export default function App() {
  return (
    <div className="App">
      <Container>
        <Title />
        <Button>Add task</Button>
        <Text/>
        <Task />
        <Button>Clear task</Button>
      </Container>
    </div>
  );
}
