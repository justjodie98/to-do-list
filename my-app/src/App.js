import { useState } from "react";
import Title from "./Title";
import { Checkbox } from "./Checkbox";
import styled from "styled-components";
import { BsCheckSquareFill } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
`;

const Button = styled.button`
  color: white;
  font-size: 1rem;
  display: inline-block;
  flex: 1;
  border: 2px solid white;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px 20px 10px;
`;

const Text = styled.input`
  border: 2px solid white  
  font-size: 1.25rem;
`;

const Tasks = styled.div``;

const TaskCount = styled.span`
  margin: 25px;
`;

const LIST = styled.li`
  liststyle: "none";
  text-decoration: "line-through";
`;

export default function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      },
    ]);
    setInput("");
  };

  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete) {
          //Task is pending, modifying it to complete and increment the count
          setCompletedTaskCount(completedTaskCount + 1);
        } else {
          //Task is complete, modifying it back to pending, decrement Complete count
          setCompletedTaskCount(completedTaskCount - 1);
        }
        item = { ...task, complete: !task.complete };
      } else item = { ...task };
      return item;
    });
    setTodoList(list);
  };

  return (
    <div className="App">
      <Container>
        <Title />
        <Text
          style={{ width: "35%", height: "40px" }}
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <Button
          className="button"
          disabled={!input}
          onClick={() => handleClick()}
        >
          Add task
        </Button>
        <Tasks>
          <TaskCount>
            <b>Current Tasks</b> {todoList.length - completedTaskCount}
          </TaskCount>
          <TaskCount style={{ color: "#2dc653" }}> 
            <b>Completed Tasks</b> {completedTaskCount} <BsCheckSquareFill/>
          </TaskCount>
        </Tasks>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ul>
            {todoList.map((todo) => {
              return (
                <LIST
                  complete={todo.complete}
                  id={todo.id}
                  style={{
                    width: "100%",
                    listStyle: "none",
                    textDecoration: todo.complete && "line-through",
                  }}
                >
                  <Checkbox
                    onClick={() => handleComplete(todo.id)}
                    defaultChecked={todo.complete}
                  />
                  {todo.task}
                </LIST>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
}
