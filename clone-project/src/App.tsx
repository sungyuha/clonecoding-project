import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Videos from "./page/Videos";
import VideoDetail from "./page/VideoDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Videos />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/:keyword' element={<Videos />}/>
          <Route path='/videos/watch/:videoId' element={<VideoDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
