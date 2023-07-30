console.log(
    `Hello learners! This is a test message so you can see if your setup works correctly.
If you can't see this message in the console of your browser developer tools,
something is wrong with your setup!
Please contact the mail address you were provided in the README.md file.`
);

const invisible = "invisible";
const hidden = "hidden";
const bounce ="animate-bounce";

function bounceArrow() {
    {
        const arrow = document.getElementById("arrow");
            arrow.classList.add(bounce)
    }

}

function noBounce() {
    {
        const arrow = document.getElementById("arrow");
            arrow.classList.remove(bounce)
    }

}

function removeSpinner() {
    {
    const spinner = document.getElementById("spinner");
            spinner.classList.add(hidden);
    }

}

setTimeout(() => {
    const content = document.getElementById("content");

    if (content == null) {
        console.log("Oh no, the content of the entire website is gone! Did you change any IDs in the JS or HTML code?");
    }

    removeSpinner();
    content.classList.remove(invisible);
}, 2000);

function toggleGuineaPig() {
    const pig = document.getElementById("pig");
    const button = document.getElementById("button");
    const placeholder = document.getElementById("placeholder");
    const arrow = document.getElementById("arrow");

    if (pig == null) {
        console.log("Oh no, the picture of the guinea pig is gone! Did you change any IDs in the JS or HTML code?");
    }

    if (button == null) {
        console.log("Oh no, the button is gone! Did you change any IDs in the JS or HTML code?");
    }

    if (pig.classList.contains(hidden)) {
        button.innerText = "Hide It!";
        placeholder.classList.remove(invisible)
        arrow.classList.add(invisible)
        setTimeout(() => {
            placeholder.classList.add(hidden)
            pig.classList.remove(hidden);
        }, 2000);
    } else {
        placeholder.classList.remove(hidden);
        placeholder.classList.add(invisible);
        pig.classList.add(hidden);
        button.innerText = "Show Me!";
    }
}

function toggleDropdownOptions() {
    const dropdownoptions = document.getElementById("dropdownoptions");

    if (dropdownoptions.classList.contains(invisible)) {
        dropdownoptions.classList.remove(invisible)
    } else {
        dropdownoptions.classList.add(invisible);
    }
}