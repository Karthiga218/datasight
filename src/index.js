
import { render } from "react-dom";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RegisteredUser from './component/registereduser';
import UnRegisteredUser from './component/unregisteredUser';
import ProjectMembers from './component/projectMembers';
import ProjectId from "./component/registereduser/projectId";
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProjectMembers />} />
      <Route path="/component/registereduser" element={<RegisteredUser />} />
      <Route path="/component/unregisteredUser" element={<UnRegisteredUser />} />
      <Route path="/component/registereduser/projectId" element={<ProjectId />} />
    </Routes>
  </BrowserRouter>
  </Provider>,
  rootElement
);