import React from 'react'
import styles from '../cart.module.css'
import ProductCard from '@/components/ProductCart';

const dummyProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in commodo ullamcorper.'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 15,
    description: 'Fusce mattis tempor orci, ut tincidunt nisl efficitur quis. Duis tincidunt commodo nulla, ac consequat libero volutpat sit amet.'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 20,
    description: 'Integer et hendrerit enim. Mauris id lacus in ligula ultricies hendrerit. Sed vel nisl eu urna semper ullamcorper.'
  },
  {
    id: 4,
    name: 'Product 4',
    price: 25,
    description: 'Vivamus consequat justo sit amet mauris feugiat, nec sollicitudin velit bibendum. Sed vehicula mi quis arcu elementum dignissim.'
  },
  {
    id: 5,
    name: 'Product 5',
    price: 30,
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque volutpat malesuada erat, at tempor nunc aliquam id.'
  },
  {
    id: 6,
    name: 'Product 6',
    price: 35,
    description: 'Donec in libero eu erat fermentum venenatis. Aliquam lacinia varius ante nec bibendum. Maecenas tristique felis nec purus feugiat, nec faucibus nisl viverra.'
  }
];

const getTotalPrice = (products: { price: number }[]) => {
  return products.reduce((total, product) => total + product.price, 0);
};

const cart = () => {

  const totalPrice = getTotalPrice(dummyProducts);

  return (
    <>
      <div className="ml-4 mr-4 md:ml-20 md:mr-20">
        <h1 className={styles.heading} >Cart has {dummyProducts.length} items</h1>
        <div className=' md:flex'>
          <section className='md:w-2/3  justify-center'>
            {
              dummyProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            }

          </section>
          <section className=' md:w-1/3 bg-sky-100'>
            <h1 className={styles.heading}>Cart Summary</h1>
            <p className='text-center mt-2'>Total|Checkout|Payment</p>
            <h2 className='text-center text-2xl mt-2'>Total amount</h2>
            <h2 className='text-center text-2xl mt-2 text-orange-600'>{totalPrice}/-</h2>
            <hr className='bg-black' />
            <h2 className='text-center text-2xl mt-2'>Current Address:</h2>
            <p className='text-center mt-2'>456 Park Avenue, New York, NY 10022</p>
            <button className="mt-3 block mx-auto rounded-lg bg-sky-500 hover:bg-sky-700 p-2">
              Change Address
            </button>
            <hr className='mt-3 bg-black' />
            <button className="mt-3 block mx-auto rounded-lg bg-orange-500 hover:bg-orange-700 p-2">
              Make Payment
            </button>
          </section>
        </div>
      </div>
    </>
  )
}

export default cart