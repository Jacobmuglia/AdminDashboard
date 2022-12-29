import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layout from "./scenes/layout";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app"> 
    
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout/>}>
          <Route path="/dashboard"/>
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
