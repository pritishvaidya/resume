import React from 'react';

import "@fontsource/montserrat"
import "@fontsource/open-sans"

import {
  Header,
  Experience,
  Skills,
  Projects,
  Education,
  Footer,
  SEO
} from '../components';
import resume from '../../data/profile';
import Contacts from "../components/contacts";
import Profile from "../components/profile";

import '../main.css';

const Home = () => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        name={resume.fullname}
        role={resume.role}
      />
      <div className="md:flex">
        <div className="pr-10 border-b-2 border-neutral-300 md:flex-0.3 md:border-r-2 md:border-b-0">
          <Contacts contacts={resume.contact}/>
          <Skills data={resume.skills} />
        </div>
        <div className="flex-auto md:pl-10">
          <Profile summary={resume.summary} qualifications={resume.otherQualifications} />
          <Experience data={resume.experience} />
          <Projects data={resume.projects} />
          <Education data={resume.education} />
        </div>
      </div>
        <Footer social={resume.social} />
      </div>
  </main>
);

export default Home;
