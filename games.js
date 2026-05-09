// Games data stored as a constant
const gamesData = {
  "games": [
    {
      "name": "Math Kids Puzzle",
      "icon": "https://zeppelingamesstudio.github.io/OurGames/1.png",
      "link": "https://play.google.com/store/apps/details?id=com.zeppelingames.mathkidspuzzle",
      "description": "Interactive math puzzles that make learning numbers fun! Builds counting skills, logic, and includes fun surprises.",
      "age": "Ages 6-12",
      "tags": ["Math", "Puzzles", "Numbers"],
      "rating": "4.8",
      "downloads": "17k+"
    },
    {
      "name": "Coloring Game for Toddlers!",
      "icon": "https://zeppelingamesstudio.github.io/OurGames/7.png",
      "link": "https://play.google.com/store/apps/details?id=com.ZeppelinGames.KidsColoring",
      "description": "Creative coloring activities designed specifically for little hands. Develop fine motor skills while having fun!",
      "age": "Ages 6-8",
      "tags": ["Creative", "Colors", "Art"],
      "rating": "4.8",
      "downloads": "New"
    },
    {
      "name": "Memory Game For Kids",
      "icon": "https://zeppelingamesstudio.github.io/OurGames/6.png",
      "link": "https://play.google.com/store/apps/details?id=com.ZeppelinGames.MemoryGameForKids",
      "description": "Fun memory matching games that boost concentration and cognitive development through engaging gameplay.",
      "age": "Ages 6-12",
      "tags": ["Memory", "Concentration", "Brain Training"],
      "rating": "4.7",
      "downloads": "500+"
    },
    {
      "name": "Kids Coloring And Drawing",
      "icon": "https://zeppelingamesstudio.github.io/OurGames/5.png",
      "link": "https://play.google.com/store/apps/details?id=com.ZeppelinGames.Coloring",
      "description": "Advanced digital art tools that let kids express their creativity through coloring and free drawing.",
      "age": "Ages 6-12",
      "tags": ["Art", "Drawing", "Creativity"],
      "rating": "4.6",
      "downloads": "<500"
    },
    {
      "name": "Kids Puzzles Game",
      "icon": "https://zeppelingamesstudio.github.io/OurGames/3.png",
      "link": "https://play.google.com/store/apps/details?id=com.ZeppelinGames.KidsPuzzlesGame",
      "description": "Educational drag-and-drop puzzles that build problem-solving skills and spatial awareness through fun, interactive challenges.",
      "age": "Ages 6-12",
      "tags": ["Puzzles", "Logic", "Problem Solving"],
      "rating": "4.8",
      "downloads": "<500"
    },
    {
      "name": "House Builder For Kids",
      "icon": "https://zeppelingamesstudio.github.io/OurGames/4.png",
      "link": "https://play.google.com/store/apps/details?id=com.ZeppelinGames.HouseBuilderForKids",
      "description": "Construction simulation that teaches spatial awareness and planning skills through virtual building activities.",
      "age": "Ages 6-12",
      "tags": ["Building", "STEM", "Planning"],
      "rating": "4.7",
      "downloads": "<500"
    }
  ]
};

// Return the constant data directly
async function loadGamesData() {
  return gamesData;
}

// Populate games grid with data
async function populateGames() {
  const gamesGrid = document.getElementById('games-grid');
  const data = await loadGamesData();
  const games = data.games;

  gamesGrid.innerHTML = '';

  games.forEach((game, index) => {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card loading';

    gameCard.innerHTML = `
      <div class="game-image-container" style="--bg-image: url('${game.icon}')">
        <img src="${game.icon}" alt="${game.name}" class="game-icon" loading="lazy" onerror="this.style.display='none'">
      </div>
      <div class="game-content">
        <h3 class="game-title">${game.name}</h3>
        <p class="game-description">${game.description}</p>
        <div class="game-tags">
          ${game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
        </div>
        <div class="game-stats">
          <span class="game-stat">
            <i class="fas fa-child" aria-hidden="true"></i> ${game.age}
          </span>
          <span class="game-stat">
            <i class="fas fa-star" aria-hidden="true"></i> ${game.rating}
          </span>
          <span class="game-stat">
            <i class="fas fa-download" aria-hidden="true"></i> ${game.downloads}
          </span>
        </div>
        <a href="${game.link}" target="_blank" rel="noopener noreferrer" class="game-button">
          <i class="fab fa-google-play" aria-hidden="true"></i> Free Download
        </a>
      </div>
    `;

    gamesGrid.appendChild(gameCard);

    setTimeout(() => {
      gameCard.classList.add('visible');
    }, index * 150);
  });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        document.body.classList.remove('mobile-menu-open');
        document.querySelector('.mobile-menu-toggle')?.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      document.body.classList.toggle('mobile-menu-open');
    });
  }
}

// Back to top button
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function () {
  console.log('Initializing games...');
  populateGames().catch(err => {
    console.error('Error loading games:', err);
    document.getElementById('games-grid').innerHTML = '<p style="text-align:center;padding:2rem;">Loading games...</p>';
  });
  initSmoothScrolling();
  initMobileMenu();
  initBackToTop();
});
