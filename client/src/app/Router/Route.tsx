import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '../Layout/Layout';
import AllCharachtersPage from '@/pages/AllCharachtersPage/ui/AllCharachtersPage';
import AiPage from '@/pages/AiPage/ui/AiPage';
import CharachterPage from '@/pages/CharachterPage/ui/CharachterPage';

export default function Router(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<AllCharachtersPage />} />
          <Route path="/charachter/:name" element={<CharachterPage />} />
          <Route path="/ai" element={<AiPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
