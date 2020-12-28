import React from 'react';

const Experience = ({ data }) => (
  <section className="border-b-2 border-neutral-300">
    <h1 className="section-header mb-4 md:mb-10 ">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-8" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>
          <p className="py-4">{item.description}</p>
          <ul className='list-disc pl-8 md:pl-10'>
            {item.details.map(qualification => (
              <li className="py-2 leading-relaxed tracking-wide textt-sm md:text-base">{qualification}</li>
            ))}
          </ul>
        </article>
      ))}
  </section>
);

export default Experience;
