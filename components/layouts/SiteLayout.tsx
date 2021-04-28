const SiteLayout = ({ children }:any) => (
  <>
    {children}
  </>
)

export const getLayout = (page:any) => <SiteLayout>{page}</SiteLayout>

export default SiteLayout;
