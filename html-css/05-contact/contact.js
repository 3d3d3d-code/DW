/**
 * VALIDATION DU FORMULAIRE DE CONTACT 
 * 
 * Nom          : 3 caractères minimum, 30 au maximum. Lettres et espaces uniquement.
 * Email        : format email valide
 * Téléphone    : format 10 chiffres. Le premier chiffre est obligatoirement un 0
 * Message      : au moins 20 caractères, validation complète en backend.
 * 
 * Consignes : 
 * 1) Adapter les attributs "pattern" du formulaire (contact.html)
 * 2) Ajouter les évènements nécessaires pour valider chaque champ "en temps réel" (onkeyup, onkeypress...)
 * 3) Compléter le code de l'évènement "submit" se trouvant en bas de ce fichier.
 * 4) Ajouter les règles CSS que vous jugerez utilies dans les classes .success et .error du fichier contact.css
 * 5) (Bonus) Valider le formulaire coté backend dans le fichier "contact_validation.php"
 */



/**
 * TODO : Ajouter ci-dessous les évènements pour valider individuellement les champs du formulaire (onkeyup, onkeypress...)
 */

/* votre code ici */

//evenements rajouté pour valider chaque champs du formulaire
var inputName =document.getElementById("contactaname");
inputName.addEventListener('keyup' , (Event)=>{

    let validationName = document.getElementById('validationName')

    if(!Event.target.value.match(Event.target.pattern)) { // si la valeur du champ ne correspond pas à sa regex (définie dans pattern)
        validationName.innerHTML = '&#10060;'; // croix rouge 
        validationName.classList.remove("success");
    } 
    else {
        validationName.innerHTML = '&check;'; // check  donc ok
        validationName.classList.add("success");

    }
});
// 
var inputEmail =document.getElementById("contactPassword");
inputName.addEventListener('keyup' , (Event)=>{

    let validationName = document.getElementById('validationEmail')

    if(!Event.target.value.match(Event.target.pattern)) { 
      
        validationName.innerHTML = '&#10060;'; 
        validationName.classList.remove("success");
    } 
    else {
        validationName.innerHTML = '&check;'; 
        validationName.classList.add("success");

    }
});






/**
 * TODO : Compléter le code de l'évènement ci-dessous pour valider tous les champs du formulaire lors de sa soumission (submit)
 */

// sélection du formulaire
const contactForm = document.getElementById('contactForm');

// évènement déclenché à la soumission du formulaire (submit)
contactSubmit.addEventListener('submit', (event) => {

    console.log(event);

     /**
      * TODO: Validation des 4 champs du formulaire. 
      * Si erreur, ajouter le message d'erreur dans l'élément #validationResult et affecter la classe .error à cet élément".
      * Si OK, ajouter le message "formulaire valide" dans l'élément #validationResult et affecter la classe .success à cet élément
      * */

      /* votre code ici */

});
