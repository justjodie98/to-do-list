import { useState } from "react";
import Title from "./Title";
import { Checkbox } from "./Checkbox";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Button = styled.button`
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

const Tasks = styled.div``;

const TaskCount = styled.span`
  margin: 10px;
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
      if (task.id == id) {
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

  const checkbox = (id) => {
    const checkTask = todoList.filter((task) => {
      return task.id !== id;
    });
    setTodoList(checkTask);
  };

  return (
    <div className="App">
      <Container>
        <Title />
        <Text value={input} onInput={(e) => setInput(e.target.value)} />
        <Button disabled={!input} onClick={() => handleClick()}>
          Add task{" "}
        </Button>
        <Tasks>
          <TaskCount>
            <b>Current Tasks</b> {todoList.length - completedTaskCount}
          </TaskCount>
          <TaskCount>
            <b>Completed Tasks</b> {completedTaskCount}
          </TaskCount>
        </Tasks>
        <div>
          <ul>
            {todoList.map((todo) => {
              return (
                <LIST
                  complete={todo.complete}
                  id={todo.id}
                  style={{
                    listStyle: "none",
                    textDecoration: todo.complete && "line-through",
                  }}
                >
                  {todo.task}
                  <Checkbox
                    onClick={() => handleComplete(todo.id)}
                    defaultChecked={todo.complete}
                  />
                </LIST>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
}
