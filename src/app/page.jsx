import ProductCard from '@/components/ProductCard';
import ExampleForProduct from '@/components/ExampleForProduct';

export default function Home() {
  return (
    <>
    <h1> productos de ecommerce </h1>
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProductCard title="Zapatos Gise" price={49.99} />
      <ProductCard title="Zapatos carlos" price={199.99} />
      <ExampleForProduct />
      
    </main>
    </>
    
  );
}
