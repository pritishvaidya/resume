import React from 'react';
import {
  Header,
  Summary,
  Experience,
  Projects,
  Skills,
  List,
  Education,
  Footer,
  SEO
} from '../components';
import resume from '../../data/profile';
import Contacts from "../components/contacts";
import Profile from "../components/profile";

import '../main.css';

import "@fontsource/montserrat"
import "@fontsource/open-sans"

const Home = () => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        name={resume.fullname}
        role={resume.role}
      />
      <div className="flex">
        <div className="flex-0.3 border-r-2 border-neutral-300 pr-10">
          <Contacts contacts={resume.contact}/>
          <Skills data={resume.skills} />
        </div>
        <div className="flex-auto pl-10">
          <Profile summary={resume.summary} qualifications={resume.otherQualifications}/>
          <Experience data={resume.experience}/>
        </div>
      </div>
      {/*<Summary data={resume.summary} />
      <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
        <div className="lg:w-2/3 lg:pr-8">
          {resume.projects && <Projects data={resume.projects} />}
        </div>
        <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
          {resume.skills && <Skills data={resume.skills} />}
          {resume.education && <Education data={resume.education} />}
          {resume.sidebar &&
            resume.sidebar.map(item => (
              <List key={`${item.title}-side`} data={item} />
            ))}
        </div>
      </div>*/}
      <Footer social={resume.social} />
    </div>
  </main>
);

export default Home;
