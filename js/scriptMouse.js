//No evaluable -> intensidad:Poca

const destiny = document.querySelector('.destiny');
const foreign = document.querySelector('.foreign');
const project = document.querySelector('.project');
const groups = document.querySelector('.groups')
const resources = document.querySelector('.resources')
const about = document.querySelector('.about')

const classes = [destiny, foreign, project, groups, resources, about];

const dashDestinations = document.querySelector('.dash-destinations');
const dashIntern = document.querySelector('.dash-intern-abroad');
const dashProjects = document.querySelector('.dash-projects');
const dashGroups = document.querySelector('.dash-groups')
const dashResources = document.querySelector('.dash-resources')
const aboutUs = document.querySelector('.about-us')

const classesAction = [dashDestinations, dashIntern, dashProjects, dashGroups, dashResources, aboutUs];

for (let index = 0; index < classes.length; index++) {
    for (let index = 0; index < classesAction.length; index++) {
    classes[index].addEventListener('mouseout', () => classesAction[index].style.display = 'none');
}



//NOTE -  Codigo remplazado

// destiny.addEventListener('mouseover', () => dashDestinations.style.display = 'flex');

// destiny.addEventListener('mouseout', () => dashDestinations.style.display = 'none');

// foreign.addEventListener('mouseover', () => dashIntern.style.display = 'flex');

// foreign.addEventListener('mouseout', () => dashIntern.style.display = 'none');


// project.addEventListener('mouseover', () => dashProjects.style.display = 'flex');

// project.addEventListener('mouseout', () => dashProjects.style.display = 'none');

// groups.addEventListener('mouseover', () => dashGroups.style.display = 'flex');

// groups.addEventListener('mouseout', () => dashGroups.style.display = 'none');

// resources.addEventListener('mouseover', () => dashResources.style.display = 'flex');

// resources.addEventListener('mouseout', () => dashResources.style.display = 'none');

// about.addEventListener('mouseover', () => aboutUs.style.display = 'flex');

// about.addEventListener('mouseout', () => aboutUs.style.display = 'none');



