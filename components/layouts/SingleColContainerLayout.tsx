import Nav from "@components/nav/Nav"
import { getLayout as getSiteLayout } from "@components/layouts/SiteLayout";

const SingleColContainerLayout = ({ children }:any) => {
  return (
    <>
      <Nav></Nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {children}
      </div>
    </>
  );
};

export const getLayout = (page:any) =>
  getSiteLayout(<SingleColContainerLayout>{page}</SingleColContainerLayout>);


  
export default SingleColContainerLayout;
