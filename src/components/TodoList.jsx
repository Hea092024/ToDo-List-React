import TodoItem from "./TodoItem"
export default function TodoList ({data : {todoData}}) {
    return (
      <>
        <ul>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </>
    );
}