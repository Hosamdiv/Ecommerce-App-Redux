import { useMemo, useState } from "react";
import Input from "./ui/Input";

export const ExpensiveFunction = () => {
  const [val, setVal] = useState("");

  const memoizedEx = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total;
  }, []);

  return (
    <div>
      <Input value={val} onChange={(e) => setVal(e.target.value)} />
      <h3>Total: {memoizedEx}</h3>
    </div>
  );
};
