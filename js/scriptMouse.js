//No evaluable -> intensidad:Poca

let destiny = document.querySelector('.destiny');
let foreign = document.querySelector('.foreign');
let project = document.querySelector('.project');
let groups = document.querySelector('.groups')
let resources = document.querySelector('.resources')
let about = document.querySelector('.about')

const classes = [destiny, foreign, project, groups, resources, about];

let dashDestinations = document.querySelector('.dash-destinations');
let dashIntern = document.querySelector('.dash-intern-abroad');
let dashProjects = document.querySelector('.dash-projects');
let dashGroups = document.querySelector('.dash-groups')
let dashResources = document.querySelector('.dash-resources')
let aboutUs = document.querySelector('.about-us')

const classesAction = [dashDestinations, dashIntern, dashProjects, dashGroups, dashResources, aboutUs];

for (let index = 0; index < classes.length; index++) {
    classes[index].addEventListener('mouseover', () => classesAction[index].style.display = 'flex');
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



