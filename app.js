import Project from './project.js';

//const jsonData = require('./data/data.json');

let features = ['Feature One', 'Feature Two'];
let project = new Project('Pool System', 'A test of the pool system', '/images/coding_sm.jpg', features, 'www.github.com');
project.features = ['Feature One', 'Feature Two'];

let project2 = new Project('Swipe and Rescue', 'Help facilitate animal adoptions', 'images/world_sm.jpg', ['Feature One', 'Feature Two'], 'https://www.github.com');

//let projectList = [project, project2];
//let projectList = getProjectListFromJson();

function getProjectListFromJson() {
    let projectList = [];

    let parsedJson = JSON.parse(jsonData);
    let projectArray = parsedJson.projects;

    projectArray.forEach(projectData => {
        let project = Project.fromJson(projectData);
        projectList.push(project);
    });

    return projectList;
}

function createProjectCard(project) {
    let projectName = project.projectName; 
    let projectDescription = project.projectDescription;
    let linkToImage = project.linkToProjectImage;
    let features = project.features;
    let linkToProject = project.linkToProject;

    let container = document.createElement('div');
    // add bootstrap css to card
    container.classList.add("col-lg-6", "col-xxl-4", "my-5");

    // create card div
    let card = document.createElement('div');
    // add classes to card
    card.classList.add("card", "h-100", "project-border", "shadow");
    // create image holder
    let imageHolder = document.createElement('div');
    // add classes to image
    imageHolder.classList.add("img-fluid", "m-3");
    // add style to image holder
    imageHolder.style.height = "20rem";
    imageHolder.style.width = "auto";
    imageHolder.style.overflow = "hidden";
    // create image div
    let imageDiv = document.createElement('div');
    // add class to imageDiv
    imageDiv.classList.add("project-image");
    // set image as the background
    imageDiv.style.backgroundImage = `url(${linkToImage})`;
    // attach imageDiv to imageHolder
    imageHolder.appendChild(imageDiv);
    // attach imageHolder to card
    card.appendChild(imageHolder);

    // Card Body

    // create card body
    let cardBody = document.createElement('div');
    // add classes to card body
    cardBody.classList.add('card-body');

    // create project title
    let projectTitle = document.createElement('div');
    // add project title classes
    projectTitle.classList.add('card-title', 'display-5');
    // add project title text
    projectTitle.innerText = projectName;
    // add title to card body
    cardBody.appendChild(projectTitle);

    // create description div
    let descriptionText = document.createElement('p');
    // set description text
    descriptionText.innerText = projectDescription;
    // add to card body
    cardBody.appendChild(descriptionText);

    // create features title
    let featuresTitle = document.createElement('h6');
    featuresTitle.innerText = 'Features:';
    // set class for featuresTitle
    featuresTitle.classList.add('display-6', 'text-color-first-compliment');
    // add to card body
    cardBody.appendChild(featuresTitle);

    // create features unordered list
    let featuresList = document.createElement('ul');
    // set class for featuresLIst
    featuresList.classList.add('list-group');
    // loop through features and create list items for them
    features.forEach(feature => {
        // create li element
        let li = document.createElement('li');
        // set style classes
        li.classList.add("list-group-item", "list-group-item-secondary");
        // set text of list item
        li.innerText = feature;
        // append to unordered list
        featuresList.appendChild(li);
    });
    // attach feature list to card body
    cardBody.appendChild(featuresList);

    // attach card body to card
    card.appendChild(cardBody);

    // Card Footer

    // create card footer
    let cardFooter = document.createElement('div');
    // set class for card footer
    cardFooter.classList.add('card-footer');
    // create button holder
    let buttonHolder = document.createElement('div');
    // set button holder class
    buttonHolder.classList.add("text-start");
    // create button
    let button = document.createElement('a');
    button.text = "Click Here!";
    // set button classes
    button.classList.add("btn", "btn-primary", "align-self-start", "mt-3");
    // set link
    button.href = linkToProject;
    // attach button to button holder
    buttonHolder.appendChild(button);
    // attach button holder to card footer
    cardFooter.appendChild(buttonHolder);
    // attach card footer to card
    card.appendChild(cardFooter);

    // attach card to container
    container.appendChild(card);

    return container;   

}

async function loadProjects() {
    // load projects from json
    const projectList = await (await fetch('./data/data.json')).json();
    
    // get div container
    let containerDiv = document.querySelector('.projects-container');
    // for each object in project list array, append a card to this container
    projectList.projects.forEach((project) => {
        containerDiv.appendChild(createProjectCard(project));
    });
}

loadProjects();