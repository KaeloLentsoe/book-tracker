document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userName = document.getElementById('userName').value;
    const title = document.getElementById('title').value;
    const totalPages = document.getElementById('totalPages').value;
    const pagesRead = document.getElementById('pagesRead').value;
    const pagesPerDay = document.getElementById('pagesPerDay').value;

    if (userName && title && totalPages && pagesRead && pagesPerDay) {
        addBook(userName, title, totalPages, pagesRead, pagesPerDay);
        document.getElementById('bookForm').reset();
    }
});

function addBook(userName, title, totalPages, pagesRead, pagesPerDay) {
    const bookList = document.getElementById('books');
    const bookItem = document.createElement('li');

    bookItem.innerHTML = `
        <div class="book-details">
            <span><strong>${userName}</strong></span>
            <span>${title} - ${pagesRead}/${totalPages} pages read</span>
            <span>Pages per day: ${pagesPerDay}</span>
        </div>
        <button class="remove-button" onclick="removeBook(this)">Remove</button>
    `;

    bookList.appendChild(bookItem);
}

function removeBook(button) {
    const bookItem = button.parentElement;
    bookItem.remove();
}
