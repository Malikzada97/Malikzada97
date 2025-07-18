import { Suspense, lazy } from 'react';

// Lazy load the 3D component to reduce initial bundle size
const Floating3DComponent = lazy(() => import('./3D/Floating3DComponent'));

const Floating3DElement = ({ children, ...props }) => {
  return (
    <Suspense fallback={<div className="w-12 h-12 bg-muted rounded animate-pulse" />}>
      <Floating3DComponent {...props}>
        {children}
      </Floating3DComponent>
    </Suspense>
  );
};

export default Floating3DElement;