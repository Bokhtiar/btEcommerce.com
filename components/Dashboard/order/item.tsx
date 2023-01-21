import Link from "next/link"

const OrderItem :React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold">Cart List</h2>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="py-3 px-6">
                Product
              </th>
              <th scope="col" className="py-3 px-6">
                Quantity
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Total
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-32">
                      <img src="" alt="Apple Watch" />
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      product name
                    </td>
                    <td className="py-4 px-6">
                     2
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      23
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                     32
                    </td>
                    <td className="py-4 px-6">
                      <span className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
                    </td>
                  </tr>
          </tbody>
        </table>

        <div className="float-right">
          <div className="flex my-5 gap-2">
            <button className="rounded-md border text-white border-primary py-1 bg-primary hover:bg-white hover:text-black px-5 font-bold">
              Go To Shoping
            </button>
          </div>
        </div>
      </div>
        </div>
    )
}
export default  OrderItem