import React from 'react'
import Image from 'next/image'
function page() {
  const prod=[
    {
      imageUrl:"/prod/2foldblack.png",
      name:"2 Fold Black",
    },
    {
      imageUrl:"/prod/2foldcolor.png",
      name:"2 Fold Color",
    },{
      imageUrl:"/prod/2foldprint.png",
      name:"2 Fold Print",
    },{
      imageUrl:"/prod/3foldblack.png",
      name:"3 Fold Black",
    },{
     
      imageUrl:"/prod/3foldcolor.png",
      name:"3 Fold Color",
    },{
      imageUrl:"/prod/3foldprint.png",
      name:"3 Fold Print",
    },{
      imageUrl:"/prod/baby.png",
      name:"Baby Umbrella",
    }
  ]
  return (
    <div>
      <h1 className='text-4xl m-4 w-5/6 border-b-2'>Products</h1>
      <div className='flex flex-wrap '>
        {prod.map((product, index) => (
          <div key={index} className='my-5 w-80 h-60  relative mx-auto'>
            <Image src={product.imageUrl} alt={product.name} fill  className='p-5'/>
            <h2 className='text-xl'>{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page