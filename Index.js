function searchHeaders() {
    const query = document.getElementById('searchbar').value.toLowerCase();
    const headers = document.querySelectorAll('h4,.icon');
    headers.forEach(header => {
        const text = header.textContent.toLowerCase();
        if (query) {
            if (text.includes(query)) {
                header.style.backgroundColor = 'yellow';
                header.removeAttribute("hidden");
            } else {
                header.style.backgroundColor = '';
                header.setAttribute("hidden", true);
            }
        } else {
            // When the query is empty, show all headers and remove any highlighting
            header.style.backgroundColor = '';
            header.removeAttribute("hidden");
        }
    });
}