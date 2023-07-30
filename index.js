console.log(
    `Hello learners! This is a test message so you can see if your setup works correctly.
If you can't see this message in the console of your browser developer tools,
something is wrong with your setup!
Please contact the mail address you were provided in the README.md file.`
);

const invisible = "invisible";
const rotate180 = "rotate-180";

function removeSpinner() {
    const spinner = document.getElementById("spinner");

    spinner.remove();
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
    const placeholder = document.getElementById("placeholder");
    const pig = document.getElementById("pig");
    const button = document.getElementById("button");
    const arrow = document.getElementById("arrow");

    if (arrow == null) {
        console.log("Oh no, the sample solution is broken!");
    }

    if (placeholder == null) {
        console.log("Oh no, the sample solution is broken!");
    }

    if (pig == null) {
        console.log("Oh no, the picture of the guinea pig is gone! Did you change any IDs in the JS or HTML code?");
    }

    if (button == null) {
        console.log("Oh no, the button is gone! Did you change any IDs in the JS or HTML code?");
    }

    if (pig.classList.contains(invisible)) {
        if (!arrow.classList.contains(invisible)) {
            arrow.classList.add(invisible);
        }
        button.innerText = "Hide It!";
        placeholder.classList.remove(invisible);
        setTimeout(() => {
            placeholder.classList.add(invisible);
            pig.classList.remove(invisible);
        }, 2000);
    } else {
        pig.classList.add(invisible);
        button.innerText = "Show Me!";
    }
}

function startArrowBounce() {
    const arrow = document.getElementById("arrow");

    if (arrow == null) {
        console.log("Oh no, the sample solution is broken!");
    }

    arrow.classList.add("animate-bounce");
}

function stopArrowBounce() {
    const arrow = document.getElementById("arrow");

    if (arrow == null) {
        console.log("Oh no, the sample solution is broken!");
    }

    arrow.classList.remove("animate-bounce");
}

function toggleDropdownOptions() {
    const dropdownOptions = document.getElementById("dropdown-options");
    const caret = document.getElementById("caret");

    if (dropdownOptions == null || caret == null) {
        console.log("Oh no, the sample solution is broken!");
    }

    if (dropdownOptions.classList.contains(invisible)) {
        dropdownOptions.classList.remove(invisible);
        caret.classList.add(rotate180);
    } else {
        dropdownOptions.classList.add(invisible);
        caret.classList.remove(rotate180);
    }
}