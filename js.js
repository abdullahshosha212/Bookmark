let bookmarks = [];

        function addBookmark() {
            const urlInput = document.getElementById('urlInput');
            const url = urlInput.value;

            if (url) {
                bookmarks.push(url);
                renderbookmarks();
            }
        }

        function dbookmark(index) {
            bookmarks.splice(index, 1);
            renderbookmarks();
        }

        function deleteallbookmarks() {
            bookmarks = [];
            renderbookmarks();
        }

        function renderbookmarks() {
            const bookmarksDiv = document.getElementById('bookmarks');
            bookmarksDiv.innerHTML = '';

            bookmarks.forEach((bookmark, index) => {
                const bookmarkElement = document.createElement('div');
                bookmarkElement.className = 'bookmark';

                bookmarkElement.innerHTML = `
                    <a href="${bookmark}" target="_blank">${bookmark}</a>
                    <button onclick="dbookmark(${index})">Delete</button>
                `;

                bookmarksDiv.appendChild(bookmarkElement);
            });
        
        }