import React from 'react'

type Props = {
  item: {
    name: string;
    id: string;
    nember: string;
    image: string;
    price: string;
  }
}

const MenuItem = ({ item }: Props) => {
  return (
    <figure className="flex flex-col md:flex-row rounded-xl gap-2">
      < img className=' md:w-24 md:h-24 w-full rounded-xl' src={`assets/items_images/${item.image}`
      } alt={item.name} />
      <div>

        <p className='flex justify-between px-3'>
          <span className='text-xl text-green-500 font-bold'>
            {item.price} <span className='font-normal'>CZK</span>
          </span>
          <span className='text-xl text-indigo-500'>
            #{item.nember}
          </span>
        </p>
        <p className='text-lg font-light px-3 text-indigo-950'>
          {item.name}
        </p>
      </div>
    </figure >
  )
}

export default MenuItem