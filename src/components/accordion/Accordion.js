import React, { useState } from "react";
import { Data } from "./data";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data, setData] = useState(Data);
  return (
    <div>
      <h4>Questions/Answer :-</h4>
      <section>
        {data.map((que, id) => {
          return <MyAccordion que={que} key={id} {...que} />;
        })}
      </section>
    </div>
  );
};

export default Accordion;
