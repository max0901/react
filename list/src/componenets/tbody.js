const Tbody = ({ state }) => {
  console.log(state);
  return (
    <tbody>
      <tr>
        <td>{state.title}</td>
        <td>{state.career}</td>
        <td>{state.day}</td>
      </tr>
    </tbody>
  );
};
export default Tbody;
