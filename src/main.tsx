import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Profile from "./routes/Details/Details";
import Settings from "./routes/HobbiesPage/Hobbies";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "./styles/mantine.css";
import "@mantine/charts/styles.css";
import { IconHome2 } from "@tabler/icons-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const theme = createTheme({});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
