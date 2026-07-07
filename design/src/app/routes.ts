import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./components/pages/HomePage";
import { WorkshopsPage } from "./components/pages/WorkshopsPage";
import { EventsPage } from "./components/pages/EventsPage";
import { BlogPage } from "./components/pages/BlogPage";
import { BlogPostPage } from "./components/pages/BlogPostPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: HomePage },
        { path: "workshops", Component: WorkshopsPage },
        { path: "events", Component: EventsPage },
        { path: "blog", Component: BlogPage },
        { path: "blog/:slug", Component: BlogPostPage },
      ],
    },
  ],
  { basename: "/" }
);
