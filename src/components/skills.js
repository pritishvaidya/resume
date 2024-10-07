import React from 'react';
import Progress from './progress';
import ListItem from './list_item';

const Skills = ({ data }) => (
  <section>
    <h1 className="section-header">Skills</h1>
    {data.map(skill => (
      <div key={skill.title} className="my-4 md:my-8">
        <h2 className={`item-header font-semibold text-base mb-2 ${skill.type === 'percent' ? 'md:text-lg': 'md:text-base'}`}>
          {skill.title}
        </h2>
        {skill.subskills.map(subskill => (
          <span key={subskill.name}>
            {skill.type === 'percent' && (
              <Progress name={subskill.name} percent={subskill.percent} />
            )}
            {skill.type === 'tag' && (
              <span key={subskill.name} className="tag">
                {subskill.name}
              </span>
            )}
            {skill.type === 'list' && (
              <ListItem key={subskill.name} text={subskill.name} />
            )}
          </span>
        ))}
      </div>
    ))}
  </section>
);

export default Skills;
