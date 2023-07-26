import React, { useState } from "react";
import Home from "../Home/index";
import Contact from "../Contact/index";
import NavTabs from "../NavTabs";
import Header from "../Header";
import Footer from "../Footer";

export default function Page() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    } else return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
