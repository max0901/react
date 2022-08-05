const Tbody = ({ state }) => {
  console.log(state);
  const onUpdate = (state) => {
    console.log(state);
  };
  return (
    <tbody>
      <tr>
        <td>{state.title}</td>
        <td>{state.career}</td>
        <td>{state.day}</td>
        <button onClick={onUpdate} state={state.id}>
          수정
        </button>
      </tr>
    </tbody>
  );
};
export default Tbody;
