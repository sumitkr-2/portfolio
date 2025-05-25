const skill = [
    {
        title: "HTML Developer",
        description: "Designed semantic and accessible web pages using modern HTML standards.",
        image: "images/html.png"
    },
    {
        title: "CSS Designer",
        description: "Styled responsive layouts and animations using CSS3 and Flexbox/Grid systems.",
        image: "images/css.png"
    },
    {
      title: "JavaScript Programmer",
      description: "Developed dynamic and interactive web components using vanilla JavaScript and DOM manipulation.",
      image: "images/javascript.png"
    },
   {
  title: "Node.js Developer",
  description: "Built scalable server-side applications and RESTful APIs using Node.js and Express.js.",
  image: "images/node.png"
},

    {
      title: "C/C++ Developer",
      description: "Developed data structures and algorithms using C++ for competitive programming and system-level programming.",
      image: "images/cpp.png"
    },
    {
      title: "Python Developer",
      description: "Built automation scripts, web scrapers, and data analysis tools using Python.",
      image: "images/python.png"
    },
    {
      title: "Django Developer",
      description: "Built web applications with Django framework including REST APIs and templates.",
      image: "images/django.png"
    },
    {
      title: "Flask Developer",
      description: "Created lightweight RESTful APIs and backend services using Flask framework.",
      image: "images/flask.png"
    },
    {
      title: "MySQL Developer",
      description: "Designed relational databases and wrote optimized SQL queries for data retrieval and manipulation.",
      image: "images/mysql.png"
    },
  {
    title: "CI/CD Pipeline",
    description: "Implemented continuous integration and deployment workflows using GitHub Actions and Jenkins.",
    image: "images/cicd.png"
  },
  {
    title: "DSA Learner",
    description: "Solved 200+ problems on Leetcode and GFG to strengthen algorithmic thinking and problem-solving.",
    image: "images/dsa.png  "
  },
  {
    title: "Excel Analyst",
    description: "Performed data analysis and visualization using Excel functions, pivot tables, and charts.",
    image: "images/excel.png"
  },
  {
    title: "Jenkins Integrator",
    description: "Automated builds and deployments using Jenkins pipelines and integrations.",
    image: "images/jenkins.png"
  },
  {
    title: "Presentation Designer",
    description: "Created engaging presentations using Microsoft PowerPoint for academic and professional use.",
    image: "images/powerpoint.png"
  }
];


const container = document.getElementById("cards-container");

skill.forEach((exp, index) => {
  const cardCol = document.createElement("div");
  cardCol.className = "col-md-6 col-lg-4 fade-in";
  cardCol.style.animationDelay = `${index * 0.1}s`; // Staggered animation

  cardCol.innerHTML = `
    <div class="card custom-card h-100">
      <img src="${exp.image}" class="card-img-top skill" alt="${exp.title}">
      <div class="card-body text-start">
        <h5 class="card-title">${exp.title}</h5>
        <p class="card-text">${exp.description}</p>
      </div>
    </div>
  `;
  container.appendChild(cardCol);
});


const toggleBtn = document.getElementById("toggle-button");
const cardsContainer = document.getElementById("cards-container");

let expanded = false;

