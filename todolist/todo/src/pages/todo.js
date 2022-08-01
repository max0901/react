import List from "../component/list";
import Title from "../component/title";
import Form from "../component/form";
import { useSelector } from "react-redux";
const Todo = () => {
  const state = useSelector((state) => state.todo);
  return (
    <>
      <Title state={state} />
      <Form />
      {state.map((v) => (
        <List key={v.id} state={v} />
      ))}
    </>
  );
};
export default Todo;
