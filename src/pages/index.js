import React from 'react';

import "@fontsource/montserrat"
import "@fontsource/open-sans"

import {
  Header,
  Experience,
  Skills,
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
      <div className="flex">
        <div className="flex-0.3 border-r-2 border-neutral-300 pr-10">
          <Contacts contacts={resume.contact}/>
          <Skills data={resume.skills} />
        </div>
        <div className="flex-auto pl-10">
          <Profile summary={resume.summary} qualifications={resume.otherQualifications}/>
          <Experience data={resume.experience}/>
          <Education data={resume.education} />
        </div>
      </div>
      <Footer social={resume.social} />
    </div>
  </main>
);

export default Home;
