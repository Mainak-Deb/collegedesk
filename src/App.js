import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import Home from "./components/Home";
import Stream from "./components/Main/Stream";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Search from "./components/Search";
import Profile from "./components/Main/Profile";
import Footer from "./components/Main/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path=":streamname" element={<About />} />
          </Route>
          <Route path="/blog" element={<Blogs />}>
            <Route path=":streamname" element={<Blogs />} />
          </Route>

          <Route path="/profile" element={<Profile />}>
            <Route path=":streamname" element={<Profile />}>
              <Route path=":emailid" element={<Profile />} />
            </Route>
          </Route>
          <Route path="/stream" element={<Stream />}>
            <Route path=":streamname" element={<Stream />} />
          </Route>
          <Route path="/search" element={<Search />}>
            <Route path=":streamname" element={<Search />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
