import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { LayoutTemplate } from '@/components/templates';
import {
  Home,
  Error,
  Loading,
  AboutUs,
  Workshop,
  Workshops,
  Screenings,
  OtherActivities,
  UNIJapanWeek,
} from '@/components/pages';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Loading />}>
          <Route element={<LayoutTemplate />}>
            <Route index element={<Home />} />
            <Route path="/nosotros" element={<AboutUs />} />

            <Route path="/talleres">
              <Route index element={<Workshops />} />
              <Route path=":workshopId" element={<Workshop />} />
            </Route>

            <Route path="/uni-japan-week" element={<UNIJapanWeek />} />
            <Route path="/proyecciones" element={<Screenings />} />
            <Route path="/otras-actividades" element={<OtherActivities />} />
          </Route>

          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
