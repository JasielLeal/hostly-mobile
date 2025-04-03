import { NavigationContainer } from "@react-navigation/native";
import "../global.css"
import { Routes } from "./routes/Layout";

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>

    </>
  );
}

