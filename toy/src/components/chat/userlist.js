import { useCallback, useState } from "react";

const UserList = () => {
  const [user, setUser] = useState([
    {
      id: 1,
      name: "kimseongyong",
    },
    {
      id: 2,
      name: "max",
    },
    {
      id: 3,
      name: "chil",
    },
    {
      id: 4,
      name: "jin",
    },
    {
      id: 5,
      name: "janny",
    },
  ]);
  const Remove = useCallback(
    (id) => {
      console.log(id);
      const removeState = user.filter((item) => item.id !== id);
      console.log(removeState);
      setUser(removeState);
    },
    [user]
  );
  return (
    <>
      <ul id="chat_userList_box">
        {/* <!-- userInfo --> */}
        {user.map((v) => (
          <li>
            <span>{v.name}</span>
            <ul class="chat_userList_button">
              <button
                onClick={() => {
                  Remove(v.id);
                }}
              >
                삭제
              </button>
              <li>차단</li>
            </ul>
          </li>
        ))}

        <button class="addF">친구추가</button>
      </ul>
    </>
  );
};
export default UserList;
