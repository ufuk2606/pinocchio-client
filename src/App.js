import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <NavigationBar />
        <Outlet />
      </UserContextProvider>
    </div>
  );
}

export default App;
