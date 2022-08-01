import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { DELETE } from "../redux/todo";

const List = ({ state }) => {
  const dispatch = useDispatch();
  const Remove = useCallback(() => {
    dispatch({
      type: DELETE,
      id: state.id,
    });
  }, [dispatch, state]);
  return (
    <div>
      {state.id}. {state.title}.{state.main}
      <button onClick={Remove}>삭제</button>
    </div>
  );
};
export default List;
