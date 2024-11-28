fetch('/static/book_manager/books.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const tableBody = document.getElementById('book-table-body');
        data.books.forEach(book => {
            const row = `
                <tr>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.publication_year}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error('Error loading JSON:', error));

    const totalBooks = data.books.length;
    bookCountElement.textContent = `Total books: ${totalBooks}`;
})
.catch(error => console.error('Error loading JSON:', error));