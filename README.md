# Personal Reading List

A focused rebuild of a **read-it-later / reading-list feature** using HTML, CSS, and JavaScript.

The goal of this project is to provide a simple way to save articles or resources for later, while demonstrating persistent data, responsive design, keyboard accessibility, and clear loading, error, and empty states.

## Live Demo

https://vanshika2723.github.io/Personal-reading-list/

## What I Built

The application allows users to:

* Add an article or resource with a title and URL
* View saved reading-list items
* Open saved resources
* Remove items from the reading list
* Persist items using browser `localStorage`
* Use the application with keyboard navigation
* View clear loading, error, and empty states
* Use the application on desktop and mobile screens

## Tech Stack

* HTML5
* CSS3
* JavaScript
* Browser localStorage
* GitHub Pages

## Original Feature Comparison

This project focuses on rebuilding one feature rather than recreating an entire product.

### Implemented

* Save an article/resource to a reading list
* Display saved items
* Remove saved items
* Persistent browser storage
* Responsive interface
* Keyboard-accessible controls
* Loading state
* Error state
* Empty state
* Error recovery action

### Deliberately Not Implemented

The original read-it-later experience can include many features beyond the core reading list. I intentionally kept this project focused and did not implement:

* User accounts and authentication
* Cloud synchronization across devices
* Browser extensions
* Automatic article/content extraction
* Tags and folders
* Advanced search
* Recommendations
* Social/sharing features

These features were intentionally excluded so that the selected reading-list feature could be completed, tested, and documented properly instead of creating a larger unfinished application.

## What My Version Does Better

The application makes its **loading, error, and empty states directly demonstrable** without requiring source-code changes.

Reviewers can use the documented URL parameters to test each state. The error state also provides a clear **Try Again** recovery action, while the empty state provides an **Add your first article** action.

## Application States

### Normal State

Open the main application normally:

```text
/
```

Add an article using the form and verify that it appears in the reading list.

### Loading State

```text
?state=loading
```

The application displays a loading indicator before showing the normal content.

### Error State

```text
?state=error
```

The application displays an error message explaining that the reading-list data could not be loaded and provides a **Try Again** action.

### Empty State

```text
?state=empty
```

The application displays an explanation of the reading-list feature and provides an **Add your first article** action.

## Keyboard Accessibility

The application can be operated using the keyboard.

* `Tab` — Move between interactive elements
* `Enter` / `Space` — Activate buttons
* Visible focus indicators are provided
* Native HTML buttons are used for actions
* Status and error messages use appropriate ARIA announcements

## Responsive Design

The layout adapts to different screen sizes.

The interface was designed to work on:

* Desktop
* Tablet
* Mobile
* Narrow mobile screens

The page avoids horizontal scrolling on small screens.

## Data Persistence

Reading-list items are stored using browser `localStorage`.

This means saved items remain available after refreshing the page in the same browser.

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/vanshika2723/Personal-reading-list.git
```

### 2. Open the project

```bash
cd Personal-reading-list
```

### 3. Run the application

Open `index.html` using a local development server such as VS Code Live Server.

The application does not require a backend server or database.

## Testing Checklist

A reviewer can verify the project using the following checklist:

* [ ] Application loads successfully
* [ ] User can add a reading-list item
* [ ] Saved item appears in the list
* [ ] Item remains after page refresh
* [ ] User can remove an item
* [ ] Loading state is visible
* [ ] Error state is visible
* [ ] Error state provides recovery
* [ ] Empty state explains the feature
* [ ] Empty state provides a first action
* [ ] Keyboard navigation works
* [ ] Focus indicators are visible
* [ ] Mobile layout works without horizontal scrolling

## Project Structure

```text
Personal-Reading-List/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Repository

GitHub Repository:

https://github.com/vanshika2723/Personal-reading-list

**#Contributor**
Contributor documentation is available in CONTRIBUTING.md.

## Final Project Scope

This project intentionally focuses on one complete feature: **saving and managing resources in a personal reading list**.

The scope was kept narrow so that the core experience, accessibility, failure states, responsive behavior, persistence, and documentation could be completed and tested properly.
