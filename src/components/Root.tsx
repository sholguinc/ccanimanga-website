import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { LayoutTemplate } from '@/components/templates';
import { Home, Error, Loading, Workshop, Workshops } from '@/components/pages';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Loading />}>
          <Route element={<LayoutTemplate />}>
            <Route index element={<Home />} />
            <Route path="/nosotros" element={<Home />} />

            <Route path="/talleres">
              <Route index element={<Workshops />} />
              <Route path=":workshopId" element={<Workshop />} />
            </Route>

            <Route path="/uni-japan-week" element={<Home />} />
            <Route path="/proyecciones" element={<Home />} />
            <Route path="/otras-actividades" element={<Home />} />
          </Route>

          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
