import React from 'react'
import Contact from "./contact";

function Contacts({ contacts }) {
  return (
    <section className="pt-10">
      <h1 className="section-header mb-5 md:mb-10">Details</h1>
      {Object.keys(contacts).map(contact => (
        <Contact field={contact} value={contacts[contact]}/>
      ))}
    </section>
  )
}

export default Contacts