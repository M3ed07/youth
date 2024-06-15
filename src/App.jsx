import {Routes , Route} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { Notifications } from "./pages/Notifications";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className=" py-4 bg-bg-color w-full min-h-screen h-full text-main-fc">
      <Routes>
        <Route element={<Navbar/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="events" element={<Events/>}/>
        <Route path="notifications" element={<Notifications/>}/>
        <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
