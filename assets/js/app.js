$('document').ready(() => showModules());
$('#sidebar-practicum').click(() => showModules());
$('#sidebar-score').click(() => showScore());
$('#sidebar-assistant').click(() => showAssistant());
const showModules = () => {
  $('#content').load('component/modules.html');
  $('.custom-select')[0].removeAttribute('disabled');
  $('#sidebar-practicum i').addClass('sidebar-active');
  $('#sidebar-score i').removeClass('sidebar-active');
  $('#sidebar-assistant i').removeClass('sidebar-active');
};
const showScore = () => {
  // $('#content').load('component/score.html');
  fetch('component/score.html', response => {
    console.log(response);
    $('#content')[0].innerHTML = response;
    renderScore();
  })
  $('.custom-select')[0].removeAttribute('disabled');
  $('#sidebar-practicum i').removeClass('sidebar-active');
  $('#sidebar-score i').addClass('sidebar-active');
  $('#sidebar-assistant i').removeClass('sidebar-active');
};
const showAssistant = () => {
  $('#content').load('component/assistant.html');
  $('.custom-select')[0].removeAttribute('disabled');
  $('#sidebar-practicum i').removeClass('sidebar-active');
  $('#sidebar-score i').removeClass('sidebar-active');
  $('#sidebar-assistant i').addClass('sidebar-active');
};
const loadQuestion = isOption => {
  $('#content').load(`component/${ isOption ? 'options' : 'files'}.html`)
  $('.custom-select')[0].setAttribute('disabled', '');
  $('#sidebar-practicum i').addClass('sidebar-active');
  $('#sidebar-score i').removeClass('sidebar-active');
  $('#sidebar-assistant i').removeClass('sidebar-active');
  return false;
};

const showUploadForm = () => {
  fetch('component/upload.html', response => {
    $('#content')[0].innerHTML = response;
    ekUpload();
  })
  // $('#content').load('component/upload.html')
  // showUploadArea();
};

const promptOptionFinish = () => {
  Swal.fire({
    text: "Apakah Anda yakin akan mengumpulkannya?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#184254',
    cancelButtonColor: '#BEBEBE',
    confirmButtonText: 'Ya, kumpul',
    cancelButtonText: 'Belum'
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: 'Selesai',
        icon: 'success'
      }).then((result) => showModules());
    }
  });
};

const toggleOption = () => {
  $.each($('.ans-option'), (idx, elem) => {
    if (elem.checked) {
      console.log(elem.nextSibling);
    } else {
      console.log(elem.nextSibling);
    }
  });
};
const fetch = (url, callback) => {
  $.get({
    url: url,
    method: 'GET'
  }).then(callback);
}
const toggleModule = (number) => {
  let children = $(`.module-${number}`);
  $.each($('.card'), (idx, elem) => {
    if (idx % 2) {
      elem.setAttribute('hidden', '');
    } else {
      elem.removeAttribute('hidden');
    }
  });
  if (children[0].hasAttribute('hidden')) {
    children[0].removeAttribute('hidden');
  } else {
    children[0].setAttribute('hidden', '');
    children[1].removeAttribute('hidden');
  }
};