const navTree = [
  {
    id: "start-here",
    title: "Start Here",
    icon: "S",
    children: [
      { id: "which-licence", title: "Which Licence Do I Need?" },
      { id: "new-to-alberta", title: "New to Alberta?" },
      { id: "disability-driving", title: "Driving With a Disability" },
      { id: "pathway", title: "Licence Pathway Tool" }
    ]
  },
  { id: "class-7", title: "Class 7 Learner", icon: "7" },
  { id: "class-5", title: "Class 5 / Class 5-GDL", icon: "5" },
  { id: "class-6", title: "Class 6 Motorcycle", icon: "6" },
  {
    id: "commercial",
    title: "Commercial Licences",
    icon: "C",
    children: [
      { id: "class-1", title: "Class 1" },
      { id: "class-2", title: "Class 2" },
      { id: "class-3", title: "Class 3" },
      { id: "class-4", title: "Class 4" }
    ]
  },
  {
    id: "learning-centre",
    title: "Shared Learning Centre",
    icon: "L",
    children: [
      { id: "road-signs", title: "Road Signs" },
      { id: "rules-road", title: "Rules of the Road" },
      { id: "parking", title: "Parking" },
      { id: "intersections", title: "Intersections" },
      { id: "winter-driving", title: "Winter Driving" },
      { id: "emergencies", title: "Emergencies" },
      { id: "demerit-points", title: "Demerit Points" },
      { id: "safe-driving", title: "Safe Driving" }
    ]
  },
  { id: "practice-tests", title: "Practice Tests", icon: "P" },
  { id: "road-test", title: "Road Test Preparation", icon: "R" },
  { id: "accessibility", title: "Accessibility & Disabled Drivers", icon: "A" },
  { id: "official-resources", title: "Official Alberta Resources", icon: "O" },
  { id: "my-progress", title: "My Progress", icon: "M" }
];

