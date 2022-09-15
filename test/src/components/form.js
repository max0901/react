import { useCallback, useReducer, useState } from "react";
import { reducer } from "../reducer";
import 
const Form = () => {
  const [txt, setTxt] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const onchangeTxt = useCallback((e) => {
    setTxt(e.target.value);
  }, []);
  const transClick = useCallback(() => {
    setUser([...user, { id: user.length + 1, name: txt }]);
    console.log(user);
  });

  return (
    <>
      <input type="text" onChange={onchangeTxt} value={txt} />
      <button onClick={transClick}>변환</button>
      {user.map((v) => (
        <div>{v.id}</div>
      ))}
    </>
  );
};
export default Form;
