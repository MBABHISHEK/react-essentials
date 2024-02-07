import React from 'react'
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data';
export default function CoreConcepts() {
  return (
    <div>
       <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=><CoreConcept {...conceptItem}/>)}

          </ul>
        </section>
    </div>
  )
}
