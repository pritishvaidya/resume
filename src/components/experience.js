import React from 'react';

const Experience = ({ data }) => (
  <section className="border-b-2 border-neutral-300">
    <h1 className="section-header mb-10 ">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-8" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>
          <p className="py-6">{item.description}</p>
        </article>
      ))}
  </section>
);

export default Experience;
