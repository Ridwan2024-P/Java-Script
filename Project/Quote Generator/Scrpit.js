//Get Quotes From API
let apiQuites = [];
async function getQuotes() {
    const apiUrl = 'https://dummyjson.com/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuites = await response.json();
        console.log(apiQuites);
        
    }catch(error){
        //catch Error  Here
    }  
}
getQuotes();