import React from 'react'

function QuickLink({link="ht",placeholder=""}) {
  return (
    <div className=' bg-neutral-300 max-w-auto px-2 py-1 m-2 rounded-md'>
        <a className="font-normal text-black "href={link}>{placeholder}</a>
    </div>
  )
}

export default QuickLink