const pages = {
  dashboard: {
    title: "Alberta Driving Study Hub",
    summary: "A guided workspace for Alberta licence study, practice, road-test readiness, accessibility planning, and official resources.",
    highlights: ["Start with the pathway tool", "Study by licence class", "Review shared driving topics", "Track completion locally"],
    cards: ["start-here", "class-7", "class-5", "class-6", "commercial", "learning-centre", "accessibility", "practice-tests", "road-test"]
  },
  "start-here": {
    title: "Start Here",
    summary: "Orient yourself before studying. Choose the licence you need, account for previous driving experience, and identify accommodation needs early.",
    highlights: ["Pick the correct licence class", "Review newcomer exchange rules", "Plan adapted-driving supports", "Use the pathway tool"],
    cards: ["which-licence", "new-to-alberta", "disability-driving", "pathway"]
  },
  "which-licence": {
    title: "Which Licence Do I Need?",
    summary: "Match the vehicle or work you want to do with the licence class Alberta requires.",
    highlights: ["Class 7 starts supervised learning", "Class 5 covers most personal cars, vans, and light trucks", "Class 6 is for motorcycles", "Classes 1 to 4 cover commercial driving"],
    tags: ["vehicle type", "eligibility", "career paths"]
  },
  "new-to-alberta": {
    title: "New to Alberta?",
    summary: "If you are moving from another province or country, check whether you can exchange your current licence or need testing.",
    highlights: ["Bring acceptable ID", "Confirm residency requirements", "Check reciprocal exchange rules", "Plan for knowledge or road tests if required"],
    official: "https://www.alberta.ca/exchange-non-alberta-licences"
  },
  "disability-driving": {
    title: "Driving With a Disability",
    summary: "Plan for medical review, vehicle adaptations, placards, and training supports before booking tests.",
    highlights: ["Ask early about medical reports", "Consider adapted vehicle training", "Confirm road-test vehicle suitability", "Review parking placard options"],
    official: "https://www.alberta.ca/get-parking-placard-persons-disabilities"
  },
  pathway: {
    title: "Licence Pathway Tool",
    summary: "Answer three questions to see the most likely Alberta licence study path.",
    isTool: true
  },
  "class-7": {
    title: "Class 7 Learner",
    summary: "Class 7 lets you drive a Class 5 vehicle under supervision and operate a moped. Alberta lists midnight to 5 am, zero alcohol, seat-belt, and 8-demerit suspension limits for learners.",
    highlights: ["Study the driver's guide", "Take the knowledge test at a registry agent", "Pass the vision test", "Drive only with qualified supervision"],
    official: "https://www.alberta.ca/class-7-learners-licence",
    tags: ["knowledge test", "supervised driving", "learner restrictions"]
  },
  "class-5": {
    title: "Class 5 / Class 5-GDL",
    summary: "Class 5 covers most cars, trucks, and vans. Alberta no longer requires the advanced road test to exit GDL as of April 1, 2023.",
    highlights: ["Class 5-GDL requires Class 7 experience and a road test", "Full Class 5 requires age and probationary-period requirements", "GDL drivers must maintain zero drug or alcohol level", "GDL drivers cannot accompany a learner"],
    official: "https://www.alberta.ca/class-5-drivers-licence",
    tags: ["road test", "GDL", "full licence"]
  },
  "class-6": {
    title: "Class 6 Motorcycle",
    summary: "Class 6 is the motorcycle licence path. Study motorcycle-specific controls, visibility, lane position, balance, and hazard management.",
    highlights: ["Confirm eligibility before booking", "Study the motorcycle guide", "Practise low-speed control", "Prepare protective gear and an eligible motorcycle for testing"],
    official: "https://www.alberta.ca/class-6-motorcycle-licence",
    tags: ["motorcycle", "road test", "protective gear"]
  },
  commercial: {
    title: "Commercial Licences",
    summary: "Classes 1 to 4 cover commercial vehicles and passenger transport. Requirements vary by class, medical eligibility, air brakes, training, and road-test needs.",
    highlights: ["Class 1: tractor-trailers", "Class 2: buses", "Class 3: heavy trucks", "Class 4: taxis, ambulances, and small buses"],
    official: "https://www.alberta.ca/upgrade-commercial-licence",
    cards: ["class-1", "class-2", "class-3", "class-4"]
  },
  "class-1": {
    title: "Class 1",
    summary: "For tractor-trailers and semi-trailer combinations. Plan for commercial knowledge testing, medical requirements, and mandatory training where applicable.",
    highlights: ["Heavy combination vehicles", "Air brake knowledge may be needed", "Road test preparation should include coupling, inspections, and backing"]
  },
  "class-2": {
    title: "Class 2",
    summary: "For buses and larger passenger vehicles. Focus study on passenger safety, inspections, mirrors, turns, and stopping distance.",
    highlights: ["Passenger-transport responsibilities", "School bus endorsement may be separate", "Route awareness and defensive driving matter"]
  },
  "class-3": {
    title: "Class 3",
    summary: "For heavy straight-body trucks. Study vehicle inspections, air brakes when applicable, space management, and load security.",
    highlights: ["More than two axles", "Pre-trip inspections", "Weight, turning, and braking differences"]
  },
  "class-4": {
    title: "Class 4",
    summary: "For taxis, ambulances, small buses, and similar passenger-service vehicles. Focus on passenger care and professional driving.",
    highlights: ["Passenger safety", "Customer-facing driving", "Medical or background requirements may apply"]
  },
  "learning-centre": {
    title: "Shared Learning Centre",
    summary: "Core knowledge that applies across licence paths. Use these topics before taking a knowledge test and again before the road test.",
    highlights: ["Signs and signals", "Right-of-way decisions", "Parking and intersections", "Winter and emergency driving"],
    cards: ["road-signs", "rules-road", "parking", "intersections", "winter-driving", "emergencies", "demerit-points", "safe-driving"]
  },
  "road-signs": {
    title: "Road Signs",
    summary: "Learn regulatory, warning, guide, construction, school-zone, and railway signs by shape, colour, and action required.",
    highlights: ["Red means stop or prohibition", "Yellow warns of conditions ahead", "Orange signals construction", "Green and blue guide services and routes"]
  },
  "rules-road": {
    title: "Rules of the Road",
    summary: "Review speed, lane use, signalling, following distance, passing, school zones, emergency vehicles, and sharing the road.",
    highlights: ["Signal early", "Keep space cushions", "Match speed to conditions", "Yield based on signs, signals, and right-of-way rules"]
  },
  parking: {
    title: "Parking",
    summary: "Practise parallel, hill, angle, and stall parking. Know restrictions around hydrants, crosswalks, intersections, bus zones, and accessible stalls.",
    highlights: ["Check mirrors and blind spots", "Control speed with small corrections", "Know uphill and downhill wheel direction", "Read posted restrictions"]
  },
  intersections: {
    title: "Intersections",
    summary: "Most test errors come from observation, lane choice, right-of-way, turns, stops, and gap judgment at intersections.",
    highlights: ["Stop fully where required", "Scan left, centre, right, then left again", "Enter only when the path is clear", "Watch pedestrians and cyclists"]
  },
  "winter-driving": {
    title: "Winter Driving",
    summary: "Alberta conditions can change quickly. Build habits around traction, visibility, longer stopping distance, and smooth control.",
    highlights: ["Clear snow and ice before driving", "Increase following distance", "Brake and steer smoothly", "Carry winter emergency supplies"]
  },
  emergencies: {
    title: "Emergencies",
    summary: "Prepare for skids, tire failure, brake issues, engine trouble, collisions, wildlife, and roadside stops.",
    highlights: ["Stay calm and look where you want to go", "Move out of traffic when safe", "Use hazard lights", "Call for help when needed"]
  },
  "demerit-points": {
    title: "Demerit Points",
    summary: "Demerit points can trigger suspensions. Learner and GDL drivers have lower suspension thresholds than fully licensed drivers.",
    highlights: ["Track convictions, not just tickets", "Learner and GDL thresholds are stricter", "Safe habits protect your licence", "Check official Alberta rules for current thresholds"]
  },
  "safe-driving": {
    title: "Safe Driving",
    summary: "Safe driving is a routine: scan, predict, communicate, manage speed, leave space, and avoid impairment and distraction.",
    highlights: ["Scan far ahead", "Check mirrors often", "Avoid phone use", "Choose patience over risky gaps"]
  },
  "practice-tests": {
    title: "Practice Tests",
    summary: "Use short sets to reinforce knowledge. These sample questions are for study support only and are not official Alberta exam questions.",
    isQuiz: true
  },
  "road-test": {
    title: "Road Test Preparation",
    summary: "Prepare your vehicle, documents, route awareness, and calm execution before test day.",
    highlights: ["Confirm eligibility and documents", "Use a safe, legal test vehicle", "Practise shoulder checks and lane changes", "Review parking, intersections, and speed control"],
    official: "https://www.alberta.ca/road-test"
  },
  accessibility: {
    title: "Accessibility & Disabled Drivers",
    summary: "A dedicated study and planning area for disabled drivers, adapted vehicles, medical review, test accommodations, parking placards, and accessible learning tools.",
    highlights: ["Adapted controls may require assessment", "Medical reports may be requested", "Parking placards have their own application process", "Road tests must use an appropriate vehicle"],
    tags: ["disabled drivers", "adapted vehicles", "test accommodations", "parking placards"],
    official: "https://www.alberta.ca/get-parking-placard-persons-disabilities",
    featureGroups: [
      {
        title: "Adapted Driving Checklist",
        items: [
          "Vehicle modification checklist for hand controls, steering aids, pedal extensions, ramps, lifts, and wheelchair transfer needs",
          "Road-test preparation notes for using an adapted vehicle safely and consistently",
          "Reminder to confirm whether a medical report, assessment, or specialist documentation is needed before booking"
        ]
      },
      {
        title: "Accessible Study Tools",
        items: [
          "Large-text study mode for signs, rules, and practice questions",
          "Audio-friendly lesson summaries that can be read aloud by screen readers",
          "Keyboard-friendly practice tests with clear focus states and no time pressure"
        ]
      },
      {
        title: "Testing & Registry Support",
        items: [
          "Accommodation planning prompts for knowledge tests, road tests, communication supports, and extra setup time",
          "Registry visit checklist for ID, residency documents, medical forms, and vehicle documents",
          "Clear links to official Alberta resources before applying, booking, or modifying a vehicle"
        ]
      },
      {
        title: "Daily Driving Confidence",
        items: [
          "Accessible parking placard guide and renewal reminders",
          "Winter-driving preparation for mobility devices, emergency supplies, and safe loading routines",
          "Emergency plan for breakdowns, collisions, assistive equipment failure, and roadside assistance"
        ]
      }
    ]
  },
  "official-resources": {
    title: "Official Alberta Resources",
    summary: "Jump to authoritative Alberta pages before making licensing decisions or booking tests.",
    isResources: true
  },
  "my-progress": {
    title: "My Progress",
    summary: "Review what you have marked complete in this browser.",
    isProgress: true
  }
};

