function populate_menu(i) {
    if (i.parentNode.className == 'show') {
        i.parentNode.className = 'hide';
    }
    else {
        i.parentNode.className = 'show';
    }
}