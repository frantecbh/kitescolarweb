import React from 'react'

export const ListaBeneficiario = (data) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Titular
            </th>
            <th scope="col" className="px-6 py-3">
              Beneficiário
            </th>
            <th scope="col" className="px-6 py-3">
              KIT
            </th>

            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17
            </th>
            <td className="px-6 py-4"> Apple MacBook Pro 17</td>
            <td className="px-6 py-4"> Apple MacBook Pro 17</td>

            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