const officialResources = [
  ["Get a driver's licence", "https://www.alberta.ca/get-drivers-licence"],
  ["Class 7 learner's licence", "https://www.alberta.ca/class-7-learners-licence"],
  ["Class 5 driver's licence", "https://www.alberta.ca/class-5-drivers-licence"],
  ["Class 6 motorcycle licence", "https://www.alberta.ca/class-6-motorcycle-licence"],
  ["Commercial licence", "https://www.alberta.ca/upgrade-commercial-licence"],
  ["Exchange a licence from outside Alberta", "https://www.alberta.ca/exchange-non-alberta-licences"],
  ["Road test", "https://www.alberta.ca/road-test"],
  ["Alberta driver's guides", "https://www.alberta.ca/drivers-guide"]
];

const quizQuestions = [
  {
    question: "A Class 7 learner in Alberta must avoid driving during which hours?",
    options: ["12:00 am to 5:00 am", "10:00 pm to 6:00 am", "Only during rush hour", "There is no time restriction"],
    answer: 0,
    explanation: "Alberta lists a midnight to 5 am restriction for Class 7 learners."
  },
  {
    question: "Which habit is most important before changing lanes?",
    options: ["Accelerate first", "Signal, mirror check, and shoulder check", "Brake hard", "Use hazard lights"],
    answer: 1,
    explanation: "Lane changes need communication, mirror checks, blind-spot checks, and a safe gap."
  },
  {
    question: "What should you do when winter roads reduce traction?",
    options: ["Follow closer", "Make sharper steering inputs", "Increase following distance", "Turn off headlights"],
    answer: 2,
    explanation: "Low traction increases stopping distance, so extra space is essential."
  },
  {
    question: "What does a Class 5 licence generally cover?",
    options: ["Most cars, trucks, and vans", "Only motorcycles", "Only buses", "Only tractor-trailers"],
    answer: 0,
    explanation: "Alberta describes Class 5 as allowing most cars, trucks, or vans."
  }
];

