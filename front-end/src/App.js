// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Nav from "./Components/Nav";

// PAGES
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
// import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/games" element={<Index />} /> */}
            <Route path="/games/new" element={<New />} />
            <Route path="*" element={<Error />} />
            <Route path="/games/:id" element={<Show />} />
            <Route path="/games/:id/edit" element={<Edit />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;