import React from "react";
import ResultsPage from "pages/ResultsPage";
import Homepage from "pages/Homepage";
import CoverFrame from "pages/CoverFrame";
import HotelsPage from "pages/HotelsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HotelsPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/coverframe" element={<CoverFrame />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/resultspage" element={<ResultsPage />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