const nav = document.querySelector("#side-nav");
const content = document.querySelector("#content");
const title = document.querySelector("#page-title");
const search = document.querySelector("#section-search");
const overallProgress = document.querySelector("#overall-progress");
const storageKey = "ab-driving-study-progress";
let progress = readProgress();

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function writeProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
  updateProgressPill();
}

function allPageIds() {
  return Object.keys(pages).filter((id) => !["dashboard", "my-progress"].includes(id));
}

function getCompletion(id) {
  return Boolean(progress[id]);
}

function setCompletion(id, isDone) {
  progress[id] = isDone;
  writeProgress();
  renderNav(search.value);
  renderRoute(currentRoute());
}

function currentRoute() {
  return location.hash.replace("#", "") || "dashboard";
}

function updateProgressPill() {
  const ids = allPageIds();
  const completed = ids.filter((id) => progress[id]).length;
  overallProgress.textContent = `${Math.round((completed / ids.length) * 100)}%`;
}

function flattenNav(items = navTree, parentTitle = "") {
  return items.flatMap((item) => {
    const current = { ...item, parentTitle };
    return item.children ? [current, ...flattenNav(item.children, item.title)] : [current];
  });
}

function renderNav(filter = "") {
  const term = filter.trim().toLowerCase();
  nav.innerHTML = "";

  navTree.forEach((group) => {
    const childMatches = (group.children || []).filter((child) => child.title.toLowerCase().includes(term));
    const groupMatches = group.title.toLowerCase().includes(term);
    if (term && !groupMatches && childMatches.length === 0) return;

    const wrapper = document.createElement("div");
    wrapper.className = "nav-group";
    wrapper.appendChild(navButton(group));

    const children = term ? childMatches : group.children || [];
    if (children.length) {
      const childWrap = document.createElement("div");
      childWrap.className = "nav-children";
      children.forEach((child) => childWrap.appendChild(navButton(child)));
      wrapper.appendChild(childWrap);
    }

    nav.appendChild(wrapper);
  });
}

