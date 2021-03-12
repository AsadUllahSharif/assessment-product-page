var loadFile = function (event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src) // free memory
    }
  };


  function showPreview() {
    var showPreview = document.getElementById("preview-holder");
    showPreview.classList.add("animation-time");
    showPreview.classList.add("visible");
  }

  function hidePreview() {
    var hidePreview = document.getElementById("preview-holder");
    hidePreview.classList.remove("visible");
  }

  function replaceMessage(inputValue, id) {
    document.getElementById(id).innerHTML = inputValue;
  }