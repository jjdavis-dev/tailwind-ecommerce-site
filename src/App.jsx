import "./index.css";
import { Navbar } from "./components/Navbar";
import { ProductGrid } from "./components/ProductGrid";
import { PaymentForm } from "./components/PaymentForm";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="p-10 text-center">
        <h1 className="mb-4 text-3xl font-bold">Welcome</h1>

        <p className="text-gray-600">
          Welcome to our store. Browse our products and checkout when ready.
        </p>
      </div>

      <ProductGrid />
      <PaymentForm />
    </div>
  );
}
