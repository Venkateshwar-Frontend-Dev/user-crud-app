// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/admin/Layout";
import UserAddPage from "./pages/users/UserAddPage";
import UserEditPage from "./pages/users/UserEditPage";
import UsersPage from "./pages/users/UsersPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/add" element={<UserAddPage />} />
          <Route path="users/edit" element={<UserEditPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
