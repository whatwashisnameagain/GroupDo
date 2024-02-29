import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <Link href="/products">Products</Link>
    </main>
  );
}
