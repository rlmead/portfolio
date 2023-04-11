import PuzzleSliderPic from "../img/web-projects/puzzle-slider.png"
import ToDontPic from "../img/web-projects/to-dont.png"
import IdeaNetworkPic from "../img/web-projects/idea-network.png";
import GFSnacksPic from "../img/web-projects/gluten-free-snacks.png";
import LexAutocompletePic from "../img/web-projects/lex-autocomplete.png";
import LCCRTallyPic from "../img/web-projects/lccr-tally.png"

const projectsData = [
    {
        "title": "pay-as-you-wish calculator",
        "app_link": "https://lexcreativereuse.web.app",
        "code_link": "https://github.com/rlmead/lccr",
        "date": "february 2023",
        "img_src": LCCRTallyPic,
        "img_alt": "a screenshot of a section of a calculator web app designed for a shop that uses a sliding scale pricing system with color-themed categories.",
        "about": [
            "in 2022, a creative reuse shop opened in my neighborhood, and i became a regular volunteer there. this shop sells secondhand arts and crafts supplies that have been donated by the community to prevent them from going to waste.",
            "our customers can pay what they wish for the supplies, and we offer suggested price bands for each item. we label items with different colors to communicate their suggested price bands. this flexible pricing system is complicated to tally, so i decided to make a customized calculator to help us out!",
            "this calculator is a TypeScript React app hosted on Firebase."
        ]
    },
    {
        "title": "lex autocomplete",
        "app_link": "https://ott-autocomplete.web.app",
        "code_link": "https://github.com/rlmead/lex-autocomplete",
        "date": "november 2022",
        "img_src": LexAutocompletePic,
        "img_alt": "an automatically-generated word string that says 'Easier access to bikes and walking paths in neighborhoods for children would help. This...'. the word string is followed by three buttons suggesting the words 'challenges', 'needs', and 'may', as well as instructions for generating one's own comment.",
        "about": [
            "this project explores ideas from the residents of Lexington, Kentucky through combinations of their own words. it presents an interactive interface for generating word strings using suggestions from a trigram text prediction model.",
            "the trigram model is built on survey responses collected during the 2022 On The Table program run by Civic Lex. this was a series of public conversations that engaged Lexington residents in providing feedback toward the city's Comprehensive Plan.",
            "there were three main technical parts to this project: creating a trigram model in R with output in a JSON data structure, building a React app for interacting with the trigram model, and hosting both the model and the app on Firebase. this project was a collaboration with linguist Josef Fruehwald; he created the model, and i built the app and set up hosting. we both enjoyed learning more about each other's domains over the course of the project."]
    },
    {
        "title": "recipe generator",
        "app_link": "https://gluten-free-snacks.web.app",
        "code_link": "https://github.com/rlmead/gf-snacks",
        "date": "april 2021",
        "img_src": GFSnacksPic,
        "img_alt": "snack recipe generated randomly from gluten-free ingredients, including sweet potatoes and oyster sauce",
        "about": [
            "my gluten-free snack generator was inspired by a friend who follows a gluten-free diet and writes about food. i was inspired to build a random recipe generator to go along with her book of gluten-free snack recipes.",
            "i enjoy the creativity of exploring unusual possibilities, so i'm drawn to the idea of generating \"every possible X\" for whatever \"X\" is currently on my mind. in this case, i was curious about ingredients and flavors that people wouldn't think to combine (within certain constraints).",
            "this app presented two fun challenges: first i had to decide how to structure the ingredient data, then i had to build an algorithm to return (somewhat) reasonable combinations. i divided the ingredients into two major categories - bases (subdivided into starches / proteins) and toppings (subdivided into sweet / savory, and sauces / sprinkles). my algorithm returns combinations of these ingredients based on a few dice rolls - often surprising, and probably not always delicious!"]
    },
    {
        "title": "idea network",
        "app_link": "https://network-of-ideas.web.app",
        "code_link": "https://github.com/rlmead/idea-network-frontend",
        "date": "december 2020",
        "img_src": IdeaNetworkPic,
        "img_alt": "section of a webpage where a user has shared a creative idea, and other users can request to collaborate",
        "about": [
            "the idea network was my final project for the Awesome Inc web development bootcamp: a full stack web app, using React hosted on Firebase for the front end, and Laravel hosted on Heroku for the back end.",
            "my concept was to create a social platform that enables users to share their creative ideas and find collaborators. this concept came from my own passion for creative collaboration.",
            "i'm really pleased with all the features i built into this app in just three weeks - profile pages, idea pages with comments sections, and browsing functionality. plans for improvement include idea tags, idea search & filtering, and more social functionality."]
    },
    {
        "title": "image puzzle",
        "app_link": "https://puzzle-slider-b9d83.web.app/",
        "code_link": "https://github.com/rlmead/puzzle-slider",
        "date": "october 2020",
        "img_src": PuzzleSliderPic,
        "img_alt": "puzzle slider app made from an image that has been divided into square segments and scrambled; the scrambled image is a picture of a street with old buildings",
        "about": [
            "this app was an exercise in tracking state with React.",
            "i enjoyed thinking through all the little logic puzzles required to make this app work - slicing up the image correctly; checking whether a tile could move, and moving it; determining whether the player had won. these 2D visual and spatial puzzles felt a lot like the problems i solve when designing clothing.",
            "this puzzle is made from an image of Victoria Street in Edinburgh, Scotland."]
    },
    {
        "title": "to-don't list",
        "app_link": "https://to-dont-list.web.app",
        "code_link": "https://github.com/rlmead/compartments",
        "date": "october 2020",
        "img_src": ToDontPic,
        "img_alt": "app to make a \"to-don't\" list",
        "about": [
            "with this project, i practiced managing state with React and tracking user data with Local Storage.",
            "the brief for this assignment was to create a to-do list app. i like making to-do lists, but when i built this app, i was looking for a way to compartmentalize my mind - somewhere i could write things down, lock them up, and forget about them while i focused on high-priority work.",
            "this app has lots of functionality, and it's not all intuitive. i would like to pare it down so that it's less of a traditional to-do list, and primarily serves the purpose i designed it for: compartmentalizing. i'd also like to improve the visual and interactive design."
        ]
    }
]

export default projectsData;