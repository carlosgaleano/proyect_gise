import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProductCard title="Zapatos Gise" price={49.99} />
      <ProductCard title="Zapatos carlos" price={199.99} />
    </main>
  );
}
