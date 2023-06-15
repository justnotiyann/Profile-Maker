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



