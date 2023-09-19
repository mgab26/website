---
id: from
title: From HTML Table 
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - html
 - html elements
---

In this examples, we load the data from an existing HTML table

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

<CodeBlock children={
`
function () {
  const tableRef = useRef(null);
  const wrapperRef = useRef(null);
  
  useEffect(() => {
    const grid = new Grid({
      from: tableRef.current,
    }).render(wrapperRef.current);
  });
  
  return (
    <>
      <table>
  <caption>Delivery slots:</caption>
  <tr>
    <td></td>
    <th scope="col">Monday</th>
    <th scope="col">Tuesday</th>
    <th scope="col">Wednesday</th>
    <th scope="col">Thursday</th>
    <th scope="col">Friday</th>
  </tr>
  <tr>
    <th scope="row">09:00 – 11:00</th>
    <td>Closed</td>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
  <tr>
    <th scope="row">11:00 – 13:00</th>
    <td>Open</td>
    <td>Open</td>
    <td>Closed</td>
    <td>Closed</td>
    <td>Closed</td>
  </tr>
</table>
      <div ref={wrapperRef} />
    </>
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef }} />

