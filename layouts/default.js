import Nav from "@components/nav/Nav"

const DefaultLayout = (props) => (
  <>
    <Nav></Nav>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      {props.children}
    </div>
  </>
);

export default DefaultLayout;
