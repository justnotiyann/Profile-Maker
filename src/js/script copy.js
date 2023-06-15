// Form
const getSetterInput = [
    {
        get: "setNama",
        set: "setNamaText",
        defaultValue: 'Joeylene Rivera'
    },
    {
        get: "setProfesi",
        set: "setProfesiText",
        defaultValue: 'Web Developer'
    },
    {
        get: "setDeskripsi",
        set: "setDeskripsiText",
        defaultValue: 'A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma'
    },
    {
        get: "setEmail",
        set: "setEmailText",
        defaultValue: 'joeylenerivera@gmail.com'
    },
]

getSetterInput.forEach(data => {
    const { get, set, defaultValue } = data

    const getElement = document.getElementById(get)
    const setElement = document.getElementById(set)

    getElement.addEventListener('input', (event) => {
        if (getElement.value === '') {
            setElement.textContent = defaultValue
        } else {
            setElement.textContent = getElement.value;
        }
    });

    if (getElement.value === '') {
        setElement.textContent = defaultValue;
    } else {
        setElement.textContent = getElement.value;
    }

})

// end Form


// icon
// get = input
// set = icon

const getSetIcon = [
    {
        get: "setAkunGithub",
        set: "setLinkGithubIcon"
    },
    {
        get: "setAkunTwitter",
        set: "setLinkTwitter"
    },
    {
        get: "setAkunInstagram",
        set: "setLinkInstagram"
    },
    {
        get: "setAkunLinkedin",
        set: "setLinkLinkedin"
    },
    {
        get: "setAkunDev",
        set: "setLinkDev"
    },
    {
        get: "setAkunDrrible",
        set: "setLinkDrrible"
    },
]

getSetIcon.forEach(datas => {
    const { get, set } = datas

    const getElement = document.getElementById(get)
    const setElement = document.getElementById(set)

    getElement.addEventListener('input', function () {
        if (getElement.value !== '') {
            setElement.classList.add('p-1', "rounded-full", "border-4", 'border-purple-600')
        } else {
            setElement.classList.remove('p-1', "rounded-full", "border-4", 'border-purple-600')
        }
    })

})
// end icon

// image
const setPhotoProfile = document.getElementById('setPhotoProfile');
const setImage = document.getElementById('setImage');

setPhotoProfile.addEventListener('change', function () {
    const file = setPhotoProfile.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        setImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
});
// end image


// pagination
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
// end pagination