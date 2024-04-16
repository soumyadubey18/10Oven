import React from 'react'

function Button({tittle='Order Now'}) {
  return (
    <div>
        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800   font-medium rounded-lg text-lg px-6 py-2  text-center me-2 mb-2">{tittle}</button>
    </div>
  )
}

export default Button