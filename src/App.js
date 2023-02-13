import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientSlider from "./components/ClientSlider";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/pages/Layout";

const App = () => {
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <BrowserRouter>
      <Layout loading={loading}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="slider" element={<ClientSlider />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
