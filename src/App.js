import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientSlider from "./components/ClientSlider";
import CategoryWebPage from "./components/pages/CategoryWebPage";
import ClientPage from "./components/pages/ClientPage";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/pages/Layout";
import Packages from "./components/pages/Packages";
import PortfolioPage from "./components/pages/PortfolioPage";

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
          <Route path="client" element={<ClientPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="categorysite" element={<CategoryWebPage />} />
          <Route path="packages" element={<Packages />} />
          <Route path="slider" element={<ClientSlider />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
