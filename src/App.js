import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Users } from "./pages";
import { Navbar, Message } from "./components";
import { AppWrapper } from "./styled-components/styled-components";

import { useSelector } from "react-redux";

const App = () => {
  const isActive = useSelector((state) => state.message.isActive);
  return (
    <Router>
      <AppWrapper>
        <Navbar />
        {isActive && <Message />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
};

export default App;
