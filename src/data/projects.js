import PuzzleSliderPic from "../img/web-projects/puzzle-slider.png"
import ToDontPic from "../img/web-projects/to-dont.png"
import ClockPic from "../img/web-projects/clock.png";
import IdeaNetworkPic from "../img/web-projects/idea-network.png";
import GFSnacksPic from "../img/web-projects/gluten-free-snacks.png";

const projectsData = [
    {
        "title": "random recipe generator",
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
    },
    {
        "title": "moody clock",
        "app_link": "https://rlmead.github.io/digital-clock/",
        "code_link": "https://github.com/rlmead/digital-clock",
        "date": "september 2020",
        "img_src": ClockPic,
        "img_alt": "digital clock app",
        "about": [
            "building this app got me some practice using JavaScript to update a simple HTML page.",
            "this design came from an idea to build a clock that has its own personality and doesn't always do what we expect clocks to do. i built two modes: a \"happy\" mode that tells the correct time when it's sunny out, and a \"grumpy\" mode that misbehaves when the weather is bad.",
            "when i first built this app, i didn't know how to query a weather API, so the user has to toggle between the two modes manually. i'd like to update this app to automatically change modes based on the weather in the user's location."
        ]
    }
]

export default projectsData;