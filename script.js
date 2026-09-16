const readingForm = document.getElementById("readingForm");
const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");

const loadingState = document.getElementById("loadingState");
const errorState = document.getElementById("errorState");
const emptyState = document.getElementById("emptyState");
const readingList = document.getElementById("readingList");

const retryButton = document.getElementById("retryButton");
const emptyAddButton = document.getElementById("emptyAddButton");

const itemCount = document.getElementById("itemCount");
const listDescription = document.getElementById("listDescription");

const STORAGE_KEY = "readLaterItems";

let currentMode = "normal";

/* =========================
   Get Demonstration Mode
========================= */

function getModeFromURL() {
    const params = new URLSearchParams(window.location.search);
    const state = params.get("state");

    if (state === "loading") {
        return "loading";
    }

    if (state === "error") {
        return "error";
    }

    if (state === "empty") {
        return "empty";
    }

    return "normal";
}

/* =========================
   State Helpers
========================= */

function hideAllStates() {
    loadingState.hidden = true;
    errorState.hidden = true;
    emptyState.hidden = true;
    readingList.hidden = false;
}

function showLoadingState() {
    hideAllStates();

    loadingState.hidden = false;
    readingList.hidden = true;

    itemCount.textContent = "Loading...";
    listDescription.textContent =
        "Retrieving your saved articles.";
}

function showErrorState() {
    hideAllStates();

    errorState.hidden = false;
    readingList.hidden = true;

    itemCount.textContent = "Unavailable";
    listDescription.textContent =
        "Your reading list could not be loaded.";
}

function showEmptyState() {
    hideAllStates();

    emptyState.hidden = false;
    readingList.hidden = true;

    itemCount.textContent = "0 items";
    listDescription.textContent =
        "No saved articles yet.";
}

/* =========================
   Local Storage
========================= */

function getStoredItems() {
    try {
        const storedItems = localStorage.getItem(STORAGE_KEY);

        if (!storedItems) {
            return [];
        }

        return JSON.parse(storedItems);
    } catch (error) {
        console.error("Could not read stored items:", error);
        return [];
    }
}

function saveItems(items) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
    );
}

/* =========================
   Render Reading List
========================= */

function renderReadingList(items) {
    readingList.innerHTML = "";

    itemCount.textContent =
        `${items.length} ${items.length === 1 ? "item" : "items"}`;

    listDescription.textContent =
        items.length === 0
            ? "No saved articles yet."
            : "Your saved articles and resources.";

    if (items.length === 0) {
        showEmptyState();
        return;
    }

    hideAllStates();

    items.forEach((item) => {

        const article = document.createElement("article");
        article.className = "reading-item";

        const content = document.createElement("div");
        content.className = "reading-content";

        const title = document.createElement("h3");
        title.textContent = item.title;

        const link = document.createElement("a");
        link.href = item.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = item.url;
        link.setAttribute(
            "aria-label",
            `Open ${item.title}`
        );

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-button";
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", () => {
            removeItem(item.id);
        });

        content.appendChild(title);
        content.appendChild(link);

        article.appendChild(content);
        article.appendChild(removeButton);

        readingList.appendChild(article);
    });
}

/* =========================
   Load Reading List
========================= */

function loadReadingList() {

    currentMode = getModeFromURL();

    /*
       Demonstration state:
       ?state=loading
    */

    if (currentMode === "loading") {

        showLoadingState();

        setTimeout(() => {
            renderReadingList(getStoredItems());
        }, 5000);

        return;
    }

    /*
       Demonstration state:
       ?state=error
    */

    if (currentMode === "error") {

        showLoadingState();

        setTimeout(() => {
            showErrorState();
        }, 1200);

        return;
    }

    /*
       Demonstration state:
       ?state=empty
    */

    if (currentMode === "empty") {

        showLoadingState();

        setTimeout(() => {
            showEmptyState();
        }, 800);

        return;
    }

    /*
       Normal mode
    */

    showLoadingState();

    setTimeout(() => {

        const items = getStoredItems();

        renderReadingList(items);

    }, 900);
}

/* =========================
   Add Item
========================= */

readingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const title = titleInput.value.trim();
    const url = urlInput.value.trim();

    if (!title || !url) {
        return;
    }

    const items = getStoredItems();

    const newItem = {
        id: Date.now(),
        title,
        url
    };

    items.push(newItem);

    saveItems(items);

    readingForm.reset();

    /*
       If currently demonstrating empty state,
       return to normal page after adding.
    */

    if (currentMode !== "normal") {
        window.history.replaceState(
            {},
            "",
            window.location.pathname
        );

        currentMode = "normal";
    }

    renderReadingList(items);

    titleInput.focus();
});

/* =========================
   Remove Item
========================= */

function removeItem(id) {

    const items = getStoredItems();

    const updatedItems = items.filter(
        (item) => item.id !== id
    );

    saveItems(updatedItems);

    renderReadingList(updatedItems);
}

/* =========================
   Retry
========================= */

retryButton.addEventListener("click", () => {

    window.history.replaceState(
        {},
        "",
        window.location.pathname
    );

    currentMode = "normal";

    loadReadingList();
});

/* =========================
   Empty State Action
========================= */

emptyAddButton.addEventListener("click", () => {

    titleInput.focus();

    titleInput.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

/* =========================
   Start Application
========================= */

loadReadingList();