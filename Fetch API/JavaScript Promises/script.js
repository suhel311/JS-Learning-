//Promises
//.then
let persons = [
    {firstName: " Suhel", lastName: "Rana"},
    {firstName: "Soaib", lastName: "hosen"}
]

function createPerson(person) {
    let prom = new Promise( function(resolve, reject){
        persons.push(person);
        let error = false;

        if (!error) {
            resolve();
        }
        else {
            reject('Error!: Somthing Wrong!');
        }
      
    });
    return prom;
 
}

function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        }); 
        document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({firstName:"Simi", lastName: "Khatun"})
.then(getPerson)

.catch(function(err) {
    console.log(err);
    
});