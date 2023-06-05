const { createWorker, createScheduler } = Tesseract;
const scheduler = createScheduler();
const image = document.querySelector('.imgPreview');
const processButton = document.querySelector('.processButton');
const resultText = document.querySelector('.resultText');
const languageSelect = document.querySelector('.languageSelect');

processButton.addEventListener('click', async () => {
    const lang = languageSelect.value;
    const worker = await createWorker();
    await worker.load();
    await worker.loadLanguage(lang);
    await worker.initialize(lang);
    scheduler.addWorker(worker);

    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 360;
    canvas.getContext('2d').drawImage(image, 0, 0, 640, 360);
    const {
        data: { text },
    } = await scheduler.addJob('recognize', canvas);
    
    resultText.textContent = text;
});
