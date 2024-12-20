// project list
const projects = [
  {
    title: 'ValoPlanner',
    summary: 'Webpage to Experience Powerful and Convincing Ranking System and Seamless Navigation',
    imageUrl: '/assets/img/444PRA/valoplanner_logo.jpg',
    tools: 'Amazon Bedrock, CodePipepline, Lambda, EC2, CSS, Flask, waitress, HTML, JavaScript, Python',
    descriptions: [
      'Top 25 finalist out of 3295 participants, winners to be announced in December 2024.',
      'Designed and implemented an LLM-powered digital assistant.',
      'Leveraged extensive data and utilized AWS Lambda and Bedrock to tune LLM agent.',
      'Continuous deployment via AWS CodePipeline and CodeDeploy',
      'Final report: https://drive.google.com/file/d/18IluqYHskcRQp12X4Z4pNzl6kuzy7iNk/view'
    ],
    demoLink: 'https://devpost.com/software/edg-learning',
    sourceLink: 'https://github.com/AlezHibali/2024-October-VCT-Hackathon',
    timestamp: new Date('2024-10-01')
  },
  {
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
  {
    title: 'EMOXT',
    summary: 'Transcribe recorded and add emojis using machine learning.',
    imageUrl: '/assets/img/444PRA/EMOXT_logo.jpg',
    tools: 'Flask, HTML, JavaScript, css, Python, Assembly.ai',
    descriptions: [
      'Transcribes audio using Assembly.ai.',
      'Detects emotions in the transcribed text.',
      'Inserts emojis based on detected emotions.',
      'Integrates frontend and backend with Flask.'
    ],
    demoLink: 'https://devpost.com/software/emoxt',
    sourceLink: 'https://github.com/AlezHibali/TOHack2022_EMOXT',
    timestamp: new Date('2022-05-01')
  }
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
          <p>${project.summary}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text"><small>descriptions</small><i class="mdi-navigation-close right"></i></span>
          <ul>
            <li><b>Tools:</b> ${project.tools}</li>
            ${project.descriptions.map(description => `<li>${description}</li>`).join('')}
          </ul>
          <div class="card-action">
            <a aria-label="Visit" href="${project.demoLink}" target="_blank" data-position="top" data-tooltip="View Online" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>
            <a aria-label="Visit the GitHub repo for project" href="${project.sourceLink}" target="_blank" data-position="top" data-tooltip="View Source" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>`
  ;
}

// Sorting by timestamp (most recent first)
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

let currentIndex = 1;
const projectsPerPage = 1; // # projects to show per click
const totalProjects = projects.length; // total # projects

document.getElementById('load-more').addEventListener('click', () => {
  // handle Show Less function to show one project only
  if (currentIndex >= totalProjects) {
    currentIndex = 1;
    displayProjects(0, currentIndex);
    document.getElementById('load-more').textContent = 'Load More';
  }
  else {
    // Display new projects and increment currentIndex
    displayProjects(0, currentIndex + projectsPerPage);
    currentIndex += projectsPerPage;

    // Switch Buttons between Show Less and Load More
    if (currentIndex >= totalProjects) {
      document.getElementById('load-more').textContent = 'Show Less';
    }
  }
});

displayProjects(0, currentIndex);
