import { useEffect } from "react";

// Component :
import { AppRoutes } from "./routes";

// Redux :
import { useDispatch } from "react-redux";

// API :
import getLocations from "./services/locations.services";

// CSS :
import "./App.scss";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await getLocations.countries(dispatch);
    })()
  }, [])

  return (<AppRoutes />);
}

export default App;
