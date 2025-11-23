//import { faker } from '@faker-js/faker';

// const { faker } = require('@faker-js/faker');

// const username = faker.internet.username()

// console.log(username)

(async () => {
  const { faker } = await import('@faker-js/faker');

  const username = faker.internet.username();
  const email =  faker.internet.email();
  //console.log(username);
  //console.log(faker.internet.email());
  //console.log(faker.internet.password())

  const personname = faker.person.firstName();
  //console.log(personname)
  //console.log(faker.person.jobTitle())
})();

mname = "Raju\nG"
console.log(mname)

randomstr = "kjhjjjhhmmnbjghg\njhjfjjjrythgbfhghg\nkhjhjhjhjh"
console.log(randomstr)
