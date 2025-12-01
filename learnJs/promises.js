

// p = new Promise( (resolve, reject) => {
//     let x = 8

const { error } = require("console")

//     if(x==2){
//         resolve(
//             {
//                 firstname : "Nihar",
//                 lastname: "P"

//             }

//         );
//     }
//     else {
//         reject("fail");
//     }
// });
// console.log(p)

//p.then((message) => console.log(message.firstname,message.lastname)) //resolve
//.catch( message => console.log(message)) //reject
//p.then(trname => {
  //  console.log(trname)
//})
//.catch( message => console.log(message))
//promise is a object

p2 = Promise.resolve({
    firstname : "Raju",
    lastname: "G"
})

p2.then((message) => console.log(message))
p3 = Promise.reject("Ravi")

p3.catch((word) => console.log(word));

