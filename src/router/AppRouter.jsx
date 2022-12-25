import { Routes, Route, Navigate } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="journal/*" element={<JournalRoutes />} />
      ) : (
        <Route path="journal/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="journal/auth/login" />} />
    </Routes>
  );
};