toggleBtn.addEventListener("click", () => {
  expanded = !expanded;
  cardsContainer.style.maxHeight = expanded ? "3000px" : "750px";
  toggleBtn.textContent = expanded ? "Show Less" : "Show More";
});


  const words = ["Sumit Kumar", "Aspiring Fullstack Developer", "Computer Science Student", "Tech Enthusiast"];

  let i = 0;

  function typeText() {
    document.getElementById("typed-text").textContent = words[i];
    i = (i + 1) % words.length;
  }

  typeText();
  setInterval(typeText, 4000); // Change word every 4 seconds


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.custom-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// for experience section
window.addEventListener('DOMContentLoaded', () => {
  const experiences = [
    {
      title: "Executive Member, Content head",
      company: "Upvison TechClub",
      duration: "(Sep 2024 – Present)",
      description: "Led content strategies and team collaboration for events, workshops, and technical writing. Developed structured content plans and mentored juniors.",
      image: "images/upvision_logo.png" // logo for Upvison TechClub
    },
    {
      title: "Software Development Engineer Intern",
      company: "Skillcraft Technology",
      duration: "(Aug 2024 – Sept 2024)",
      description: "Worked on backend development, optimized APIs, and contributed to a scalable web application using Python and Django. also worked on frontend development using React.js.",
      image: "images/skillcraft_logo.jpg" // skillcraft Technology logo
    }
  ];

  const container = document.getElementById("experienceCardsContainer");

  experiences.forEach(exp => {
    const card = document.createElement("div");
    card.className = "col-md-6 animate__animated animate__fadeInUp";

    card.innerHTML = `
      <div class="card h-100 border-0 shadow transition-effect">
        <img src="${exp.image}" class="card-img-top" alt="${exp.company} logo" style="height: 200px; object-fit: contain; padding: 1rem;">
        <div class="card-body">
          <h5 class="card-title text-primary fw-bold ">${exp.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${exp.company}</h6>
          <p class="card-text small text-secondary">${exp.duration}</p>
          <p class="card-text">${exp.description}</p>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
});


//background styling
const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Stars with parallax depth
const layers = [[], [], []];
for (let i = 0; i < 300; i++) {
  const layer = layers[Math.floor(Math.random() * layers.length)];
  layer.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 0.5 + Math.random() * 1.5,
    speed: 0.1 + Math.random() * 0.5,
    alpha: 0.2 + Math.random() * 0.6,
    pulsePhase: Math.random() * 2 * Math.PI
  });
}

// Orbiting satellites
const satellites = [
  {
    radius: 200,
    angle: 0,
    speed: 0.004,
    size: 8,
    color: '#00FFFF',
    trail: [],
    trailColor: 'rgba(0, 255, 255, 0.2)'
  },
  {
    radius: 280,
    angle: Math.PI,
    speed: 0.002,
    size: 12,
    color: '#FF66FF',
    trail: [],
    trailColor: 'rgba(255, 102, 255, 0.2)'
  }
];

// Galaxy center glow
function drawGalaxyCore() {
  const grad = ctx.createRadialGradient(
    canvas.width / 2, canvas.height / 2, 0,
    canvas.width / 2, canvas.height / 2, 300
  );
  grad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
  grad.addColorStop(1, 'rgba(0, 0, 40, 0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 300, 0, 2 * Math.PI);
  ctx.fill();
}

function drawStars(time) {
  layers.forEach((stars, index) => {
    for (let star of stars) {
      star.alpha = 0.3 + Math.sin(time * 0.002 + star.pulsePhase) * 0.3;
      ctx.beginPath();
      ctx.globalAlpha = star.alpha;
      ctx.fillStyle = 'white';
      ctx.shadowBlur = 5;
      ctx.shadowColor = 'white';
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fill();

      // Move for parallax
      star.x -= star.speed * (0.3 + index * 0.3);
      if (star.x < 0) star.x = canvas.width;
    }
  });
  ctx.globalAlpha = 1;
}

function drawSatellites() {
  for (let sat of satellites) {
    const x = canvas.width / 2 + sat.radius * Math.cos(sat.angle);
    const y = canvas.height / 2 + sat.radius * Math.sin(sat.angle);
    sat.angle += sat.speed;

    // Add trail
    sat.trail.push({ x, y });
    if (sat.trail.length > 30) sat.trail.shift();

    // Draw trail
    ctx.beginPath();
    for (let i = 0; i < sat.trail.length - 1; i++) {
      const p1 = sat.trail[i];
      const p2 = sat.trail[i + 1];
      ctx.strokeStyle = sat.trailColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = i / sat.trail.length;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    // Draw satellite
    ctx.beginPath();
    ctx.shadowColor = sat.color;
    ctx.shadowBlur = 15;
    ctx.fillStyle = sat.color;
    ctx.globalAlpha = 1;
    ctx.arc(x, y, sat.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}
// Floating image objects
const floatingImages = [
  {
    src: "images/rocket.png",
    x: 100,
    y: 100,
    dx: 0.3,
    dy: 0.2,
    img: new Image()
  },
  {
    src: "images/hubble.png",
    x: 300,
    y: 200,
    dx: -0.2,
    dy: 0.1,
    img: new Image()
  },
  {
    src: "images/apollo.png",
    x: 500,
    y: 300,
    dx: 0.1,
    dy: -0.3,
    img: new Image()
  }
];

floatingImages.forEach(obj => {
  obj.img.src = obj.src;
});

// Draw floating images
function drawFloatingImages() {
  for (let obj of floatingImages) {
    const width = 60;
    const height = 60;


    
    ctx.drawImage(obj.img, obj.x, obj.y, width, height);

    obj.x += obj.dx;
    obj.y += obj.dy;

    // Wrap around screen edges
    if (obj.x > canvas.width) obj.x = -width;
    if (obj.x < -width) obj.x = canvas.width;
    if (obj.y > canvas.height) obj.y = -height;
    if (obj.y < -height) obj.y = canvas.height;
  }
}


function draw(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background space gradient
  const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bg.addColorStop(0, '#000010');
  bg.addColorStop(1, '#000000');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawStars(time);
  drawGalaxyCore();
  drawSatellites();
drawFloatingImages();

  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);


//particle effect

  // particlesJS('particles-js', 
  //   {
  //     "particles": {
  //       "number": {
  //         "value": 80,
  //         "density": {
  //           "enable": true,
  //           "value_area": 800
  //         }
  //       },
  //       "color": {
  //         "value": "#ffffff"
  //       },
  //       "shape": {
  //         "type": "circle"
  //       },
  //       "opacity": {
  //         "value": 0.5
  //       },
  //       "size": {
  //         "value": 3
  //       },
  //       "line_linked": {
  //         "enable": true,
  //         "distance": 150,
  //         "color": "#ffffff",
  //         "opacity": 0.4,
  //         "width": 1
  //       },
  //       "move": {
  //         "enable": true,
  //         "speed": 4,
  //         "direction": "none",
  //         "random": false,
  //         "straight": false,
  //         "out_mode": "out"
  //       }
  //     },
  //     "interactivity": {
  //       "detect_on": "canvas",
  //       "events": {
  //         "onhover": {
  //           "enable": true,
  //           "mode": "repulse"
  //         },
  //         "onclick": {
  //           "enable": true,
  //           "mode": "push"
  //         }
  //       },
  //       "modes": {
  //         "repulse": {
  //           "distance": 100,
  //           "duration": 0.4
  //         },
  //         "push": {
  //           "particles_nb": 4
  //         }
  //       }
  //     },
  //     "retina_detect": true
  //   }
  // );

//form 
 
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submit/reload
    
    const form = e.target;
    const status = document.getElementById('form-status');
    
    // Collect form data
    const formData = new FormData(form);
    
    // Example: Send data to Google Forms or your backend API
    // Replace URL below with your form handler endpoint
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeSTPEwLs2vWg45Qvir8M_Piz2jtP5o7H163Rj1IOyUefq-YQ/formResponse';
    
    // Construct URL parameters from formData for Google Forms (if used)
    const params = new URLSearchParams();
    formData.forEach((value, key) => params.append(key, value));
    
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',  // Google Forms requires no-cors for fetch POST
      body: params
    }).then(() => {
      // Show success message
      status.style.display = 'block';
      status.textContent = 'Message sent successfully!';
      status.style.color = 'green';
      form.reset();
    }).catch(() => {
      // Show error message
      status.style.display = 'block';
      status.textContent = 'Oops! Something went wrong.';
      status.style.color = 'red';
    });
  });




// Scroll to top button functionality
