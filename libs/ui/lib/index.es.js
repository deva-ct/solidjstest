import { insert, template } from 'solid-js/web';
import { createSignal, createMemo, onMount } from 'solid-js';

const _tmpl$ = /*#__PURE__*/template(`<div><div></div><div></div></div>`, 6);

function App(props) {
  let headerRef;
  const [someNumbers, setSomeNumbers] = createSignal([]);

  const computeSquareNumbers = number => number.map(n => n * n);

  const squareNumbers = createMemo(() => computeSquareNumbers(someNumbers()));
  onMount(() => {
    headerRef.style.backgroundColor = "red";
    setTimeout(() => {
      setSomeNumbers([1, 2, 3]);
    }, 3000);
  });
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling;

    const _ref$ = headerRef;
    typeof _ref$ === "function" ? _ref$(_el$) : headerRef = _el$;

    insert(_el$, () => props.value, _el$2);

    insert(_el$2, () => someNumbers().join(","));

    insert(_el$3, () => squareNumbers().join(","));

    return _el$;
  })();
}

export { App as LibApp };
