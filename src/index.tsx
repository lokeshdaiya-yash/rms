import "./styles.scss"
import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<span className="loading"><Spinner  animation="border" /></span>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
