const topics = [
  { title: "Intro", file: "Intro.md" },

  {
    title: "Week 1 — Introduction & types of data",
    file: "Week_1 -- Introduction & types of data.md",
  },
  {
    title: "Week 2 — Describing categorical data",
    file: "Week_2 -- Describing categorical data.md",
  },
  {
    title: "Week 3 — Describing numerical data",
    file: "Week_3 -- Describing numerical data.md",
  },
  {
    title: "Week 4 — Association between two variables",
    file: "Week_4 -- Association between two variables.md",
  },
  {
    title: "Week 5 — Permutations & combinations",
    file: "Week_5 -- Permutations & combinations.md",
  },
  { title: "Week 6 — Probability", file: "Week_6 -- Probability.md" },
  {
    title: "Week 7 — Conditional probability",
    file: "Week_7 -- Conditional probability.md",
  },
  { title: "Week 8 — Random Variables", file: "Week_8 -- Random Variables.md" },
  { title: "Week 9 — Discrete RV", file: "Week_9 -- Discrete RVs.md" },
  {
    title: "Week 10 — Binomial, Hypergeometric, Poisson",
    file: "Week_10 -- Binomial , Hypergeometric , Poisson.md",
  },
  { title: "Week 11 — Continuous RV", file: "Week_11 -- Continuous RVs.md" },
  {
    title: "Week 12 — Normal Distribution",
    file: "Week_12 -- Normal Distribution.md",
  },
];

const navigation = document.getElementById("navigation");
const content = document.getElementById("content");
const search = document.getElementById("search");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");

let activeIndex = -1;

// Build the sidebar
function renderNavigation(filter = "") {
  navigation.replaceChildren();

  topics.forEach((topic, index) => {
    if (!topic.title.toLowerCase().includes(filter.toLowerCase())) {
      return;
    }

    const link = document.createElement("a");
    link.href = `#${index}`;
    link.className = "nav-link";
    link.textContent = topic.title;

    if (index === activeIndex) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", (event) => {
      event.preventDefault();
      loadTopic(index);
      sidebar.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });

    navigation.appendChild(link);
  });
}

// Load and render a Markdown note
async function loadTopic(index) {
  const topic = topics[index];

  if (!topic) return;

  activeIndex = index;
  renderNavigation(search.value);

  content.innerHTML = "<p>Loading note...</p>";

  try {
    const response = await fetch(`./${encodeURIComponent(topic.file)}`);

    if (!response.ok) {
      throw new Error(`Could not load ${topic.file}: HTTP ${response.status}`);
    }

    const markdown = await response.text();

    // Convert Markdown into HTML
    content.innerHTML = marked.parse(markdown);

    // Render mathematical equations with MathJax
    if (window.MathJax) {
      await MathJax.startup.promise;
      await MathJax.typesetPromise([content]);
    }

    // Fix relative links inside Markdown notes
    content.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");

      if (
        href &&
        !href.startsWith("#") &&
        !/^(https?:|mailto:|tel:|javascript:)/i.test(href)
      ) {
        link.href = new URL(href, new URL(topic.file, document.baseURI)).href;
      }
    });

    // Update the URL and page title
    history.replaceState(null, "", `#${index}`);
    document.title = `${topic.title} | Statistics 1`;
  } catch (error) {
    console.error(error);

    content.innerHTML = `
      <h1>Couldn't load this note</h1>
      <p>Check whether the Markdown filename matches the filename in script.js.</p>
      <p><strong>File:</strong> ${topic.title}</p>
      <p>Open the browser developer console for more details.</p>
    `;
  }
}

// Search topics
search.addEventListener("input", () => {
  renderNavigation(search.value);
});

// Toggle the sidebar on mobile
menuToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Initialize the website
renderNavigation();

const hash = window.location.hash.slice(1);
const initialIndex = Number(hash);

if (
  hash !== "" &&
  Number.isInteger(initialIndex) &&
  initialIndex >= 0 &&
  initialIndex < topics.length
) {
  loadTopic(initialIndex);
} else {
  loadTopic(0);
}
