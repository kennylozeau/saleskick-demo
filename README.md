# Saleskick Demo Project by Kenny Lozeau

## Overview

This project is an app that allows users to explore different plants and track plants that are owned, and eventually will allow users to troubleshoot issues with their plants. The inspiration for this app came from my passion for collecting houseplants that I often have no prior experience owning.

## Running Locally

1. Clone the repo from GitHub
project2. cd into the demo directory
3. Install dependencies: `npm install`
4. Add Firebase Initialization object:
   1. Open `/demo/src/utils/initializeDB.js`
   2. Replace API_PLACEHOLDER object on line 6 with correct API Initialization object: `const API_PLACEHOLDER = {}`
5. Run the application: `npm run dev`
6. Open app in browser: `http://localhost:5173/`

## Technologies Used
- SvelteKit
- Google Firestore
- Plant data from [RapidAPI House Plants](https://rapidapi.com/mnai01/api/house-plants2)
- Custom debounce function

## Features

### My Plants
The My Plants feature allows users to save a list of plants that they own. New plants can be added to My Plants on any plant showpage (/explore/[plantId]). When visiting the My Plants page (/my_plants), users can browse their plants or remove any plant from the list by clicking 'Remove this plant'.

### Explore Plants
The Explore Plants feature allows users to browse and search for plants they are interested in adding to their My Plants list. When visiting the Explore Plants page (/explore), users are presented with a list of plants and a search bar (note: the number of plants shown is currently limited for demo in order to avoid daily Firestore limits).

Typing into the search bar executes a debounced function that prevents needless DB queries from executing while the user is still entering text. Once allowed to execute by the debounce function, the search bar displays a dropdown list of matching plant names (note: this search functionality is currently limited to only providing exact matches; try searching for plants with a capitalized first letter and seeing what results appear, e.g. "C").

## Approach
### Requirements and Planning
Knowing my given tech stack (SvelteKit, Firebase) and the open-ended prompt for this project, I began by thinking about my passions and balancing those with an application that could be built quickly and yet be feature-rich. Landing on my passion for houseplants, next I started exploring the available data from *free* public APIs, eventually discovering [RapidAPI House Plants](https://rapidapi.com/mnai01/api/house-plants2). This came with some challenges, though (see next section).

### Set-up Systems
Once I had an idea for an app and a data source, I began setting up the major parts of the project, the SvelteKit app and a Firestore database. This portion moved quickly, as both technologies are easy to get started with.

### Build Features
Following a loose MVP approach, I started with the portions of the app that users would interact with first and progressed to more complications features. The rough order of implementation was the Landing Page, the Explore page index of plants, the My Plants page, the Explore page search bar.

### Test and Debug
I was testing and debugging my code as I was completing features (or standalone portions of features). This was important because the more advanced search bar feature required some slight refactors of previous code. Rather than trust that all code was still functioning properly, I made sure to circle back and test all main functionality as refactors were implemented.

## Challenges
### Available free public APIs severely limited
After exploring three options for APIs containing plant data, it was clear that each came with its own circumstantial limitations. For example, one available API was limited to 100 requests per day with the free tier, which would have risked running out of requests during development.

One way that I attempted to avoid these limitations was to perform a single fetch of a sample of available data, save that data into a JavaScript file, and iteratively save the data into my own Firestore collection. Another benefit of doing this was that it allowed me to slightly modify the data to suit my needs (see `/demo/src/utils/seedDB.js`).
### Some experience with Svelte, less with SvelteKit
While I have some experience building Svelte components, I do not have good experience working with SvelteKit. Rather than spending time exploring server-side features of SvelteKit during a timed project, I made the decision to move forward with what I know best and try to achieve the functionality I desired. 

I was ultimately able to get the app working close to how I planned, but I am sure that refactoring some of my logic into server-side functions would improve my app's performance and also allow for better and more advanced functionality.

## The Future

### Future Features
- Refactor for server-side functionality
- Improved UI styling
  - Take advantage of SvelteKit's powerful styling functionality
- Implement user authentication
  - This application currently does not support multiple users
  - With user authentication added, each individual user will be able to keep a separate list of My Plants
- Implement 'Plant Troubleshooting' via OpenAI
  - When visiting the My Plants page, users will have an additional button for each plant, 'Troubleshoot this plant'
  - Clicking the 'Troubleshoot this plant' button will prompt the user to provide details for their plant
    - These details will be passed into an OpenAI LLM which will respond with tips for troubleshooting the plant
- Implement scheduling for plant check-ins
  - Users will be able to create Google Calendar events directly through the application
- Implement robust caching and refactor to utilize RapidAPI data dynamically
  - This will allow more efficient data querying and prevent unnecessary data fetching

### Bug Fixes
- Allow My Plants list to refresh on removing a plant from the list
- Allow case-insensitive searching
- Cleanup empty search results