class ApiZipCode
{
    constructor(cars)
    {
        this.zipCode = code;
 this.url = './zipcodes.json'
    }

    fetchData() {
        fetch(this.url)
        .then((response) => {
            return response.json(); // conversion du json récpetionné en objet JS
        })
      
     
         
    }
    
}