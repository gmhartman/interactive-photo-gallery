baguetteBox.run('.gallery');


let filterSearch, desc, value;
filterSearch = document.querySelector('#search');
desc = document.getElementsByTagName('a');
filterSearch.addEventListener("input", e => {
    value = e.target.value.toUpperCase();
    for (i = 0; i < desc.length; i++) {
        if (!desc[i].dataset.caption.toUpperCase().includes(value)) {
            desc[i].style.display = 'none';
        } else {
            desc[i].style.display = "";
        };
    }
})

