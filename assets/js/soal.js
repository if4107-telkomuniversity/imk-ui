const toggleQuestionNav = () => {
    if (navExpanded) {
        $('#question-nav').css('right', '-20vw');
        navExpanded = false;
    } else {
        $('#question-nav').css('right', '-.5vw');
        navExpanded = true;
    }
};
let navExpanded = false;