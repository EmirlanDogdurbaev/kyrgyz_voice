import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
