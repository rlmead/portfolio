// define consts for html elements
const parent = document.getElementById('parent');
const nav_buttons = document.getElementsByClassName('nav-item');

// functions to turn data files into html elements

// turn article data structures into paragraphs & lists
function populate_article(article_array, parent_element) {
    for (let p = 0; p < article_array.length; p++) {
        if (typeof article_array[p] === 'string') {
            let paragraph = document.createElement('p');
            paragraph.innerHTML = article_array[p];
            parent_element.appendChild(paragraph);
        } else if (Array.isArray(article_array[p])) {
            let unordered_list = document.createElement('ul');
            for (let i = 0; i < article_array[p].length; i++) {
                let list_item = document.createElement('li');
                list_item.innerHTML = article_array[p][i];
                unordered_list.appendChild(list_item);
            }
            parent_element.appendChild(unordered_list);
        }
    }
}

// function to manage the different rules for loading different pages
function load_page(state) {
    console.log(state);
    parent.innerHTML = '';
    switch (state) {
        case 'blog':
            break;
        case 'projects':
            break;
        case 'links':
            break;
        case 'about':
            populate_article(about_data, parent);
            break;
    }
}

// set state to 'blog' (default) upon loading
let page_state = 'blog';
load_page(page_state);

// add click eventListeners to nav buttons to trigger page changes
for (let b = 0; b < nav_buttons.length; b++) {
    let state = nav_buttons[b].textContent;
    nav_buttons[b].addEventListener('click', function () {
        load_page(state)
    });
}