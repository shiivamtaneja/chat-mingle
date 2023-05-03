import Sidebar from "../components/Sidebar"
import Login from "./Login"
import Register from "./Register"
import Chat from "../components/Chat"

const Home = () => {
  return (
    // <>
    //   <Login />
    //   <Register />
    // </>
    <div className="home">
      <Sidebar />
      <Chat />
    </div>
  )
}

export default Home