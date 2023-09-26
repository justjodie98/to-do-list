import styled from "styled-components";

const Tasks = styled.div``;

const TaskCount = styled.span`
  margin: 10px;
`;

function Task() {
  return (
    <div className="Task">
      <Tasks>
        <TaskCount>
          <b>Pending Tasks</b>
        </TaskCount>
        <TaskCount>
          <b>Completed Tasks</b>
        </TaskCount>
      </Tasks>
    </div>
  );
}

export default Task;
