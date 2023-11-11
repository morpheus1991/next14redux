import React, { Children, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <body className="flex min-h-[100vh] flex-col">
      <Header></Header>
      <div className="bg-gray-800 flex-1">
        <p className="text-center">contents-area</p>
        {children}
      </div>
      <Footer></Footer>
    </body>
  );
};

export default Layout;
