[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11505748&assignment_repo_type=AssignmentRepo)
# Exercises on Animations With Tailwind

Hi learners! This repository contains exercises on some of the most commonly used animations in web development. You will re-create them by using [tailwindcss](https://tailwindcss.com/).

## Necessary Skills

You will have to use your JavaScript and HTML skills to complete this assignment. Also, of course, you are going to use [tailwindcss](https://tailwindcss.com/)!

## Timeframe

You have **two hours** to complete this exercise.

However, if you can't finish all of the exercises in this time, that's okay! You can still pass, even if you don't finish everything, and even if you don't get everything right. Seeing your thought process is much more important to us than finishing everything.

## Contact

If you have any technical issues with setting everything up, or with commiting/pushing your assignment, please contact [email.exercise.the.gym@gmail.com](mailto:email.exercise.the.gym@gmail.com).

## Instructions

First, take a look at the website you have by opening up the file [index.html](./index.html) in a browser of your choice.

### Show, Don't Tell!

This creator of this website claims that their heart is only beating for guinea pigs - but can the user really believe this if they don't see a beating heart?

Use the file [heart.svg](./assets/heart.svg) and include it into your [index.html](./index.html) file as an image. Place it into the div element with the id `heart` .

Give the heart a size of 20x20 px by using [tailwindcss](https://tailwindcss.com/) classes.

Use [tailwindcss](https://tailwindcss.com/) classes on your image element to make the heart look like it's beating! The best animation for that is a ping animation. If you need an example for pinging, go here: [https://tailwindcss.com/docs/animation#ping](https://tailwindcss.com/docs/animation#ping).

For this exercise, you should only edit the file [index.html](./index.html).

### The Long Wait

Wow, this website kind of takes very long to load! Of course, you probably already know that this is because of the `setTimeout` function in the file [index.js](./index.js).

When there are long waiting times on websites, it's important to let the user know that things are still running. This is commonly done by using a loading spinner.

Use the file [spinner.svg](./assets/spinner.svg) and include it into your [index.html](./index.html) file as an image, above the div element with the id ´content´. Use [tailwindcss](https://tailwindcss.com/) classes on your image element to make the spinner spin. If you need an example for spinning, go here: [https://tailwindcss.com/docs/animation#spin](https://tailwindcss.com/docs/animation#spin).

Give the spinner a size of 40x40 px.

Once the waiting time of `setTimeout` function is done, the spinner should be removed. Put your code for that into the function `removeSpinner` in the file [index.js](./index.js).

For this exercise, you should only edit the files [index.html](./index.html) and [index.js](./index.js).

### Another Long Wait

Did you notice that, when clicking the `Show Me!` button, the image takes a while to appear? Of course, this is due to using the `setTimeout` function in the [index.js](./index.js) file, in the context of the function `toggleGuineaPig` .

On a real web application, long loading times can happen - and it's nice for the user to know that content is still coming, and the website didn't just stop working!

This is why good websites use loading skeletons. Let's implement one.

Use the file [placeholder.svg](./assets/placeholder.svg) and include it into your [index.html](./index.html) file as an image. Make it invisible as a default, and give it a height of 288px by using [tailwindcss](https://tailwindcss.com/) classes.

When the `Show Me!` button is clicked, immediately show the user this placeholder image, and remove it in the `setTimeout` callback.

None of the other elements on the website should move around during this process.

Next, add a pulse animation to the placeholder by using tailwind classes. If you need an example for pulsing, go here: [https://tailwindcss.com/docs/animation#pulse](https://tailwindcss.com/docs/animation#pulse).

### The Incomplete Dropdown

Did you notice the dropdown button that says `Pick A Topic!` ?

The developer who created this site must have forgotten something important! The dropdown options are, at the moment, always visible.

Make it so that the dropdown options are invisible by default. The visibility should be toggled whenever the `Pick A Topic!` button is clicked. The paragraph below the dropdown should not move around while doing this.

The arrow-like thing on the right side of the button is called a caret. It suggests to the user that more content will come when the element is clicked. But when the element is clicked and the dropdown options are visible, there is no more content to come.

Make the caret turn around by 180° whenever the dropdown options are visible!

Put your JavaScript code into the function `toggleDropdownOptions` in the [index.js](./index.js) file.

For this exercise, you should only edit the files [index.html](./index.html) and [index.js](./index.js).

### The Boring Arrow

The arrow above the `Show Me!` button looks a bit boring.

Make the arrow bounce up and down when the user hovers over the button by adding [tailwindcss](https://tailwindcss.com/) classes via JavaScript code. Here's a hint for you: Use the [onmouseover](https://www.w3schools.com/jsref/event_onmouseover.asp) and [onmouseout](https://www.w3schools.com/jsref/event_onmouseout.asp) events.

If you need an example for bouncing, go here: [https://tailwindcss.com/docs/animation#bounce](https://tailwindcss.com/docs/animation#bounce).

Once the button `Show Me!` was clicked, the arrow should be hidden and stay hidden as long as the user doesn't reload the page. When the arrow is hidden, the other elements on the page should not move around!

For this exercise, you should only edit the files [index.html](./index.html) and [index.js](./index.js).

## Hints

* Commit and push often. It's good practice!

* The [tailwindcss](https://tailwindcss.com/) documentation is your best friend! Use it as your first and foremost source. You are allowed to use other webpages, too, but please do not use ChatGPT or other AI code generators.

* Sometimes, the answer to your questions are right in front of you! Sounds highly philosophical, but what we mean is: If you don't know how to do things, you might find an already existing example in the code we provided for you - so pay attention to the code that is already here!
