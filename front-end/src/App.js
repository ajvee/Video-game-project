import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import NavBar from "./Components/NavBar"

import Home from "./Pages/Home"
// import Index from "./Pages/Index"
// import Show from "./Pages/Show"
import Edit from "./Pages/Edit"
// import New from "./Pages/New"
import FourOFour from "./Pages/FourOFour"

function App() {
  return (
    <div className="App">
     <Router>
      {/* <NavBar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/games" element={<Index />} /> */}
          {/* <Route path="/games/:id" element={<Show />} /> */}
          <Route path="/games/:id/edit" element={<Edit />} />
          {/* <Route path="/games/new" element={<New />} /> */}
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
     </Router>
    </div>
  );
}

export default App;
