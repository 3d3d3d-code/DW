
function valideVillle()
{
return document.getElementById('choix-ville').value.match(/^[A-Za-z]+$/) ? true :false;


}


document.getElementById('zipcodes').addEventListener('keyup', valideVille);

const villeForm = Document.getElementById('villeForm');

villeForm.addEventListener('submit',(event)=>{
    event.prevntDefault();
    console.log(event);
if(valideVille()){}



let data = new FormDataList(villeForm);


let xhr = new XMLHttpRequest();

xhr.open('POST', 'zipcodes.json');

xhr.addEventListener('load', () => {

});

xhr.send();

let myPromise = fetch(
    'zipcode.json',
    {
        method: "post",
        body: data 
    }
);

myPromise.then((response) => {
    if(response.ok) {
        console.log(response);
        return response.text();
    }
    else {
        console.log("Erreur " + response.status);
    }
})
.then((text) => {
    console.log(text);
});

console.log(data);

 
});
