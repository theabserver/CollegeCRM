import "./App.css";
import Login from "./Views/Login";
import { Home } from "./Views/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Container } from "@mui/material";
import { NotFound } from "./Views/NotFound";
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

function App() {
  return (
    <div className="app-container bg-light">
      <Router history={history}>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Home />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/*" element={<NotFound />} />
          </Routes>
        {/* <Container>
        </Container> */}
      </Router>
    </div>
  );
}

export default App;
