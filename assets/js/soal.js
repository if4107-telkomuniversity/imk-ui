let navExpanded = false;
$('#question-nav-expand').click(() => {
    if (navExpanded) {
        $('#question-nav').css('right', '-20vw');
        navExpanded = false;
    } else {
        $('#question-nav').css('right', '-.5vw');
        navExpanded = true;
    }
});