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
