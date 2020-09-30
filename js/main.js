// define consts for html elements
const parent_container = document.getElementById('parent_container');
const nav_buttons = document.getElementsByClassName('nav-item');

// define functions to turn data files into html elements

function populate_link_button(link_object, parent_element) {
    let link = document.createElement('a');
    link.setAttribute('href',link_object.href);
    link.setAttribute('target','_blank');
    let button = document.createElement('button');
    link.appendChild(button);
    if (link_object.title) {
        p_title = document.createElement('p');
        p_title.textContent = link_object.title;
        button.appendChild(p_title);
    }
    let image = document.createElement('img');
    image.setAttribute('src',link_object.img_src);
    image.setAttribute('alt',link_object.img_alt);
    button.appendChild(image);
    if (link_object.date) {
        p_date = document.createElement('p');
        p_date.textContent = link_object.title;
        button.appendChild(p_date);
    }
    parent_element.appendChild(link);
}

function populate_article(article_array, parent_element) {
    let article = document.createElement('article');
    for (let p = 0; p < article_array.length; p++) {
        if (typeof article_array[p] === 'string') {
            let paragraph = document.createElement('p');
            paragraph.innerHTML = article_array[p];
            article.appendChild(paragraph);
        } else if (Array.isArray(article_array[p])) {
            let unordered_list = document.createElement('ul');
            for (let i = 0; i < article_array[p].length; i++) {
                let list_item = document.createElement('li');
                list_item.innerHTML = article_array[p][i];
                unordered_list.appendChild(list_item);
            }
            article.appendChild(unordered_list);
        }
    }
    parent_element.appendChild(article);
}

// function to manage the different rules for loading different pages
function load_page(state) {
    parent_container.innerHTML = '';
    switch (state) {
        case 'blog':
            break;
        case 'projects':
            for (let p of projects_data) {
                populate_link_button(p, parent_container);
            }
            break;
        case 'links':
            for (let l of links_data) {
                populate_link_button(l, parent_container);
            }
            break;
        case 'about':
            populate_article(about_data, parent_container);
            break;
    }
}

// set state to 'blog' (default) upon loading
let page_state = 'blog';
load_page(page_state);

// add click eventListeners to nav buttons to trigger page changes
for (let b = 0; b < nav_buttons.length; b++) {
    let state = nav_buttons[b].textContent;
    nav_buttons[b].addEventListener('click', () => load_page(state));
}