
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  interface ProductCardProps {
    product: Product;
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <>
       <div className='md:flex p-4 box-border border-solid border-2 border-sky-200 bg-zinc-200' >
              <div className=' w-full md:m-auto lg:w-1/3'>
                <img className=' m-auto text-center md:text-left' src={`/m${product.id}.png`}/></div>
              <div className='md:w-2/3'> 
                <h2 className=' text-center md:text-left ml-4 md: text-2xl md:text-3xl '>{product.name}</h2>
                <h3 className=' text-center md:text-left mt-4 ml-4 md:text-2xl'><span className=' text-green-600'>Price:</span> {product.price} Only </h3>
                <h3 className=' text-center md:text-left mt-4 ml-4 md:text-2xl'>Description </h3>
                <p className=' text-center md:text-left mt-4 ml-4'>{product.description}</p>
              </div>
            </div>
      </>
    );
  };
  
  export default ProductCard;
  