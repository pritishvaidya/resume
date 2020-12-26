import React from 'react'

function Profile({ summary, qualifications }) {
 return (
   <section className="py-6 mb-6 md:py-10 md:mb-10 border-b-2 border-neutral-300">
     <h1 className="section-header mb-4 md:mb-10">Profile</h1>
     <p className="tracking-wide leading-relaxed text-left text-base md:text-lg">
       {summary}
     </p>
     <h1 className="item-header pt-6 md:pt-10">Other Qualifications</h1>
     <ul className='list-disc pl-8 md:pl-10'>
       {qualifications.map(qualification => (
         <li className="py-2 leading-relaxed tracking-wide textt-sm md:text-base">{qualification}</li>
       ))}
     </ul>
   </section>
   )
}

export default Profile