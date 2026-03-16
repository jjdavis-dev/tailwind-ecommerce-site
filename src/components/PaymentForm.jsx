export const PaymentForm = () => {
  return (
    <section className="p-6">
      <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Payment Form</h1>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">Cardholder Name</label>
            <input
              type="text"
              placeholder="John Davis"
              className="w-full rounded border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full rounded border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block font-medium">Expiration Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full rounded border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full rounded border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button className="w-full rounded bg-blue-600 py-2 text-white shadow">
            Pay Now
          </button>
        </form>
      </div>
    </section>
  );
};
