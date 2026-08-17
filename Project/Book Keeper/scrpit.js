const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarkContainer = document.getElementById('bookmarks-container');

let bookmarks = [];


function showModal() {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

modalShow.addEventListener('click', showModal);


modalClose.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show-modal');
    }
});

function validate(nameValue, urlValue) {

    const urlRegex =
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

    if (!urlValue.match(urlRegex)) {
        alert('Please provide a valid Web address');
        return false;
    }

    // Create bookmark object
    const bookmark = {
        name: nameValue,
        url: urlValue
    };


    bookmarks.push(bookmark);


    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


    fetchBookmarks();


    bookmarkForm.reset();

    modal.classList.remove('show-modal');

    return true;
}



function buildBookmarks() {


    bookmarkContainer.textContent = '';

    bookmarks.forEach((bookmark, index) => {

        const { name, url } = bookmark;


        const item = document.createElement('div');
        item.classList.add('item');


        const closeIcon = document.createElement('i');
        closeIcon.classList.add('fas', 'fa-times');
        closeIcon.setAttribute('title', 'Delete Bookmark');

        closeIcon.addEventListener('click', () => {
            deleteBookmark(index);
        });


        const linkInfo = document.createElement('div');
        linkInfo.classList.add('name');


        const favicon = document.createElement('img');

        favicon.setAttribute(
            'src',
            `https://www.google.com/s2/favicons?domain=${url}`
        );

        favicon.setAttribute('alt', 'Favicon');

        const link = document.createElement('a');

        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');

        link.textContent = name;

        linkInfo.append(favicon, link);

        item.append(closeIcon, linkInfo);

        bookmarkContainer.appendChild(item);
    });
}
function deleteBookmark(index) {

    bookmarks.splice(index, 1);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    buildBookmarks();
}

function fetchBookmarks() {

    const storedBookmarks = localStorage.getItem('bookmarks');

    if (storedBookmarks) {

        bookmarks = JSON.parse(storedBookmarks);

    } else {

        bookmarks = [
            {
                name: 'Jacinto Design',
                url: 'https://jacinto.design'
            }
        ];

        localStorage.setItem(
            'bookmarks',
            JSON.stringify(bookmarks)
        );
    }

    buildBookmarks();
}

function storeBookmark(e) {

    e.preventDefault();

    const nameValue = websiteNameEl.value.trim();

    let urlValue = websiteUrlEl.value.trim();
    if (!nameValue) {
        alert('Please enter a website name');
        return;
    }
    if (
        !urlValue.startsWith('http://') &&
        !urlValue.startsWith('https://')
    ) {
        urlValue = `https://${urlValue}`;
    }

    validate(nameValue, urlValue);
}
bookmarkForm.addEventListener(
    'submit',
    storeBookmark
);
fetchBookmarks();