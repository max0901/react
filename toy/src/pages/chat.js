import ChatList from "../components/chat/chatlist";
import UserList from "../components/chat/userlist";
import Foot from "../components/public/foot";
import Header from "../components/public/header";

const Chat = () => {
  return (
    <>
      <Header />
      <section id="chat_wrapper">
        <UserList />
        <ChatList />
      </section>
      <Foot />
    </>
  );
};
export default Chat;
