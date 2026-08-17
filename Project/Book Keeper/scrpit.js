


const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarkContainer = document.getElementById('bookmarks-container');


let bookmarks = [];
// show modal
function showModal(){
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

modalShow.addEventListener('click' , showModal);
modalClose.addEventListener('click', ()=>modal.classList.remove('show-modal'));
window.addEventListener('click',(e)=>(e.target === modal ? modal.classList.remove('show-modal') : false));


function validate(nameValue, urlValue) {

    const urlRegex =
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

    if (!urlValue.match(urlRegex)) {
        alert('Please provide a valid Web address');
        return false;
    }
    const bookmark ={
        name : nameValue,
        url : urlValue,
    };
    bookmarks.push(bookmark);
    console.log(JSON.stringify(bookmarks));
    localStorage.setItem('boolmarks',JSON.stringify(bookmarks))
    fetchBookmarks();
    bookmarkForm.reset();
    websiteNameEl.focus();

    return true;
}
function fetchBookmarks(){
    if(localStorage.getItem(bookmarks)){
        bookmarks = JSON.parse(localStorage/getItem('booknarks'));
    }
    else{
        bookmarks = [
            {
                 name:'jacinto Design',
                 url:'https://jacinto.design',
            },
           

        ];
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    console.log(bookmarks)

    
    
}
function storeBookmark(e){
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if(!urlValue.includes('http://','https://')){
        urlValue = `https://${urlValue}`;
    }
    console.log(nameValue,urlValue)
    validate(nameValue , urlValue);
}

bookmarkForm.addEventListener('submit',storeBookmark)
fetchBookmarks();