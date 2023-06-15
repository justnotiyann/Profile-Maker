const paginationList = document.getElementById('pagination-list');
const pageContent = document.getElementById('page-content');
const totalPages = 2; // Jumlah total halaman

function showPage(page) {
    const activeItem = document.querySelector('.pagination-item.active');
    activeItem.classList.remove('active');

    const targetItem = document.querySelector(`.pagination-item[data-page="${page}"]`);
    targetItem.classList.add('active');

    const targetPage = document.querySelector(`.page.page-${page}`);
    const allPages = document.querySelectorAll('.page');

    allPages.forEach(page => {
        page.style.display = 'none';
    });

    targetPage.style.display = 'block';
}

function generatePagination() {
    paginationList.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const listItem = document.createElement('li');
        listItem.classList.add('pagination-item');
        listItem.textContent = i;
        listItem.setAttribute('data-page', i);

        if (i === 1) {
            listItem.classList.add('active');
        }

        listItem.addEventListener('click', function () {
            const selectedPage = parseInt(this.getAttribute('data-page'));
            showPage(selectedPage);
        });

        paginationList.appendChild(listItem);
    }
}

generatePagination();
showPage(1); // Tampilkan halaman pertama saat pertama kali dimuat