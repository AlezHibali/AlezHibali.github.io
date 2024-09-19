const projects = [
  {
    id: 1,
    title: 'Rift Ranks',
    summary: 'Webpage to Experience Powerful and Convincing Ranking System and Seamless Navigation',
    imageUrl: '/assets/img/444PRA/rift_ranks_logo.jpg',
    tools: 'Amazon EC2, Amazon Route 53, Apache, CSS, Flask, gunicorn, HTML, JavaScript, nginx, Python, SQL, Webflow',
    descriptions: [
      'Winner as 6th place out of 1813 participants.',
      'Developed a platform for global League of Legends team rankings.',
      'Deployed back-end with Flask, Gunicorn, NGINX, AWS EC2, and Route 53.',
      'Implemented Principal Component Analysis and TrueSkill algorithms.',
      'Designed UI with Webflow and integrated Jetboot.'
    ],
    demoLink: 'https://devpost.com/software/rift-ranks',
    sourceLink: 'https://github.com/AlezHibali/RiftRanks',
    timestamp: new Date('2023-08-01')
  },
  {
    id: 2,
    title: 'Model Master',
    summary: 'A comprehensive collection of AI models in various fields.',
    imageUrl: '/assets/img/444PRA/Model_Master_logo.jpg',
    tools: 'beautifulsoup, css, Flask, HTML, JavaScript, Nodejs, Python, SQL, TiDB, Webflow',
    descriptions: [
      'Scrapes AI model data from Hugging Face into TiDB.',
      'Uses Flask to handle HTTP requests and interact with TiDB.',
      'Enable AI chatbot to help search for requested models.',
      'Presents data via Webflow and custom JavaScript.'
    ],
    demoLink: 'https://devpost.com/software/project_name-wf9l8d',
    sourceLink: 'https://github.com/AlezHibali/Model_Master_TiDB_Hackathon_2023',
    timestamp: new Date('2023-06-01')
  },
  // Add more projects with timestamps as needed
];

// Function to sort projects by timestamp (most recent first)
function sortProjectsByDate(projects) {
  return projects.sort((a, b) => b.timestamp - a.timestamp);
}

// Function to display projects on the page
function displayProjects(startIndex, endIndex) {
  const projectContainer = document.querySelector('#projects-container');
  projectContainer.innerHTML = ''; // Clear existing content
  const sortedProjects = sortProjectsByDate(projects); // Sort projects
  const projectsToDisplay = sortedProjects.slice(startIndex, endIndex);
  
  projectsToDisplay.forEach(project => {
    projectContainer.innerHTML += generateProjectHTML(project);
  });
}

// Handle the "Load More / Show Less" button functionality
let currentIndex = 1; // Start with the first project displayed
const projectsPerPage = 1; // Number of projects to show per click
const totalProjects = projects.length; // Total number of projects

document.getElementById('load-more').addEventListener('click', () => {
  if (currentIndex < totalProjects) {
    displayProjects(0, currentIndex + projectsPerPage); // Show projects from index 0 to currentIndex + 1
    currentIndex += projectsPerPage; // Increment the current index
  }

  // If all projects are shown, hide the button
  if (currentIndex >= totalProjects) {
    document.getElementById('load-more').style.display = 'none';
  }

  // Change the button text if showing all projects
  if (currentIndex === totalProjects) {
    document.getElementById('load-more').textContent = 'Show Less';
  }
});

// Handle Show Less functionality
document.getElementById('load-more').addEventListener('dblclick', () => {
  currentIndex = Math.max(currentIndex - projectsPerPage, 1); // Decrement the current index but not below 1
  displayProjects(0, currentIndex); // Show projects up to the new current index
  document.getElementById('load-more').style.display = 'block'; // Show the button again

  // Change button text back to "Load More"
  if (currentIndex < totalProjects) {
    document.getElementById('load-more').textContent = 'Load More';
  }
});

// Initial load to show the first project
displayProjects(0, currentIndex);
