import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-amber-50 h-screen relative flex items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
