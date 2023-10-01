async function getItems() {
  const res = await fetch(`/partner/item/list/api`)
  return res.json()
}

export default async function Page() {

  // Wait for the promises to resolve
  const items = await getItems()

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Item Catalog</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">Product Name</th>
                    <th scope="col" className="px-6 py-4">Description</th>
                    <th scope="col" className="px-6 py-4">MSRP</th>
                    <th scope="col" className="px-6 py-4">UPC</th>
                    <th scope="col" className="px-6 py-4">URL</th>
                  </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                  <tr className="border-b dark:border-neutral-500" key={item.id}>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{item.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.description}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.msrp}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.upc}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <a href={item.url}>view</a>
                      {item.contactEmail}</td>
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

