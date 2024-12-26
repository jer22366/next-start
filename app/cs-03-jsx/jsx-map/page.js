'use client';

export default function JsxMapPage() {
  const a1 = [1, 4, 9, 16];

//   const a2 = a1.map((v, i) => {
//     return <li key={i}>{v * 2}</li>;
//   });

  return (
    <>
      <h1>JSX中陣列map渲染</h1>
      <hr />
      {/* <ul>{a2}</ul> */}
      {/* 實際上可以直接寫map在JSX中 */}
      <ul>
        {
            a1.map((v, i) => {
                return <li key={i}>{v * 2}</li>;
        })}
      </ul>
    </>
  );
}
