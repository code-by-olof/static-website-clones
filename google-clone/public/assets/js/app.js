const accordions = document.querySelectorAll("dl#accordion dd");

const is_answer_visible = function() {
    const status = this.firstElementChild.classList;
    
    if (status.contains("closed")) {
        status.remove("closed");
        status.add("opened");
    }
    else {
        status.remove("opened");
        status.add("closed");
    }        
}

accordions.forEach(accordion => {
    accordion.addEventListener('click', is_answer_visible, false);
});
