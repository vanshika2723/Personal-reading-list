# Contributing to Personal Reading List

This document explains the structure of the Personal Reading List project and provides guidance for contributors who want to add or modify features without breaking the existing functionality.

## 1. Project Overview

Personal Reading List is a small client-side web application built with HTML, CSS, and JavaScript.

Users can add reading resources, view saved resources, remove items, and keep their reading list persistent using browser localStorage.

The project intentionally keeps the architecture simple because it is a focused single-feature application.

## 2. Code Layout

```text
Personal-Reading-List/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── CONTRIBUTING.md
```

### `index.html`

Contains the application structure and semantic HTML.

It includes:

* Reading-list form
* Title and URL inputs
* Add button
* Loading state
* Error state
* Empty state
* Reading-list container
* Item count and status messages

The HTML is kept separate from the application logic so that the structure can be changed without putting JavaScript logic directly into the page.

### `style.css`

Contains all visual styling and responsive behavior.

It controls:

* Layout
* Colors and typography
* Cards and buttons
* Loading indicator
* Error and empty states
* Responsive mobile layout
* Keyboard focus indicators

Keeping styles in a separate file makes visual changes easier without changing application logic.

### `script.js`

Contains the application's behavior and state management.

It handles:

* Adding reading-list items
* Removing items
* Reading and writing localStorage data
* Rendering saved items
* Loading state
* Error state
* Empty state
* Retry behavior
* URL query parameters used to demonstrate application states
* Keyboard focus behavior

The JavaScript is the main place to work when adding functionality that changes how the application behaves.

### `README.md`

Contains user-facing documentation.

It explains:

* What the project does
* Technology used
* How to run the project
* How to test the application states
* Keyboard accessibility
* Original feature comparison
* Project scope

### `CONTRIBUTING.md`

Contains contributor-focused documentation explaining the architecture, safe extension points, testing process, and fragile areas.

## 3. Why the Project Is Organized This Way

The application uses a simple separation of concerns:

* HTML handles structure
* CSS handles presentation
* JavaScript handles behavior and data
* README handles user/setup documentation
* CONTRIBUTING.md handles developer documentation

This structure keeps the project understandable and avoids unnecessary frameworks or complex architecture for a small feature.

## 4. Where a New Feature Should Go

A new feature should be added according to what it changes.

### New UI Element

Add the required semantic HTML to `index.html`.

Then add its styling to `style.css`.

If the element requires interaction, connect it to the appropriate logic in `script.js`.

### New User Interaction

Add the interaction logic to `script.js`.

For example, a future "Mark as Read" feature would require:

1. A control in `index.html`
2. Styling in `style.css`
3. Event handling in `script.js`
4. A data update in localStorage
5. Updated rendering logic
6. Testing for normal, empty, and error-related behavior where applicable
7. README documentation if the user-facing behavior changes

### New Data Field

If a new property is added to reading-list items, the changes belong primarily in `script.js`.

The contributor must update:

* Item creation
* localStorage data
* Item rendering
* Any relevant validation
* Existing stored-data handling

Previously saved localStorage items should be considered when changing the data structure.

## 5. What Files May Need to Be Touched

For a typical new feature:

```text
index.html  → new UI
style.css   → new visual styles
script.js   → behavior and data
README.md   → user-facing documentation
CONTRIBUTING.md → contributor guidance if architecture changes
```

Not every feature requires changes to every file.

A documentation-only change should not require changes to application code.

## 6. Running the Project

No backend or database is required.

Run the project using a local development server such as VS Code Live Server.

Open:

```text
index.html
```

Then verify that the application loads correctly.

## 7. Checks Before Submitting a Change

After making a change, manually verify:

* Application loads without visible errors
* Existing reading-list items still appear
* New items can still be added
* Existing items can still be removed
* Data remains after refresh
* Loading state works
* Error state works
* Error recovery works
* Empty state works
* Keyboard navigation works
* Focus indicators remain visible
* Mobile layout does not create horizontal scrolling

## 8. What a Passing Run Looks Like

A change can be considered ready when:

* The application loads successfully
* The existing reading-list workflow still works
* The new feature works as documented
* No existing state is broken
* localStorage data is handled correctly
* Keyboard navigation remains usable
* The responsive layout remains usable
* No unexpected horizontal scrolling appears on narrow screens
* The README remains accurate

## 9. Fragile Parts

### localStorage Data Structure

The localStorage data structure is one of the fragile parts of this application.

The application expects reading-list items to have the properties required by the rendering and removal logic. Changing the stored object structure without updating item creation, rendering, and existing stored data can cause saved items to display incorrectly or stop working.

Therefore, contributors should be careful when changing the reading-list data model.

### Demonstration State Query Parameters

The loading, error, and empty states can be demonstrated using URL query parameters.

These states are intentionally part of the project's testing/documentation workflow. Changes to the state-detection or state-rendering logic could make the documented demonstration URLs stop working.

If this logic is changed, all three documented state URLs should be tested again.

## 10. Safe Feature-Addition Workflow

Before adding a feature:

1. Read `README.md`
2. Read this document
3. Understand the current HTML structure
4. Identify the related JavaScript logic
5. Make the smallest required change
6. Test the normal workflow
7. Test relevant loading, error, and empty states
8. Test keyboard navigation
9. Test responsive behavior
10. Update documentation when behavior changes

Keeping changes small and testing existing behavior helps prevent regressions.

## 11. Documentation Rule

If a feature changes how users interact with the application, update `README.md`.

If a feature changes the project architecture or introduces a new fragile area, update `CONTRIBUTING.md`.

The documentation should describe the current behavior rather than planned future behavior.
