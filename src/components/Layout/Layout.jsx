import Nav from "../Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Nav />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
