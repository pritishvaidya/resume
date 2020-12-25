import React from 'react'

function Profile({ summary, qualifications }) {
 return (
   <section className="py-10 mb-10 border-b-2 border-neutral-300">
     <h1 className="section-header mb-10">Profile</h1>
     <p className="text-center tracking-wide leading-relaxed lg:text-left lg:text-lg">
       {summary}
     </p>
     <h1 className="item-header pt-10">Other Qualifications</h1>
     <ul className='list-disc pl-10'>
       {qualifications.map(qualification => (
         <li className="py-2 leading-relaxed tracking-wide">{qualification}</li>
       ))}
     </ul>
   </section>
   )
}

export default Profile