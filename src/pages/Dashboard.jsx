import { MagnifyingGlass } from '@phosphor-icons/react'

import { useState } from 'react'

import { Loading } from '../components/Loading'
import { Modal } from '../components/Modal'
import { api } from '../services/api'

export function Dashboard() {
  const [matricula, setMatricula] = useState('')
  const [beneficiarios, setBeneficiarios] = useState([])
  const [entrega, setEngrega] = useState()
  const [showModal, setShowModadal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function sendConfirmcao(data) {
    setEngrega(data)
    setShowModadal(true)
  }

  async function handleFindUser() {
    if (matricula === '') {
      return
    }

    setBeneficiarios([])
    setMatricula('')
    setIsLoading(true)

    try {
      const response = await api.get(`/beneficiario/${matricula}`)

      const result = response.data
      setBeneficiarios(result)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  async function sendConfirmaEntrega(dados) {
    setShowModadal(false)
    setBeneficiarios([])
    setIsLoading(true)

    try {
      const response = await api.patch(
        '/beneficiario',
        {
          id: dados.id,
          PONTO_ENTREGA: dados.PONTO_ENTREGA,
          ENTREGADOR: 'FRANCISCO MENEZES',
          STATUS: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (response.status === 201) {
        const resultado = await api.get(
          `/beneficiario/${response.data.MATRICULA}`,
        )

        const result = resultado.data
        setBeneficiarios(result)

        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="bg-zinc-50 h-screen mx-auto w-full  flex items-center justify-center p-4 dark:bg-gray-700 ">
        <div className="max-w-3xl w-full bg-zinc-200 h-auto rounded-lg p-4 flex flex-col">
          <div className="mb-3 flex justify-between">
            <span className="lg:text-lg uppecase focus:ring-0 font-semibold text-sky-800">
              KIT ESCOLAR 2023
            </span>
            <p className="text-zinc-500 font-semibold text-sm">
              Entregador: <span>Francisco Menezes</span>
            </p>
          </div>
          <div className="w-full flex items-center bg-gray-50 pl-3 rounded-md gap-1 overflow-auto">
            <MagnifyingGlass size={24} color="#9ca3af" weight="bold" />
            <input
              className="w-full h-10 bg-transparent rounded-md  outline-none"
              type="number"
              value={matricula}
              placeholder="Informe o ID SAP do titular"
              onChange={(e) => setMatricula(e.target.value)}
              onBlur={handleFindUser}
            />
          </div>

          {/* <p
            className={`text-red-700 text-sm ${
              beneficiarios.length > 0 && 'hidden'
            }`}
          >
            Usuário não encontrado ou ID SAP incorreto
          </p> */}

          {isLoading && <Loading />}

          {beneficiarios.length > 0 && (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      ID Sap
                    </th>
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
                  {beneficiarios.map((beneficiario) => (
                    <tr
                      key={beneficiario.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs"
                    >
                      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {beneficiario.MATRICULA}
                      </th>
                      <td className="px-6 py-4">{beneficiario.NOMETITULAR}</td>

                      <td className="px-6 py-4">
                        {beneficiario.NOMEBENEFICIARIO}
                      </td>
                      <td className="px-6 py-4"> {beneficiario.KIT}</td>

                      <td className="px-6 py-4 text-right">
                        {beneficiario.STATUS ? (
                          <button
                            disabled
                            className="bg-green-900 p-2 text-zinc-50 rounded-md hover:bg-green-700 transition-all duration-300"
                          >
                            Entrega realizada
                          </button>
                        ) : (
                          <button
                            onClick={() => sendConfirmcao(beneficiario)}
                            className="bg-green-900 p-2 text-zinc-50 rounded-md hover:bg-green-700 transition-all duration-300"
                          >
                            Entregar
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Modal
        isVisible={showModal}
        onClose={() => setShowModadal(false)}
        data={entrega}
        confirma={sendConfirmaEntrega}
      />
    </>
  )
}
