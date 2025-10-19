import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import SupplementsPage from "./pages/SupplementsPage";
import QuestionairePage from "./pages/QuestionairePage";
import CollaborationPage from "./pages/CollaborationPage";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/supplements" element={<SupplementsPage />} />
        <Route path="/questionaire" element={<QuestionairePage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
      </Routes>
    </>
  );
}
