import { onMount, createMemo, createSignal } from "solid-js";

function App(props) {
  let headerRef;
  const [someNumbers, setSomeNumbers] = createSignal([]);

  const computeSquareNumbers = (number) => number.map((n) => n * n);
  const squareNumbers = createMemo(() => computeSquareNumbers(someNumbers()));

  onMount(() => {
    headerRef.style.backgroundColor = "red";
    setTimeout(() => {
      setSomeNumbers([1, 2, 3]);
    }, 3000);
  });

  return (
    <div ref={headerRef}>
      {props.value}
      <div>{someNumbers().join(",")}</div>
      <div>{squareNumbers().join(",")}</div>
    </div>
  );
}

export default App;
