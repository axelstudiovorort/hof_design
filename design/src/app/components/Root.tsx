import { Outlet, ScrollRestoration } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
      <ScrollRestoration />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
