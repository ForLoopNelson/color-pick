// const button = document.getElementById('btn')
// const result = document.getElementById('result')

// const colorPicker = async () => {
//   const eyeDropper = new EyeDropper()
//   const {sRGBHex} = await eyeDropper.open()

//   result.innerHTML =sRGBHex
// }

// button.addEventListener('click', colorPicker)

  function previewImage(event) {
      var reader = new FileReader();
      reader.onload = function () {
        var output = document.getElementById('imagePreview');
        output.src = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
function colorPicker() {
document.queryselector('#btn')
  .addEventListener('click', async () => {
    const result = await eyeDropper.open();
  })}