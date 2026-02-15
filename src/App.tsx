import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

import About from "./pages/about";
import HomePage from "./pages/homepage";

// import TerminalIcon from "@mui/icons-material/Terminal";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TimelineIcon from "@mui/icons-material/Timeline";

import ProjectsList from "./pages/projects/projectsList";
import ProjectCreate from "./pages/projects/projectCreate";
import ProjectShow from "./pages/projects/projectShow";
import ProjectEdit from "./pages/projects/projectEdit";

import TimelinesList from "./pages/timelines/timelinesList";
import TimelineCreate from "./pages/timelines/timelineCreate";
import TimelineShow from "./pages/timelines/timelineShow";
import TimelineEdit from "./pages/timelines/timelineEdit";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    dashboard={HomePage}
    authProvider={authProvider}
  >
    <Resource
      name="projects"
      list={ProjectsList}
      show={ProjectShow}
      edit={ProjectEdit}
      create={ProjectCreate}
      icon={WorkOutlineIcon}
    />
    <Resource
      name="timelines"
      list={TimelinesList}
      show={TimelineShow}
      edit={TimelineEdit}
      create={TimelineCreate}
      icon={TimelineIcon}
    />
    <CustomRoutes>
      <Route path="/about" element={<About />} />
    </CustomRoutes>
  </Admin>
);
