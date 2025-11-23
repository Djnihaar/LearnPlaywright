//import { firefox } from "@playwright/test"

{
  if (false) {
    console.log("Raju");
    console.log("Kumar");
  }
}

if (4 === "4") {
  //console.log("Block 1")
} else {
  //console.log("Block 2")
}

//else if()

//if(condition1){
//code block 1
//}
//else if(condition2){
//code block 2
//}else if(condition3){
//code block 3
//}else{}

// if(true){
//    console.log("this is Block 1")
//}
//else if(true){
//  console.log("this is Block")
// }
//else if(true){
//  console.log("this is Block 3")
//}
//else if(true){
//  console.log("this is Block 4")
//}
//else{
//    console.log("this is default block")
//}

//Switch:-

//    switch ("Raju") {
//         case "firefox":{
//             console.log("This is Firefox Browser")
//         }

//             break;
//             case "electron":{
//             console.log("This is electron Browser")
//         }

//             break;
//                 case "bravo":{
//             console.log("This is electron Browser")
//         }

//             break;

//         default: {
//             console.log("This is default Browser")
//         }
//             break;
//     }

//var browserName = "chromium";
switch ("electron") {
  case "firefox":
    {
      console.log("This block is for Firefox");
    }
    break;

  case "electron":
    {
      console.log("This block is for electron");
    }
    break;
  case "bravo":
    {
      console.log("This block is for bravo");
    }
    break;
  case "webkit":
    {
      console.log("This block is for webkit");
    }
    break;

  default:
    // code block
    break;
}
