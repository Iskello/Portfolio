const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
        menu.classList.add('active')
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__rating-counter'),
    lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});






$('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return; 
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset')
    });
    return false;
});