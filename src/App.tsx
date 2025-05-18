import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import "./App.css"
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Edit from "./pages/Edit";
import View from "./pages/View";
import Layout from "./layout/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Layout>
  );
}

export default App;
