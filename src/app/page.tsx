import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./(views)/home/page"
import GamePage from "./(views)/game/page"
import EditPage from "./(views)/edit/page"

export default function Home() {
    const isLoggedIn = false; // TODO: implement login
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={isLoggedIn ? <GamePage /> : <Navigate to="/" replace />} />
        <Route path="/edit" element={isLoggedIn ? <EditPage /> : <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}