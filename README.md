# Personal Reading List

A responsive personal reading list that allows users to save articles and resources they want to read later.

## Overview

This project demonstrates data fetching and clear handling of three different data states:

* Loading
* Error
* Empty

Users can add reading items, open saved resources, and remove items from their reading list.

## Tech Stack

* HTML5
* CSS3
* JavaScript
* Local Storage
* Responsive Design
* Web Accessibility

## Features

* Add articles to a personal reading list
* Remove saved articles
* Persistent data using `localStorage`
* Loading state
* Error state
* Empty state
* Retry action after an error
* First-action button for an empty list
* Responsive mobile layout
* Keyboard-accessible controls
* Visible keyboard focus indicators

# Application States

The application intentionally provides three demonstrable states so a reviewer can verify the acceptance criteria without changing the source code.

## 1. Loading State

Open the application with:

```text
?state=loading
```

Example:

```text
http://localhost:5500/?state=loading
```

### What happens

The application displays:

**Loading your reading list...**

The loading state remains visible while the simulated data retrieval is in progress.

After the demonstration delay, the normal reading list is displayed.

---

## 2. Error State

Open the application with:

```text
?state=error
```

Example:

```text
http://localhost:5500/?state=error
```

### What happens

The application first displays the loading state and then changes to the error state.

The error message explains:

* What failed
* What the user can do next

The interface displays:

**We couldn't load your reading list.**

and provides a:

**Try again**

button.

Selecting **Try again** returns the application to the normal state.

---

## 3. Empty State

Open the application with:

```text
?state=empty
```

Example:

```text
http://localhost:5500/?state=empty
```

### What happens

The application displays:

**Your reading list is empty**

The message explains what the reading list is for and provides the first action:

**Add your first article**

Selecting this button moves keyboard focus to the title input so the user can immediately add an article.

---

# Normal Reading List

Open the application without a state parameter:

```text
http://localhost:5500/
```

Users can:

1. Enter an article title.
2. Enter a valid article URL.
3. Select **Add to reading list**.
4. Open the saved article.
5. Select **Remove** to delete an item.

Reading items are stored in the browser's `localStorage`, so they remain available after refreshing the page.

# Accessibility

The application is designed to be usable with a keyboard.

## Keyboard Controls

| Key         | Action                                   |
| ----------- | ---------------------------------------- |
| Tab         | Move to the next interactive element     |
| Shift + Tab | Move to the previous interactive element |
| Enter       | Activate the focused button or link      |
| Space       | Activate the focused button              |

All interactive controls use native HTML elements such as `<button>`, `<input>`, and `<a>`.

Visible `:focus-visible` styles make the current keyboard focus easy to identify.

## State Communication

The loading state uses:

```html
role="status"
aria-live="polite"
```

The error state uses:

```html
role="alert"
```

The item count uses:

```html
aria-live="polite"
```

These attributes help communicate dynamic state changes to assistive technologies.

# Responsive Design

The interface is responsive and designed to work on narrow screens.

At mobile widths:

* The form changes from multiple columns to a single column.
* Reading items stack vertically.
* Buttons remain accessible and usable.
* Text wraps instead of creating horizontal overflow.

The layout was specifically tested at **320px** to ensure there is no horizontal scrolling.

# State Design

The three states are intentionally different:

### Loading

The system is still retrieving the reading list.

### Error

The retrieval failed and the user needs an action to recover.

### Empty

The retrieval completed successfully, but there are currently no saved reading items.

Keeping these states visually and textually distinct prevents the interface from incorrectly presenting an unavailable or unmeasured result as an empty list.

# Project Structure

```text
Personal-Reading-List/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

# Testing Checklist

The following scenarios can be tested without modifying the source code:

* [x] Loading state is demonstrable with `?state=loading`
* [x] Error state is demonstrable with `?state=error`
* [x] Empty state is demonstrable with `?state=empty`
* [x] Loading and error states are visually distinct
* [x] Loading and empty states are visually distinct
* [x] Error message explains the failure and next action
* [x] Empty state explains the purpose of the feature
* [x] Empty state provides the first action
* [x] Retry action works
* [x] Articles can be added
* [x] Articles can be removed
* [x] Reading list persists after refresh
* [x] Keyboard navigation works
* [x] Focus indicators are visible
* [x] Layout works at 320px without horizontal scrolling

# How a Reviewer Can Verify

A reviewer can verify all acceptance criteria using the following URLs:

### Loading

```text
/?state=loading
```

### Error

```text
/?state=error
```

### Empty

```text
/?state=empty
```

### Normal list

```text
/
```

No source-code changes are required to demonstrate any of the three states.

# Goal

The goal of this project is to demonstrate clear, accessible handling of asynchronous data states while providing users with useful next actions in every state.
