import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import Login from './pages/Login';
import { useAuthenticatedUser } from './providers/Authentication';
import Read from './pages/Read';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useAuthenticatedUser();
  const location = useLocation();

  if (isLoading) {
    return <div />;
  }

  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/login" state={{ next: location }} replace />;
  }

  return children;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <div style={{ fontSize: 18 }}>Hello</div>
            </RequireAuth>
          }
        />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <div>Hello</div>
            </RequireAuth>
          }
        />
        <Route
          path="/read"
          element={
            <RequireAuth>
              <Read />
            </RequireAuth>
          }
        >
          <Route path=":ref">
            <Route path="hyperlinks/:hyperlink" />
          </Route>
        </Route>
        <Route
          path="/intro"
          element={
            <RequireAuth>
              <div>Intro!</div>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/read" />} />
      </Routes>
    </>
  );
};

export default App;
