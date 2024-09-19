// Sample projects array
const projects = [
  {
    id: 1,
    title: 'Rift Ranks',
    description: 'Webpage to Experience Powerful and Convincing Ranking System and Seamless Navigation',
    imageUrl: '/assets/img/444PRA/rift_ranks_logo.jpg',
    tools: 'Amazon EC2, Amazon Route 53, Apache, CSS, Flask, gunicorn, HTML, JavaScript, nginx, Python, SQL, Webflow',
    accomplishments: [
      'Winner as 6th place out of 1813 participants.',
      'Developed a platform for global League of Legends team rankings.',
      'Deployed back-end with Flask, Gunicorn, NGINX, AWS EC2, and Route 53.',
      'Implemented Principal Component Analysis and TrueSkill algorithms.',
      'Designed UI with Webflow and integrated Jetboot.'
    ],
    demoLink: 'https://devpost.com/software/rift-ranks',
    sourceLink: 'https://github.com/AlezHibali/RiftRanks'
  },
  {
    id: 2,
    title: 'Model Master',
    description: 'A comprehensive collection of AI models in various fields.',
    imageUrl: '/assets/img/444PRA/Model_Master_logo.jpg',
    tools: 'beautifulsoup, css, Flask, HTML, JavaScript, Nodejs, Python, SQL, TiDB, Webflow',
    accomplishments: [
      'Scrapes AI model data from Hugging Face into TiDB.',
      'Uses Flask to handle HTTP requests and interact with TiDB.',
      'Enable AI chatbot to help search for requested models.',
      'Presents data via Webflow and custom JavaScript.'
    ],
    demoLink: 'https://devpost.com/software/project_name-wf9l8d',
    sourceLink: 'https://github.com/AlezHibali/Model_Master_TiDB_Hackathon_2023'
  },
  // Add more projects as needed
];

// Function to generate HTML for a project
function generateProjectHTML(project) {
  return `
    <div class="col s12 m6 l4">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${project.title}" src="${project.imageUrl}" style="height: 100%; width: 100%" class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
          <p>${project.description}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
          <ul>
            <li><b>Tools:</b> ${project.tools}</li>
            ${project.accomplishments.map(accomplishment => `<li>${accomplishment}</li>`).join('')}
          </ul>
          <div class="card-action">
            <a aria-label="Visit" href="${project.demoLink}" target="_blank" data-position="top" data-tooltip="View Online" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>
            <a aria-label="Visit the GitHub repo for project" href="${project.sourceLink}" target="_blank" data-position="top" data-tooltip="View Source" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to display projects on the page
function displayProjects(startIndex, endIndex) {
  const projectContainer = document.querySelector('#projects-container');
  const projectsToDisplay = projects.slice(startIndex, endIndex);

  projectsToDisplay.forEach(project => {
    projectContainer.innerHTML += generateProjectHTML(project);
  });
}

// Handle the "Load More" button functionality
let currentIndex = 0;
const projectsPerPage = 1; // Number of projects to show per page

document.getElementById('load-more').addEventListener('click', () => {
  currentIndex += projectsPerPage;
  displayProjects(currentIndex, currentIndex + projectsPerPage);

  // Hide the button if no more projects to load
  if (currentIndex >= projects.length) {
    document.getElementById('load-more').style.display = 'none';
  }
});

// Initial load to show at least one project
displayProjects(currentIndex, currentIndex + projectsPerPage);