function navButton(item) {
  const button = document.createElement("button");
  button.className = `nav-link ${currentRoute() === item.id ? "active" : ""}`;
  button.type = "button";
  button.dataset.route = item.id;
  button.innerHTML = `<span>${item.title}</span>${getCompletion(item.id) ? '<span class="status-dot done" aria-label="Complete"></span>' : ""}`;
  button.addEventListener("click", () => {
    location.hash = item.id;
    document.body.classList.remove("nav-open");
  });
  return button;
}

function renderRoute(route) {
  const page = pages[route] || pages.dashboard;
  title.textContent = page.title;

  if (page.isTool) return renderPathway(page);
  if (page.isQuiz) return renderQuiz(page);
  if (page.isResources) return renderResources(page);
  if (page.isProgress) return renderProgressPage(page);

  content.innerHTML = `
    <div class="section-layout">
      <article class="panel">
        <p class="eyebrow">${route === "dashboard" ? "Overview" : "Study section"}</p>
        <h2>${page.title}</h2>
        <p>${page.summary}</p>
        ${renderTags(page.tags)}
        ${renderHighlights(page.highlights)}
        ${renderFeatureGroups(page.featureGroups)}
        ${page.official ? `<p class="notice">Check the official Alberta page before booking or applying: <a href="${page.official}" target="_blank" rel="noreferrer">open resource</a>.</p>` : ""}
      </article>
      ${renderAside(route)}
    </div>
    ${page.cards ? `<div class="cards-grid">${page.cards.map(renderStudyCard).join("")}</div>` : ""}
  `;

  bindCardActions();
}

function renderTags(tags = []) {
  if (!tags.length) return "";
  return `<div class="tag-row">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>`;
}

