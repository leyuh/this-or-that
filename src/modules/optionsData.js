const OPTIONS_DATA = [
    {
        "name": "glasses",
        "desc": "Only 63.7% of the population need them. Not that important, right?",
        "image": "https://images.stockcake.com/public/b/c/d/bcdee869-c075-4ef1-a083-dbd26ff11235_large/stylish-aviator-glasses-stockcake.jpg"
    },
    {
        "name": "Azerbaijan",
        "desc": "0.125% of the world's population.",
        "image": "https://images.stockcake.com/public/8/f/0/8f0e08d3-a9a8-470b-b315-37a846a8570f_large/colorful-market-display-stockcake.jpg"
    },
    {
        "name": "your first crush",
        "desc": "When I was 13, I had my first love...",
        "image": "https://images.stockcake.com/public/5/2/a/52af2785-792b-43d4-9681-afd5a29839cc_large/love-hearts-decoration-stockcake.jpg"
    },
    {
        "name": "Robert Downey Jr",
        "desc": "The backbone of Marvel.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/220px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg"
    },
    {
        "name": "nail clippers",
        "desc": "Meh, you have scissors, you don't need them, right?",
        "image": "https://images.stockcake.com/public/5/f/5/5f5576e9-1c82-4ec8-9159-f2a93d36050d_large/nail-clipping-time-stockcake.jpg"
    },
    {
        "name": "The Super Bowl",
        "desc": "An American tradition.",
        "image": "https://images.stockcake.com/public/4/8/4/484f1333-fb81-47fe-bf12-47bd6bd2f542_large/intense-football-action-stockcake.jpg"
    },
    {
        "name": "Wikipedia",
        "desc": "If you are an English teacher, you definitely won't pick this.",
        "image": "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"
    },
    {
        "name": "the moon",
        "desc": "It's just a big rock.",
        "image": "https://images.stockcake.com/public/4/e/a/4ea73628-1864-4916-9969-1a56ea9723d8_large/luminous-moon-night-stockcake.jpg"
    },
    {
        "name": "turtles",
        "desc": "They don't do anything. It's fine.",
        "image": "https://images.stockcake.com/public/5/6/b/56bee560-41db-47f8-846c-b2ab9d25271f_large/turtle-at-sunset-stockcake.jpg"
    },
    {
        "name": "door knobs",
        "desc": "You can just kick it down.",
        "image": "https://images.stockcake.com/public/2/1/0/21088e48-5a3b-437d-b2a0-c52af4797aab_large/vintage-door-knob-stockcake.jpg"
    },
    {
        "name": "tiramisu",
        "desc": "An Italian staple.",
        "image": "https://images.stockcake.com/public/1/a/3/1a3d2661-3884-4bd8-a44c-7a8f446077ac_large/decadent-tiramisu-dessert-stockcake.jpg"
    },
    {
        "name": "gingers",
        "desc": "Not sure why anyone would keep them tbh.",
        "image": "https://images.stockcake.com/public/7/3/f/73fc4571-5dff-476d-bc15-8e200fed6d3d_large/radiant-ginger-smile-stockcake.jpg"
    },
    {
        "name": "jazz",
        "desc": "ya like jazz?",
        "image": "https://images.stockcake.com/public/5/1/8/518e4299-c370-409a-b1e2-4273568e9021_large/jazz-night-live-stockcake.jpg"
    },
    {
        "name": "denim",
        "desc": "No one likes jeans anyway.",
        "image": "https://images.stockcake.com/public/a/a/5/aa5e7aea-a1a1-4b3b-bf92-f05c64b2cab6_large/folded-denim-jeans-stockcake.jpg"
    },
    {
        "name": "seafoam green",
        "desc": "It's just another shade of green.",
        "image": "https://images.stockcake.com/public/0/8/9/089e16b0-c667-48e8-a27e-7c664a4da455_large/intricate-seafoam-structure-stockcake.jpg"
    },
    {
        "name": "Colorado",
        "desc": "There's still 49 other states...",
        "image": "https://images.stockcake.com/public/b/b/4/bb4cea79-0b8b-4d44-962f-ed406eaf2757_large/stunning-canyon-view-stockcake.jpg"
    },
    {
        "name": "Billie Eilish",
        "desc": "GLOCK TUCKED BIG T-SHIRT BILLIE EILISH",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Billie_Eilish_Vogue_2023.jpg/220px-Billie_Eilish_Vogue_2023.jpg"
    },
    {
        "name": "NASA",
        "desc": "I guess you'd probably save lives if you got rid of this.",
        "image": "https://images.stockcake.com/public/8/0/5/8058e1d9-b5b2-447b-8206-ec206fce8f39_large/rocket-liftoff-flames-stockcake.jpg"
    },
    {
        "name": "Mr. Rex",
        "desc": '"cheese"',
        "image": "https://rwfs.renweb.com/ftp/EL-OR/pictures/8d6543de-4861-48f4-8a11-270e0c4c083d.jpeg"
    },
    {
        "name": "Commander Lander",
        "desc": "He's mean and nasty.",
        "image": "https://rwfs.renweb.com/ftp/EL-OR/pictures/47c2effc-c95f-4e97-b185-9ecb8cbcf7c9.jpeg"
    },
    {
        "name": "Prince",
        "desc": "Or should I say, The Artist?",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Prince_1981.jpg/220px-Prince_1981.jpg"
    },
    {
        "name": "Thriller",
        "desc": "Just the best selling album of all time.",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Michael_Jackson_-_Thriller.png/220px-Michael_Jackson_-_Thriller.png"
    },
    {
        "name": "Diary of a Wimpy Kid",
        "desc": "A staple of all our childhoods.",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Diary_of_a_Wimpy_Kid_Rodrick_Rules_film_poster.jpg/220px-Diary_of_a_Wimpy_Kid_Rodrick_Rules_film_poster.jpg"
    },
    {
        "name": "Pirates of the Caribbean",
        "desc": "A classic film series.",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Pirates_of_the_caribbean_2_poster_b.jpg/220px-Pirates_of_the_caribbean_2_poster_b.jpg"
    },
    {
        "name": "Sandy Cheeks",
        "desc": "Your favorite sea-faring squirrel.",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/220px-Sandy_Cheeks.svg.png"
    }
];

export default OPTIONS_DATA;