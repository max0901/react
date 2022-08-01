const Title = ({ state }) => {
  return (
    <div>
      나의리스트의 현재 개수: <span>{state.length}</span>개
    </div>
  );
};
export default Title;
