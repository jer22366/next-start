'use client';

export default function Cs04StatePage() {
  const oa = { a: 1, b: 2 };
  // 考貝語法(展開運算子) == 淺拷貝(shallow) copy/clone
  const ob = { ...oa };

  // console.log('oa', oa);
  // console.log('ob', ob);

  // oa.b = 9;

  // console.log('oa', oa);
  // console.log('ob', ob);

  const oc = { a: 1, b: { x: 2 } };
  // const od = { ...oc };
  // 深拷貝語法
  // const od = JSON.parse(JSON.stringify(oc));
  const od = structuredClone(oc)

 
  console.log('oc', oc);
  console.log('od', od);

  oc.b.x = 999;

  console.log('oc', oc);
  console.log('od', od);
  return (
    <>
      <div>Cs04State Page</div>
    </>
  );
}
