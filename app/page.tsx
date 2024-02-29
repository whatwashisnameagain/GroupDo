import Link from "next/link";
import ProductCard from "./components/AddToCart";

export default function Home() {
  return (
    <main>
      <Link href="/products">Products</Link>
      <Link href="/users">Users</Link>
    </main>
  );
}
