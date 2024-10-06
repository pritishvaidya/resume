import React from 'react';

const Projects = ({ data }) => {
  return (
    <section className="pt-10 border-b-2 border-neutral-300 py-12 mx-auto font-mono tracking-wide leading-tight">
      <h1 className="section-header">Projects</h1>
      {data &&
        data.map((item, i) => (
          <article className="my-8" key={`${item.title}-${i}`}>
            <div className="flex flex-row flex-wrap items-center justify-between">
              <div>
                <h2 className="item-header">{item.title}</h2>
                <h3 className="item-sub">
                  {item.company} | {item.start} - {item.end || 'PRESENT'}
                </h3>
                <div className="flex flex-row flex-wrap items-center pt-4">
                  {Array.isArray(item.subskills) && item.subskills.map((subskill, i) => (
                    <span key={`${subskill.name}-${i}`} className="tag">
                  {subskill.name}
                </span>
                  ))}
                </div>
              </div>
              {item.link && <div className="py-4">
                <a
                  className="btn btn-secondary py-3 px-6"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </div>}
            </div>

            <p className="py-4">{item.description}</p>
            <ul className="list-disc pl-8 md:pl-10">
              {item.details.map(qualification => (
                <li className="py-2 leading-relaxed tracking-wide textt-sm md:text-base">{qualification}</li>
              ))}
            </ul>
          </article>
        ))}

    </section>
  );
}

export default Projects;
