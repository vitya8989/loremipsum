let select = document.querySelectorAll('.select');
if (select.length > 0) {
    $('.select').SumoSelect();
}

$('#range_slider').slider({
    min: 0,
    max: 100,
    step: 1,
    value: 75,
    stop: function(event, ui) {
        $("input#range_value").val($('#range_slider').slider("option", "value") + ' %');
        $('.order__form_range_value').text($('#range_slider').slider("option", "value") + ' %');
    },
    slide: function(event, ui){
        $("input#range_value").val($('#range_slider').slider("option", "value") + ' %');
        $('.order__form_range_value').text($('#range_slider').slider("option", "value") + ' %');
    }
})


const onlyRus = document.querySelectorAll('.only-rus');
const onlyEng = document.querySelectorAll('.only-eng');

if (onlyRus.length > 0) {
    for (let i = 0; i < onlyRus.length; i++) {
        onlyRus[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[^а-яёА-ЯЁ ]/g, "");
        });
    }
}
if (onlyEng.length > 0) {
    for (let i = 0; i < onlyEng.length; i++) {
        onlyEng[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[а-яёА-ЯЁ]/g, "");
        });
    }
}

const fileInput = document.getElementById('file');

if (fileInput) {
    fileInput.oninput = () => {
        fileInput.nextElementSibling.textContent = fileInput.files[0].name
    }
}