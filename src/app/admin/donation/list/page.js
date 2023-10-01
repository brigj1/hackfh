'use client'

async function getDonations() {
  const res = await fetch(`/admin/donation/list/api`)
  return res.json()
}

export default async function Page() {

  // Wait for the promises to resolve
  const donations = await getDonations()

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Partner List</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">ID</th>
                    <th scope="col" className="px-6 py-4">Company Name</th>
                    <th scope="col" className="px-6 py-4">Item Total</th>
                    <th scope="col" className="px-6 py-4">Contact Phone</th>
                    <th scope="col" className="px-6 py-4">Contact Email</th>
                  </tr>
                </thead>
                <tbody>
                {donations.map((donation) => (
                  <tr className="border-b dark:border-neutral-500" key={donation.id}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{donation.id}</td>
                    <td className="whitespace-nowrap px-6 py-4">{donation.companyName}</td>
                    <td className="whitespace-nowrap px-6 py-4">{donation.contactName}</td>
                    <td className="whitespace-nowrap px-6 py-4">{donation.contactPhone}</td>
                    <td className="whitespace-nowrap px-6 py-4">{donation.contactEmail}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

