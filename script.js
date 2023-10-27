const person ={firstName:"Arun",age:20,city:"Bangalore"};
console.log(person);
//let personValue =[person.firstName,person.age,person.city]

const firstNameValue=document.querySelector("#firstNameValue")
firstNameValue.textContent=person.firstName;
const ageValue=document.querySelector("#ageValue")
ageValue.textContent=person.age;
const cityValue=document.querySelector("#cityValue")
cityValue.textContent=person.city;

function addMail(){
    const mailId= document.getElementById("object_mail").value;
    const wrap = document.getElementById("wrapper");
    //console.log(mailId)
    person.email=mailId;
    console.log(person.email = mailId)
    document.getElementById("object_mail").value = "";
    wrap.innerHTML += "<div class='obj-item'>Email: <div id='emailValue' class='obj-value'>"+ person.email +"</div></div>"
}
