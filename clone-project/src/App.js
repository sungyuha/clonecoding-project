import {BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./compements/Videos";
import VideoDetail from "./compements/VideoDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Videos/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/videos/query" />
          <Route path="/watch/id" element={<VideoDetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
