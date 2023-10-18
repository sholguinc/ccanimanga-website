import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, Error, Loading } from '@/components/pages';
import { LayoutTemplate } from '@/components/templates';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Loading />}>
          <Route element={<LayoutTemplate />}>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Home />} />
            <Route path="/talleres" element={<Home />} />
            {/*<Route path="/uni-japan-week" element={<Home />} />*/}
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
