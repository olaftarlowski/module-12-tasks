import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Users } from "./pages";
import { Navbar } from "./components";
import { AppWrapper } from "./styled-components/styled-components";

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
};

export default App;