function renderHighlights(highlights = []) {
  if (!highlights.length) return "";
  return `<ul class="detail-list">${highlights.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderFeatureGroups(groups = []) {
  if (!groups.length) return "";
  return `
    <div class="feature-grid">
      ${groups.map((group) => `
        <section class="feature-card">
          <h3>${group.title}</h3>
          <ul>
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      `).join("")}
    </div>
  `;
}

function renderAside(route) {
  return `
    <aside class="aside-stack">
      <div class="panel">
        <h3>Section status</h3>
        <p>${getCompletion(route) ? "Marked complete. Nice, this section is in your studied pile." : "Mark this section complete when you have reviewed it."}</p>
        ${route !== "dashboard" ? `<button class="small-button" type="button" data-complete="${route}">${getCompletion(route) ? "Mark incomplete" : "Mark complete"}</button>` : ""}
      </div>
      <div class="panel">
        <h3>Good next steps</h3>
        <div class="progress-list">
          ${["pathway", "practice-tests", "official-resources"].map(renderProgressMini).join("")}
        </div>
      </div>
    </aside>
  `;
}

function renderProgressMini(id) {
  return `
    <div class="progress-item">
      <div class="progress-label">
        <span>${pages[id].title}</span>
        <span>${getCompletion(id) ? "Done" : "Open"}</span>
      </div>
      <div class="meter"><span style="width:${getCompletion(id) ? 100 : 12}%"></span></div>
    </div>
  `;
}

function renderStudyCard(id) {
  const page = pages[id];
  if (!page) return "";
  const initial = page.title.match(/[A-Z0-9]/)?.[0] || ">";
  return `
    <article class="study-card">
      <div class="card-topline">
        <span class="topic-icon" aria-hidden="true">${initial}</span>
        <span class="status-dot ${getCompletion(id) ? "done" : ""}" aria-label="${getCompletion(id) ? "Complete" : "Incomplete"}"></span>
      </div>
      <div>
        <h3>${page.title}</h3>
        <p>${page.summary}</p>
      </div>
      <button class="card-action" type="button" data-route="${id}">Open</button>
    </article>
  `;
}

function bindCardActions() {
  content.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      location.hash = button.dataset.route;
    });
  });

  content.querySelectorAll("[data-complete]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.complete;
      setCompletion(id, !getCompletion(id));
    });
  });
}

function renderPathway(page) {
  content.innerHTML = `
    <article class="panel">
      <p class="eyebrow">Interactive tool</p>
      <h2>${page.title}</h2>
      <p>${page.summary}</p>
      <div class="pathway-tool">
        <div class="field">
          <label for="goal">What do you want to drive?</label>
          <select id="goal">
            <option value="personal">Car, van, or light truck</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="commercial">Commercial vehicle</option>
            <option value="passenger">Taxi, ambulance, or small bus</option>
          </select>
        </div>
        <div class="field">
          <label for="experience">Current experience</label>
          <select id="experience">
            <option value="new">New driver</option>
            <option value="learner">Have a learner licence</option>
            <option value="outside">Licensed outside Alberta</option>
          </select>
        </div>
        <div class="field">
          <label for="support">Need adapted driving support?</label>
          <select id="support">
            <option value="no">No</option>
            <option value="yes">Yes or unsure</option>
          </select>
        </div>
      </div>
      <div id="pathway-result" class="recommendation"></div>
      <button class="small-button" type="button" data-complete="pathway">Mark pathway reviewed</button>
    </article>
  `;
  const controls = ["goal", "experience", "support"].map((id) => document.querySelector(`#${id}`));
  controls.forEach((control) => control.addEventListener("change", updatePathway));
  bindCardActions();
  updatePathway();
}

function updatePathway() {
  const goal = document.querySelector("#goal").value;
  const experience = document.querySelector("#experience").value;
  const support = document.querySelector("#support").value;
  const result = document.querySelector("#pathway-result");
  let target = "class-7";
  let copy = "Start with Class 7, study the driver's guide, pass the knowledge and vision tests, then build supervised driving experience.";

  if (goal === "motorcycle") {
    target = "class-6";
    copy = "Follow the Class 6 motorcycle path and add motorcycle-specific study, gear, control skills, and road-test preparation.";
  }
  if (goal === "commercial") {
    target = "commercial";
    copy = "Start with the commercial licence overview, then choose Class 1, 2, or 3 based on vehicle type and training requirements.";
  }
  if (goal === "passenger") {
    target = "class-4";
    copy = "Review Class 4 for passenger-service vehicles, then confirm medical, testing, and professional-driving requirements.";
  }
  if (experience === "outside") {
    target = "new-to-alberta";
    copy = "Check Alberta's licence exchange rules first. You may be able to exchange your licence or may need tests.";
  }
  if (support === "yes") {
    copy += " Add the adapted-driving section early so vehicle, medical, and testing needs are planned before booking.";
  }

  result.innerHTML = `<h3>Recommended next section: ${pages[target].title}</h3><p>${copy}</p><button class="card-action" type="button" data-route="${target}">Open recommended section</button>`;
  bindCardActions();
}

