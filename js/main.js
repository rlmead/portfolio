// define consts for html elements
const parent_row = document.getElementById('parent_row');
const nav_buttons = document.getElementsByClassName('nav-item');

// define functions to turn data files into html elements
function populate_blog(blog_object, parent_element) {
    // create a card to click on with all the necessary elements and classes
    let card = document.createElement('div');
    card.classList.add('card');
    let card_body = document.createElement('div');
    card_body.classList.add('card-body');
    let image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src',blog_object.img_src);
    image.setAttribute('alt',blog_object.img_alt);
    card_body.appendChild(image);
    let card_date = document.createElement('h5');
    card_date.classList.add('card-title');
    card_date.textContent = blog_object.date;
    card_body.appendChild(card_date);
    let card_title = document.createElement('p');
    card_title.classList.add('card-text');
    card_title.textContent = blog_object.title;
    card_body.appendChild(card_title);
    card.appendChild(card_body);
    // run populate_article(content, what's the parent??? parent_row?)
    // append everything to everything
    // add event listener to blog buttons to change next sibling's class upon click
    parent_element.appendChild(card);
}

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
    parent_row.innerHTML = '';
    for (let b of nav_buttons) {
        b.classList.remove('active');
    };
    document.getElementById(state).classList.add('active');
    switch (state) {
        case 'projects':
            for (let p of projects_data) {
                populate_link_button(p, parent_row);
            }
            break;
        case 'links':
            for (let l of links_data) {
                populate_link_button(l, parent_row);
            }
            break;
        case 'about':
            populate_article(about_data, parent_row);
            break;
        default:
            for (let b of blog_data) {
                let column = document.createElement('div');
                column.setAttribute('class','col-md-4');
                populate_blog(b, column);
                parent_row.appendChild(column);
            }
            break;
        }
}

// add click eventListeners to nav buttons to trigger page changes
for (let b = 0; b < nav_buttons.length; b++) {
    let state = nav_buttons[b].textContent;
    nav_buttons[b].id = state;
    nav_buttons[b].addEventListener('click', () => load_page(state));
}

// set state to 'blog' (default) upon loading
load_page('blog');
