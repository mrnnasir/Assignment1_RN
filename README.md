# Assignment1_RN

## 1. How HTML, CSS, and JS Files Are Connected

HTML links with CSS using <link rel="stylesheet" href="style.css"> and with JavaScript using <script src="app.js"></script>


## 2. What Happens When a User Loads the Page (Code Flow)

1. Browser sends a request for index.html to the server
2. Server then responds with the HTML file
3. Browser reads the content of HTML file
4. While reading the HTML, first it encounters with <link rel="stylesheet" href="style.css">. So, it loads .css file and applies CSS to the HTML structure
5. Then it encounters <script src="script.js"></script>. So, it loads and executes the JavaScript file
6. Finally, users can see the rendered webpage

## 3. The Role Each File Plays in the Platform

<b>HTML:</b>
This is the skeleton of the webpage. It contains various elements like, head, body, footer. It also includes button, class, ID, div, paragraph etc.

<b>CSS:</b>
This determines the design and layout of the webpage. What color, fonts, spacing etc. should be used in which section or part of the webpage.

<b>JavaScript:</b>
This is the brain that determines the behavior or the logic for the webpage. What prompt should be given if button is clicked or user input is taken, or interact with other functions or create or modify elements within HTML file, assign class or ID etc.
Basically, it makes the webpage interactive and dynamic.
