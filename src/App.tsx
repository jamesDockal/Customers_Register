import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./Context/authContext";
import { ToastProvider } from "./Context/toastContext";

import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
