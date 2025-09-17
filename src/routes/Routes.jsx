import React, { Suspense } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

// Pages :
import { Loader } from "src/components";
import APPRoute from "./routesConstant";
import { AppLayout, AuthLayout } from "src/layouts";
import { EditRegister, Login, SignUp } from "src/pages";

// Redux :
import { useSelector } from "react-redux";


const AppRoutes = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.signIn);

  const SuspenseWrappter = (LazyComponent, isFullHeight) => (
    <Suspense fallback={<Loader isFullHeight={isFullHeight} />}>
      <LazyComponent />
    </Suspense>
  );

  const ProtectedRoute = () => {
    if (user) {
      return true;
    } else {
      return true;
      // return false;
    }
  };

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="about-us" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="how-koboldo-works" element={<Login />} />
        <Route path="edit-register" element={<EditRegister />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
      <Route element={<AppLayout />}>
        {APPRoute.map((data, index) => (
          <Route
            key={index}
            path={data.path}
            element={
              ProtectedRoute() ?
                SuspenseWrappter(data.element) :
                (<Navigate to="/login" replace />)
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
