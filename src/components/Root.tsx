import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, Error } from '@/components/pages';
import { LayoutTemplate } from '@/components/templates';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutTemplate />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
