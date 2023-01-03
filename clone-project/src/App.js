import {BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./page/Videos";
import VideoDetail from "./page/VideoDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Videos/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/videos/query" element={<Videos/>} />
          <Route path="/watch/id" element={<VideoDetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
