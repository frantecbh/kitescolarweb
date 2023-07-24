import React, { useState } from 'react'
import { Loading } from './Loading'

export const Modal = ({ isVisible, onClose, data, confirma }) => {
  const [pontoEntrega, setPontoEntrega] = useState('')

  const options = [
    { value: 'P4', label: 'Poratria 4' },
    { value: 'P5', label: 'Portaria 5' },
    { value: 'outro', label: 'Outro' },
  ]

  function handleConfirmation() {
    console.log(data)
    if (pontoEntrega === '') {
      alert('informe o ponto de coleta')
      return false
    }
    const beneficiario = {
      id: data.id,
      PONTO_ENTREGA: pontoEntrega,
      MATRICULA: data.MATRICULA,
      ENTREGADOR: '',
    }

    confirma(beneficiario)
    setPontoEntrega('')
  }

  function handleClose(e) {
    if (e.target.id === 'wrapper') onClose()
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="max-w-xl w-full m-3 flex flex-col">
        <div className="bg-zinc-50 rounded p-4 ">
          <div className="flex justify-between">
            <h1 className="font-bold">Confirmar Entrega</h1>
            <button
              className="text-zinc-500 text-xl text-end outline-none "
              onClick={() => onClose()}
            >
              X
            </button>
          </div>
          <div action="" className="flex flex-col   ">
            <div className="flex flex-col border-b border-t space-y-2 my-3 py-3">
              <div className="flex  flex-col">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor=""
                >
                  Beneficiário
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={data.NOMEBENEFICIARIO}
                  disabled
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor=""
                >
                  Kit
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={data.KIT}
                  disabled
                  type="text"
                />
              </div>

              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="pontoentrega"
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setPontoEntrega(e.target.value)}
                defaultValue=""
              >
                <option value="" selected>
                  Selecione ponto de entrega
                </option>
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleConfirmation}
              className="self-end rounded-md px-6 py-2 bg-green-800 text-zinc-100 font-semibold hover:bg-green-700 transition-all duration-300"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
