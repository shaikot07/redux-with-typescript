import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import {store} from './redux/store.ts'
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.tsx";
import { ThemeProvider } from "./components/ui/Theme/Theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <Provider  store={store}>
      <RouterProvider router={router}></RouterProvider>
      {/* <App /> */}
    </Provider>
    </ThemeProvider>
  </StrictMode>
);


{/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
{children}
</ThemeProvider> */}