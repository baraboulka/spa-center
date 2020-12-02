import UpperBar from "../upper-bar";
import Footer from "../footer";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <section className="layout__content">
        <UpperBar />
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
