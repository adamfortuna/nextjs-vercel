import Settings from '@components/settings/Settings'

function Account() {

  return (
    <Settings></Settings>
  )
}

Account.getLayout = (page:any) => (
  <div className="bg-red-500">
    {page}
  </div>
)

export default Account