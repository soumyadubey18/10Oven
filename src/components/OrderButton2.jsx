import React from 'react'

function OrderButton2({title='Order Now'}) {
  return (
    <div>
        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  rounded-lg text-base px-3 py-4 font-semibold mx-5  text-center  mb-8 block sm:block md:block lg:hidden">{title}</button>
    </div>
  )
}

export default OrderButton2
