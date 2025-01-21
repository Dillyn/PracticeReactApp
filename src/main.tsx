import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Profile from "./routes/Details";
import Settings from "./routes/Settings";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "./styles/mantine.css";
import "@mantine/charts/styles.css";
import { IconHome2 } from "@tabler/icons-react";

const theme = createTheme({});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
