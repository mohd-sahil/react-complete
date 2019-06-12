import React from 'react';

import Person from './Person/Person'

const Persons = (props) => props.persons.map((person, index) => 
            <Person
             click={() => props.clicked(index)}
             name={Person.name} 
             age={Person.age}
             key={Person.id}
             changed={(event) => props.changed(event, Person.id)} />
)
         

export default Persons