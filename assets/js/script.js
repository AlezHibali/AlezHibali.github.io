const projects = [
  {
    title: 'AI Interview Training Coach',
    repoName: 'Interactive-Interview-Practice-with-Higgs',
    summary: 'Speech-enabled interview practice with resume-based questions, response analysis, and personalized coaching.',
    category: 'LLM · RAG · AUDIO',
    coverMark: 'HIGGS',
    theme: 'higgs',
    visibility: 'Public',
    tools: 'Python, Flask, GPT-4o-mini, LangChain, RAG, Higgs Audio V2',
    descriptions: [
      'Generates interview questions from a candidate resume and supports interactive practice.',
      'Analyzes response content and delivery, then provides follow-up questions and coaching.',
      'Built for the Boson AI / Higgs Audio V2 hackathon.'
    ],
    demoLink: 'https://www.youtube.com/watch?v=Xpx6502MAKA',
    sourceLink: 'https://github.com/AlezHibali/Interactive-Interview-Practice-with-Higgs'
  },
  {
    title: 'TD Sentiment Analysis',
    repoName: 'TD-Sentiment-Analysis',
    summary: 'Turns interview transcripts and field notes into sentiment patterns, visualizations, and structured outputs.',
    category: 'NLP · RESEARCH TOOLS',
    coverMark: 'TEXT',
    theme: 'sentiment',
    visibility: 'Public',
    tools: 'Python 3.12, NLP, text processing, data visualization, Node.js',
    descriptions: [
      'Processes English .docx and .txt files for researchers.',
      'Surfaces sentiment patterns and social attitudes in qualitative text.',
      'Produces visualizations and structured output for further analysis.'
    ],
    demoLink: 'https://drive.google.com/file/d/1aPR0bBvbtzeYg_N4X5Rj7AdHWiEHUfeO/view?usp=sharing',
    sourceLink: 'https://github.com/AlezHibali/TD-Sentiment-Analysis'
  },
  {
    title: 'MaaAssistantArknights Contribution',
    repoName: 'MaaAssistantArknights',
    summary: 'Merged WPF interface contribution for selecting and reviewing recruitment priority tags.',
    category: 'OPEN SOURCE · WPF',
    coverMark: 'MAA',
    theme: 'maa',
    visibility: 'Public fork',
    tools: 'C#, WPF, XAML, UI localization',
    descriptions: [
      'Replaced manual priority-tag text entry with a CheckComboBox for multi-select.',
      'Added a ListBox that keeps selected tags visible and easier to review.',
      'Updated localization and submitted the change in merged PR #11097.'
    ],
    sourceLink: 'https://github.com/AlezHibali/MaaAssistantArknights',
    contributionLink: 'https://github.com/MaaAssistantArknights/MaaAssistantArknights/pull/11097'
  },
  {
    title: 'VCT Team Strategy Assistant',
    repoName: '2024-October-VCT-Hackathon',
    summary: 'Valorant esports assistant for team and player analysis, with map-aware recommendations and recent match data.',
    category: 'GENERATIVE AI · ESPORTS',
    coverMark: 'VCT',
    theme: 'vct',
    visibility: 'Private repository',
    visibilityClass: 'private',
    sourcePrivate: true,
    tools: 'Amazon Bedrock Agents, AWS Lambda, Flask, VLR match data',
    descriptions: [
      'Selected as a top 25 finalist from 3,295 hackathon participants.',
      'Built a Valorant team-planning assistant with map-specific agent analysis.',
      'Added session-aware chat history and recent competitive performance data.'
    ],
    demoLink: 'https://www.youtube.com/watch?v=jdHyaDYFnfo',
    sourceLink: 'https://github.com/AlezHibali/2024-October-VCT-Hackathon'
  },
  {
    title: 'RiftRanks',
    repoName: 'RiftRanks',
    summary: 'Professional League of Legends team rankings built from match data and an end-to-end analytics service.',
    category: 'DATA · ESPORTS ANALYTICS',
    coverMark: 'RIFT',
    theme: 'rift',
    visibility: 'Public',
    tools: 'PCA, TrueSkill, Flask, AWS EC2, Route 53, S3, TiDB',
    descriptions: [
      'Analyzes three years of professional League of Legends matches.',
      'Combines Principal Component Analysis with TrueSkill ranking methods.',
      'Deployed Flask APIs and data services on AWS.'
    ],
    demoLink: 'https://riftranks.webflow.io/',
    sourceLink: 'https://github.com/AlezHibali/RiftRanks'
  },
  {
    title: 'Model Master',
    repoName: 'Model_Master_TiDB_Hackathon_2023',
    summary: 'Searchable Hugging Face model catalog with practical filters, model cards, and saved favorites.',
    category: 'AI DISCOVERY · SEARCH',
    coverMark: 'MODEL',
    theme: 'model',
    visibility: 'Public',
    tools: 'Hugging Face, Flask, TiDB, Webflow, JavaScript',
    descriptions: [
      'Collects model metadata such as task, size, language, and popularity.',
      'Uses TiDB and a Flask API to support model discovery and search.',
      'Adds account-based favorites and custom model cards.'
    ],
    demoLink: 'https://devpost.com/software/project_name-wf9l8d',
    sourceLink: 'https://github.com/AlezHibali/Model_Master_TiDB_Hackathon_2023'
  }
];

function createAction(url, label, icon) {
  if (!url) return '';
  return `<a class="project-action" href="${url}" target="_blank" rel="noopener noreferrer">
    <i class="fa ${icon}" aria-hidden="true"></i><span>${label}</span>
  </a>`;
}

function generateProjectHTML(project, index) {
  const visibilityClass = project.visibilityClass ? ` ${project.visibilityClass}` : '';
  const sourceLabel = project.sourcePrivate ? 'Private source' : 'Source code';
  const actions = [
    createAction(project.demoLink, 'View demo', 'fa-external-link'),
    createAction(project.sourceLink, sourceLabel, 'fa-github'),
    createAction(project.contributionLink, 'Merged PR #11097', 'fa-code-fork')
  ].filter(Boolean).join('');

  return `
    <div class="col s12 m6 l4">
      <article class="card medium project-card">
        <div class="card-image project-cover cover-${project.theme}" role="img" aria-label="${project.category} project cover">
          <span class="project-cover-category">${project.category}</span>
          <strong class="project-cover-mark">${project.coverMark}</strong>
          <span class="project-cover-index">0${index + 1} / 06</span>
        </div>
        <div class="card-content">
          <span class="project-visibility${visibilityClass}">${project.visibility}</span>
          <p class="project-repo">${project.repoName}</p>
          <span class="card-title project-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right" aria-hidden="true"></i></span>
          <p class="project-summary">${project.summary}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title project-reveal-title grey-text">Project details<i class="mdi-navigation-close right" aria-hidden="true"></i></span>
          <p class="project-tools"><b>Tools:</b> ${project.tools}</p>
          <ul>${project.descriptions.map(description => `<li>${description}</li>`).join('')}</ul>
          ${project.sourcePrivate ? '<p class="private-source-note">The source repository is private.</p>' : ''}
          <div class="project-actions">${actions}</div>
        </div>
      </article>
    </div>`;
}

function displayProjects() {
  const projectContainer = document.querySelector('#projects-container');
  projectContainer.innerHTML = projects.map(generateProjectHTML).join('');
}

displayProjects();
