import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { LayoutTemplate } from '@/components/templates';
import { Error, Loading } from '@/components/pages';

const Home = lazy(() => import('@/components/pages/Home.tsx'));
const AboutUs = lazy(() => import('@/components/pages/AboutUs.tsx'));
const Workshops = lazy(() => import('@/components/pages/Workshops.tsx'));
const Workshop = lazy(() => import('@/components/pages/Workshop.tsx'));
const Screenings = lazy(() => import('@/components/pages/Screenings.tsx'));
const UNIJapanWeek = lazy(() => import('@/components/pages/UNIJapanWeek.tsx'));
const OtherActivities = lazy(
  () => import('@/components/pages/OtherActivities.tsx'),
);

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
