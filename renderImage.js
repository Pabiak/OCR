const chooseFile = document.getElementById('chooseFile');
const imgPreview = document.querySelector('.imgPreview');

chooseFile.addEventListener('change', () => {
    const files = chooseFile.files[0];
    if (!files) return;
    
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener('load', () => {
        imgPreview.src = fileReader.result;
    });
});
