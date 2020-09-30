// define consts for html elements
let parent = document.getElementById('parent');

// set state to 'blog' (default) upon loading
let page_state = 'blog';

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

// trigger state changes when nav buttons are clicked

populate_article(about_data, parent);