function renderQuiz(page) {
  content.innerHTML = `
    <article class="panel">
      <p class="eyebrow">Practice mode</p>
      <h2>${page.title}</h2>
      <p>${page.summary}</p>
    </article>
    <div class="cards-grid">
      ${quizQuestions.map((item, index) => renderQuizCard(item, index)).join("")}
    </div>
  `;

  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".quiz-card");
      const question = quizQuestions[Number(button.dataset.question)];
      card.querySelectorAll(".option-button").forEach((option) => {
        const isCorrect = Number(option.dataset.answer) === question.answer;
        option.classList.toggle("correct", isCorrect);
        option.classList.toggle("wrong", option === button && !isCorrect);
        option.disabled = true;
      });
      card.querySelector(".quiz-feedback").textContent = question.explanation;
      progress["practice-tests"] = true;
      writeProgress();
      renderNav(search.value);
    });
  });
}

function renderQuizCard(item, questionIndex) {
  return `
    <article class="quiz-card">
      <h3>${item.question}</h3>
      <div class="quiz-options">
        ${item.options.map((option, answerIndex) => `<button class="option-button" type="button" data-question="${questionIndex}" data-answer="${answerIndex}">${option}</button>`).join("")}
      </div>
      <p class="quiz-feedback"></p>
    </article>
  `;
}

function renderResources(page) {
  content.innerHTML = `
    <article class="panel">
      <p class="eyebrow">Authoritative links</p>
      <h2>${page.title}</h2>
      <p>${page.summary}</p>
    </article>
    <div class="content-grid">
      ${officialResources.map(([label, url]) => `<div class="resource-row"><div><h3>${label}</h3><p>Government of Alberta resource.</p></div><a href="${url}" target="_blank" rel="noreferrer">Open</a></div>`).join("")}
    </div>
  `;
}

function renderProgressPage(page) {
  const items = flattenNav().filter((item) => pages[item.id]);
  content.innerHTML = `
    <article class="panel">
      <p class="eyebrow">Saved in this browser</p>
      <h2>${page.title}</h2>
      <p>${page.summary}</p>
      <div class="progress-list">
        ${items.map((item) => renderProgressRow(item.id)).join("")}
      </div>
      <button class="small-button" type="button" id="reset-progress">Reset progress</button>
    </article>
  `;

  document.querySelector("#reset-progress").addEventListener("click", () => {
    progress = {};
    writeProgress();
    renderNav(search.value);
    renderProgressPage(page);
  });
}

function renderProgressRow(id) {
  const done = getCompletion(id);
  return `
    <div class="progress-item">
      <div class="progress-label">
        <span>${pages[id].title}</span>
        <span>${done ? "Complete" : "Not started"}</span>
      </div>
      <div class="meter"><span style="width:${done ? 100 : 0}%"></span></div>
    </div>
  `;
}

window.addEventListener("hashchange", () => {
  renderNav(search.value);
  renderRoute(currentRoute());
});

search.addEventListener("input", () => renderNav(search.value));

document.querySelector("[data-menu-toggle]").addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

document.querySelectorAll("a[data-route]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    location.hash = link.dataset.route;
  });
});

renderNav();
renderRoute(currentRoute());
updateProgressPill();
