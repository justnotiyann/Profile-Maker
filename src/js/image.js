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