import { lazy } from "react";

const APPRoute = [

  { path: "/dashboard", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },

  { path: "/open", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
  { path: "/open/edit-product", element: lazy(() => import("../pages/trending/open/open-detail/open-detail")) },

  { path: "/closed", element: lazy(() => import("../pages/trending/closed/closed-preview/closed-preview")) },
  { path: "/closed/edit-product", element: lazy(() => import("../pages/trending/closed/closed-edit/closed-edit")) },

  { path: "/rfi-rfq", element: lazy(() => import("../pages/responses/rfi-rfq/rfi-rfq-preview/rfi-rfq-preview")) },
  { path: "/rfi-rfq/edit-product", element: lazy(() => import("../pages/responses/rfi-rfq/rfi-rfq-edit/rfi-rfq-edit")) },

  { path: "/compaign-demand", element: lazy(() => import("../pages/responses/compaign-demand/compaign-preview/compaign-preview")) },
  { path: "/compaign-demand/edit-product", element: lazy(() => import("../pages/responses/compaign-demand/compaign-edit/compaign-edit")) },

  { path: "/campaigns", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
  { path: "/employees", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
  { path: "/supplier-sites", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
  { path: "/view-jobs", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
  { path: "/view-history", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
  { path: "/payments", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
  { path: "/tutorial-videos", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
  { path: "/about", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
  { path: "/Help-Support", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
  { path: "/Setting", element: lazy(() => import("../pages/trending/open/open-preview/preview")) },
];

export default APPRoute;
