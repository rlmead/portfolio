import PuzzleSliderPic from "../img/web-projects/puzzle-slider.png"
import ToDontPic from "../img/web-projects/to-dont.png"
import PseudoRandomPic from "../img/web-projects/pseudo-random.png"
import TicTacToePic from "../img/web-projects/tic-tac-toe.png";
import WeatherPic from "../img/web-projects/weather.png";
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
        "img_alt": "randomly generated gluten free snack recipe",
        "about": [
            "my gluten-free snack generator app was inspired by a friend who follows a gluten-free diet and writes about food. as she worked on a book of gluten-free snack recipes, i had the idea to build a random recipe generator to go along with it.",
            "i'm often drawn to the idea of generating \"every possible X\", where X is something that i'm currently thinking about or doing. i enjoy the creativity of exploring unusual possibilities and combinations.",
            "this app presented two fun challenges: first i had to decide how to structure the ingredient data, then i had to build an algorithm to return reasonable combinations of these ingredients. i divided the ingredients into two major categories - bases, subdivided into starches & proteins, and toppings, subdivided into sweet & savory / sauces & sprinkles. my algorithm returns combinations of these ingredients based on a few dice rolls - often surprising, and probably not always delicious!"]
    },
    {
        "title": "idea network",
        "app_link": "https://network-of-ideas.web.app",
        "code_link": "https://github.com/rlmead/clone-frontend",
        "date": "december 2020",
        "img_src": IdeaNetworkPic,
        "img_alt": "social network for creative collaboration",
        "about": [
            "the idea network was my final project for the Awesome Inc web development bootcamp: a full stack web app, using React hosted on Firebase for the front end, and Laravel hosted on Heroku for the back end.",
            "my dream was to create a social platform that enables users to share their creative ideas and find collaborators. this dream grew out of my own passion for creative collaboration.",
            "i'm really pleased with all the features i managed to build into this app in just three weeks - profile pages, idea pages with comments sections, and browsing functionality. future development may include more ways to tag ideas, idea search, and more social functionality."]
    },
    {
        "title": "image puzzle",
        "app_link": "https://puzzle-slider-b9d83.web.app/",
        "code_link": "https://github.com/rlmead/puzzle-slider",
        "date": "october 2020",
        "img_src": PuzzleSliderPic,
        "img_alt": "puzzle slider app",
        "about": [
            "this app was an exercise in tracking state with React.",
            "i enjoyed thinking through all the little logic puzzles required to make this app work - slicing up the image correctly; checking whether a tile could move, and moving it; determining whether the player had won. the 2D visual problems felt a lot like the problems i solve when designing knitwear.",
            "the image i used for this puzzle is of Victoria Street in Edinburgh, Scotland."]
    },
    {
        "title": "to-don't list",
        "app_link": "https://to-dont-list.web.app",
        "code_link": "https://github.com/rlmead/compartments",
        "date": "october 2020",
        "img_src": ToDontPic,
        "img_alt": "to-don't list",
        "about": [
            "with this project, i practiced managing state with React and tracking user data with Local Storage.",
            "the brief for this project was to create a to-do list app. i'm a huge fan of to-do lists, but when i built this app, i was looking for a way to compartmentalize my mind - somewhere i could write things down, lock them up, and forget about them while i focused on my immediate work. as i developed this app, i was also using it to plan my time :)",
            "the current version of this app includes lots of functionality, and it's not all intuitive. i would like to pare it down so that it's less of a traditional, all-encompassing to-do list, and primarily serves the purpose i designed it for. i'd also like to improve the visual design with more fun color and layout options."
        ]
    },
    {
        "title": "restaurant menu",
        "app_link": "https://pseudo-random-restaurant.web.app/",
        "code_link": "https://github.com/rlmead/pseudo-random",
        "date": "october 2020",
        "img_src": PseudoRandomPic,
        "img_alt": "restaurant menu app",
        "about": [
            "this project is a single-page React app that queries data from an external API to create a restaurant website.",
            "with this straightforward project, i really began to find my footing with both React and Bootstrap. i challenged myself to focus on neat design, in both engineering and visuals. and i enjoyed using the silly, randomly-generated data from the restaurant menu API to dynamically generate the menu content."
        ]
    },
    {
        "title": "tic tac toe",
        "app_link": "https://rlmead.github.io/tic-tac-toe/",
        "code_link": "https://github.com/rlmead/tic-tac-toe",
        "date": "october 2020",
        "img_src": TicTacToePic,
        "img_alt": "tic-tac-toe app",
        "about": [
            "this project was a deep exercise in applying JavaScript logic to create an interactive game. it was also some of my early practice with Bootstrap."
        ]
    },
    {
        "title": "weather oracle",
        "app_link": "https://rlmead.github.io/async-weather-app/",
        "code_link": "https://github.com/rlmead/async-weather-app",
        "date": "october 2020",
        "img_src": WeatherPic,
        "img_alt": "weather oracle app",
        "about": [
            "this app introduced me to methods for requesting data from an external API and handling the response asynchronously. it was also one of the first projects that i designed with Bootstrap."
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
            "in building this app, i practiced using JavaScript to update an HTML page.",
            "this design came from an idea i'd had a while back - to build a clock that has its own personality, and doesn't always do what we expect clocks to do. i built two modes: a happy mode that tells the correct time when it's sunny out, and a grumpy mode that misbehaves when the weather is bad.",
            "currently, the user has to toggle between the two modes. when i first built this app, i didn't know how to query a weather API. now that i know how to do that, i'm working on a more sophisticated clock app that determines its own mood :)"
        ]
    }
]

export default projectsData;