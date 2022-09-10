import useBearStore from "src/state/bearsState";

function FancyButton({ children, ...props }) {
  return (
    <button
      type="button"
      className="mx-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      {...props}
    >
      {children}
    </button>
  );
}

export function Bears() {
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);
  const decrease = useBearStore((state) => state.decrease);

  return (
    <div>
      <h1 className="ml-4 text-2xl font-bold tracking-tight text-teal-500">Number of bears: {bears}</h1>
      <FancyButton onClick={increase}>MOAR BEARS</FancyButton>
      <FancyButton onClick={decrease}>LESS BEARS :(</FancyButton>
    </div>
  );
}
