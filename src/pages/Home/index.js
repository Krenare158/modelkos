import React, { lazy, Suspense } from 'react';
import Loading from '../../components/main/Loading/Loading';
const LazyLoaded = lazy(() => import('./Home'));

function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyLoaded />
    </Suspense>
  );
}

export default Home;