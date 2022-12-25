import { Routes, Route, Navigate } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";
export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
