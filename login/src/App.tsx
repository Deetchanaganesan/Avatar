import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Profile from "./Profile";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Profile />
      </div>
    </ChakraProvider>
  );
}

export default App;
