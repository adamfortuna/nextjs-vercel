import Nav from "@components/nav/Nav"

const DefaultLayout = (props) => (
  <div className="min-h-screen min-w-screen dark:bg-gray-800 dark:text-gray-200 bg-gray-200 text-gray-800">
    <Nav></Nav>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      {props.children}
    </div>
  </div>
);

export default DefaultLayout;
