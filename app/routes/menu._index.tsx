import React from 'react'
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import jsonData from "~/json/data.json";
import { useLoaderData, redirect } from '@remix-run/react';
import MenuItem from '~/components/MenuItem';


export const meta: MetaFunction = () => {
  return [
    { title: "Menu - Tutti Fruiti Prague" },
    { name: "description", content: "menu of tutti fruiti prague!" },
  ];
};
export const loader = async (args: LoaderFunctionArgs) => {

  return json({ data: jsonData })
};

const MenuIndex = () => {
  const { data } = useLoaderData<typeof loader>()
  console.log({ data, });

  return (
    <div className='flex flex-col gap-8'>
      {/*<h1 className="text-6xl font-[bayshore]">
        Menu
      </h1>*/}
      {data.menu.map(category => (
        <section key={category.id} className='py-6 flex flex-col items-center'>
          <div className='flex w-full flex-nowrap items-baseline justify-center gap-6'>
            <span className='text-nowrap'> - - - - - </span>
            <h2 className="text-5xl text-center mb-4 font-[bayshore] text-indigo-900">
              {category.category_name}
            </h2>
            <span className='text-nowrap'> - - - - - </span>
          </div>
          <img src={`assets/category_images/${category.image}`} alt={category.category_name} className='w-full max-w-[600px]' />
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between '>
            {/*divide-y divide-solid divide-slate-200*/}
            {category.items.map(item => (
              <div key={item.id} className='pb-8 flex flex-col md:flex-row'>

                <MenuItem item={item} />
              </div>
            ))}
          </div>
        </section>

      ))}

    </div>

  )
}

export default MenuIndex