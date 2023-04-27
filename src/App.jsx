import "./styles/App.scss";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layouts";
import { lazy } from "react";
import { withSuspense } from "./hoc/withSuspense";
import { ScreenSizeProvider } from "./context/ScreenSizeContext";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const About = lazy(() => import("./pages/About"));
  const LaunchPad = lazy(() => import("./pages/LaunchPad"));
  const LeaderBoard = lazy(() => import("./pages/LeaderBoard"));
  const Products = lazy(() => import("./pages/Products"));
  const RewardsPage = lazy(() => import("./pages/RewardsPage"));
  const Support = lazy(() => import("./pages/Support"));
  return (
    <Router>
      <ScreenSizeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/swap" element={withSuspense(HomePage)} />
            <Route path="/about" element={withSuspense(About)} />
            <Route path="/launchpad" element={withSuspense(LaunchPad)} />
            <Route path="/leaderboard" element={withSuspense(LeaderBoard)} />
            <Route path="/products" element={withSuspense(Products)} />
            <Route path="/rewards" element={withSuspense(RewardsPage)} />
            <Route path="/support" element={withSuspense(Support)} />
          </Route>
          <Route path="/" element={<Navigate to="/swap" replace />} />
        </Routes>
      </ScreenSizeProvider>
    </Router>
  );
}

export default App;
