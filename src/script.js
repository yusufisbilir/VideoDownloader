const btnConvert = document.querySelector('.btnDownload');
const inputUrl = document.querySelector('.inputUrl');

btnConvert.addEventListener('click',()=>{
    console.log(`URL: ${inputUrl.value}`);
    sendUrl(inputUrl.value);
});

function sendUrl(URL){
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
};