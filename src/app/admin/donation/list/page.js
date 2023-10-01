async function getDonations() {
  const res = await fetch(`http://localhost:3000/admin/donation/list/api`)
  return res.json()
}

export default async function Page() {

  // Wait for the promises to resolve
  const donations = await getDonations()

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Partner List</h1>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">ID</th>
                    <th scope="col" class="px-6 py-4">Company Name</th>
                    <th scope="col" class="px-6 py-4">Item Total</th>
                    <th scope="col" class="px-6 py-4">Contact Phone</th>
                    <th scope="col" class="px-6 py-4">Contact Email</th>
                  </tr>
                </thead>
                <tbody>
                {donations.map((donation) => (
                  <tr class="border-b dark:border-neutral-500" key={donation.id}>
                    <td class="whitespace-nowrap px-6 py-4 font-medium">{donation.id}</td>
                    <td class="whitespace-nowrap px-6 py-4">{donation.companyName}</td>
                    <td class="whitespace-nowrap px-6 py-4">{donation.contactName}</td>
                    <td class="whitespace-nowrap px-6 py-4">{donation.contactPhone}</td>
                    <td class="whitespace-nowrap px-6 py-4">{donation.contactEmail}</td>
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

