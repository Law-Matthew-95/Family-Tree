
const Matthew = {name: 'Matthew', ['Full-Name']: 'Matthew Law', Age: 25, Parents: [], Siblings: [], childOf}
const James = {name: 'James', ['Full-Name']: 'James Law', Age: 27, Parents: [], Siblings: [], childOf}
const David = {name: 'David', ['Full-Name']: 'David Law', Age: 32, Parents: [], Siblings: [], childOf}
const Chris = {name: 'Chris', ['Full-Name']: 'Chris Law', Age: 34, Parents: [], Siblings: [], childOf}
const Simon = {name: 'Simon', ['Full-Name']: 'Simon Law', Age: 64, Parents: [], Siblings: [], childOf}
const Alison = {name: 'Alison', ['Full-Name']: 'Alison Law', Age: '###', Parents: [], Siblings: [], childOf}
const Fred = {name: 'Fred', ['Full-Name']: 'Fred Heald', Age: '###', Parents: [], Siblings: [], childOf}
const Mary = {name: 'Mary', ['Full-Name']: 'Mary Heald', Age: '###', Parents: [], Siblings: [], childOf}
const Stan = {name: 'Stan', ['Full-Name']: 'Stan Law', Age: '###', Parents: [], Siblings: [], childOf}
const Edna = {name: 'Edna', ['Full-Name']: 'Edna Law', Age: '###', Parents: [], Siblings: [], childOf}

Matthew.Siblings.push(James.name, David.name, Chris.name)
Matthew.Parents.push(Simon.name, Alison.name)
James.Siblings.push(Matthew.name, David.name, Chris.name)
James.Parents.push(Simon.name, Alison.name)
David.Siblings.push(Matthew.name, James.name, Chris.name)
David.Parents.push(Simon.name, Alison.name)
Chris.Siblings.push(Matthew.name, James.name, David.name)
Chris.Parents.push(Simon, Alison)

function childOf(){
    return this.Parents.map(p => p.name).join(' & ')
}

const generation1 = [Matthew, James, David, Chris]
const generation2 = [Alison, Simon]
const generation3 = [Fred, Mary, Edna, Stan]
console.log(Matthew)