const person ={firstName:"Arun",age:20,city:"Bangalore"};
console.log(person);
//let personValue =[person.firstName,person.age,person.city]
const personValue = [
    `FirstName: "${person.firstName}"`, 
    `Age: ${person.age}`, 
    `City: "${person.city}"`
];
console.log(personValue);
const resultValue=document.querySelector("#object_values")
resultValue.textContent=personValue.join('  ');

function addMail(){
    const mailId= document.getElementById("object_mail").value;
    //console.log(mailId)
    let personMail= `Email:"${mailId}"`;
    let emailValue=personValue.push(personMail);
   //console.log(personMail)
    //console.log(emailValue)
document.getElementById("object_mail").value = "";
   let finalValue=document.querySelector("#object_values")
   finalValue.textContent=personValue; 
}
function deleteCity() {
    //if (person && person.city) {
      let deletedcity=delete person.city;
        console.log(person); 
    }
    let finalValue=document.querySelector("#object_values")
    finalValue.textContent=personValue; 
    
//}
function ageProperty(obj, propertyName) {
const hasAgeProperty = ageProperty(person, "age");
console.log(hasAgeProperty); 
}