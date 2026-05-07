/* ============================
   BLOG DATA
   ============================ */
const posts = [
  {
    id: 1,
    category: "design",
    title: "Whitespace Is Not Empty Space",
    excerpt: "The most overlooked tool in a designer's kit isn't a color palette or a typeface — it's the space between things.",
    date: "Apr 28, 2026",
    readTime: "5 min",
    content: [
      "The most overlooked tool in a designer's kit isn't a color palette or a typeface — it's the space between things. Whitespace, or negative space, is the deliberate absence of content. It is not laziness; it is restraint.",
      "When you give elements room to breathe, you change how they feel. A paragraph of text with generous line-height feels trustworthy. A headline with space below it feels confident. A button with padding feels pressable.",
      "The problem is that whitespace is invisible to most clients. They see empty space as wasted opportunity. But the best designers know it's the opposite: whitespace is where meaning lives. It directs attention, communicates hierarchy, and sets tone — all without a single pixel of content.",
      "Next time you design something, try removing half the elements. Then give what remains twice as much room. You might be surprised how much louder silence can be."
    ]
  },
  {
    id: 2,
    category: "tech",
    title: "Why I Write in Plain Text",
    excerpt: "No markdown renderer, no rich text editor. Just a text file and a monospace font. Here's what that's taught me about clarity.",
    date: "Apr 18, 2026",
    readTime: "4 min",
    content: [
      "For the last two years, I've written everything in plain text. Notes, drafts, ideas, journals — all of it lives in .txt files in a folder called writing/. No markdown renderer, no rich text editor, no syncing app with a premium tier.",
      "The constraint is the point. When you can't bold something for emphasis, you have to find words that are actually emphatic. When you can't use a header to break up a section, you have to write transitions. The formatting crutches fall away and what's left is just the quality of the thinking.",
      "There's also something freeing about permanence. Plain text will open in any editor, on any operating system, in fifty years. Proprietary formats rot. Your ideas don't have to.",
      "I'm not evangelical about it — use the tools that serve you. But if your writing feels bloated or scattered, try stripping everything back to a blank document and a blinking cursor. Constraints, it turns out, are a form of freedom."
    ]
  },
  {
    id: 3,
    category: "life",
    title: "The 20-Minute Walk",
    excerpt: "I've solved more problems on foot than I ever have sitting at a desk. There's a reason the Greeks preferred to think while walking.",
    date: "Apr 10, 2026",
    readTime: "3 min",
    content: [
      "I've solved more problems on foot than I ever have sitting at a desk. A walk around the block has untangled code architecture, resolved arguments I was rehearsing in my head, and suggested paragraphs I'd been circling for days.",
      "There's a reason the ancient Greeks preferred to think while walking — the Peripatetics didn't pace the colonnades because they needed the exercise. Motion and thought are tangled. Moving the body loosens the mind.",
      "The rule I've settled on: if I've been stuck on something for more than 20 minutes, I go outside. Phone stays on the desk. No podcast, no music. Just twenty minutes and whatever I find worth looking at.",
      "The problems don't always resolve. But I return to them differently — less attached, more curious. That shift in posture, literal and mental, is worth every minute."
    ]
  },
  {
    id: 4,
    category: "design",
    title: "Type as Texture",
    excerpt: "When typography works best, you don't notice it at all. The text simply feels right — inviting, clear, appropriate to its context.",
    date: "Mar 30, 2026",
    readTime: "6 min",
    content: [
      "When typography works best, you don't notice it at all. The text simply feels right — inviting, clear, appropriate to its context. You read faster. You trust the content more. You don't know why.",
      "This invisibility is the goal. Typography fails when it calls attention to itself — when a font choice feels clever or when a layout feels effortful. Good type is honest; it serves the words, not the designer's ego.",
      "The fundamentals are simple and ignored constantly: set comfortable line lengths (55–75 characters), use generous leading (1.5–1.8× for body copy), and choose a typeface that fits the emotional register of the content. A technical manual and a poetry collection should not look the same.",
      "Beyond the basics, type becomes texture. A page of well-set prose has a visual rhythm — dark and light, thick and thin. When you squint and stop reading the words, the page should still look good. That gray value, that even texture, is what separates typography that merely works from typography that delights."
    ]
  },
  {
    id: 5,
    category: "tech",
    title: "Rethinking Notifications",
    excerpt: "Every notification is a request for your attention. Most of them don't deserve it. A modest proposal for taking back your focus.",
    date: "Mar 19, 2026",
    readTime: "4 min",
    content: [
      "Every notification is a request for your attention. Most of them don't deserve it. The badge on a social app, the ping from a newsletter, the pop-up asking you to rate something — these are manufactured urgency, designed to create a habit of checking.",
      "The problem isn't the technology; it's the defaults. Every app ships with notifications enabled because engagement metrics look better that way. Nobody defaults to respect for your time.",
      "Two years ago I turned off every notification except phone calls and direct messages from people I know. The discomfort lasted about a week. After that came something unexpected: boredom. Real boredom, the kind that precedes ideas.",
      "You won't miss anything important. Important things find their way to you. What you will gain is the experience of an uninterrupted thought — rarer than it should be, and worth protecting."
    ]
  },
  {
    id: 6,
    category: "life",
    title: "On Finishing Things",
    excerpt: "The hardest part of any creative project is not the beginning — it is the grinding middle and the terrifying end.",
    date: "Mar 5, 2026",
    readTime: "5 min",
    content: [
      "The hardest part of any creative project is not the beginning. Beginnings are easy; they are full of potential and free of consequences. The hardest part is the grinding middle — when the initial enthusiasm has burned off and the end is not yet in sight.",
      "Most things that don't get finished die in the middle. Not from lack of talent or even lack of interest, but from lack of a system for pushing through the resistance.",
      "What I've found useful: shrink the finish line. Instead of thinking about finishing the project, think about finishing the next session. Finishing one paragraph. Finishing one hour. The middle becomes a series of small completions rather than a single impossible one.",
      "And when you do finish — when you actually complete something and send it out into the world — notice how it feels. Not triumphant, usually. More like relief. That feeling is its own form of encouragement, a deposit in the account you draw on the next time the middle gets hard."
    ]
  }
];

const featuredPost = {
  title: "The Quiet Power of Doing Less",
  category: "life",
  date: "May 5, 2026",
  readTime: "7 min",
  content: [
    "In a world obsessed with productivity hacks and constant output, there's a radical act hiding in plain sight — simply stopping. Not quitting, but pausing with purpose. Not collapsing from exhaustion, but choosing to step back before you need to.",
    "We've built an economy around the appearance of busyness. Calendars packed to the edge. Inboxes treated as urgent. Side projects layered on top of main projects. The logic is seductive: more input must mean more output. More hours must mean more progress.",
    "But the best thinking I've done has happened in the gaps. On walks. In the shower. On slow Sunday mornings with no agenda. The mind, unscheduled, makes connections that the scheduled mind can't reach. It needs time to consolidate, to wander, to make meaning from experience rather than just accumulating more of it.",
    "Doing less isn't an endorsement of laziness. It's a recognition that quality and quantity are in tension, and that for creative or intellectual work, the relationship between effort and output is not linear. A half-hour of focused work often produces more than three hours of distracted grinding.",
    "The practice is simple to describe and difficult to maintain: protect some time that isn't for anything. Not for self-improvement, not for catching up. Just for being present without an agenda. Start small — twenty minutes after lunch, one evening a week. Notice what surfaces."
  ]
};

/* ============================
   RENDER POSTS
   ============================ */
function createPostCard(post) {
  const card = document.createElement('div');
  card.className = 'post-card';
  card.dataset.category = post.category;
  card.innerHTML = `
    <span class="tag">${capitalize(post.category)}</span>
    <h3>${post.title}</h3>
    <p>${post.excerpt}</p>
    <div class="post-footer">
      <span>${post.date}</span>
      <span class="read-link">${post.readTime} read →</span>
    </div>
  `;
  card.addEventListener('click', () => openPost(post.id));
  return card;
}

function renderPosts(list) {
  const grid = document.getElementById('postsGrid');
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = '<div class="no-results">No articles found. Try a different search.</div>';
    return;
  }
  list.forEach((post, i) => {
    const card = createPostCard(post);
    card.style.animationDelay = `${i * 60}ms`;
    grid.appendChild(card);
  });
}

/* ============================
   FILTER & SEARCH
   ============================ */
let currentFilter = 'all';
let currentSearch = '';

function applyFilters() {
  let filtered = posts;
  if (currentFilter !== 'all') {
    filtered = filtered.filter(p => p.category === currentFilter);
  }
  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q)
    );
  }
  renderPosts(filtered);
}

document.getElementById('searchInput').addEventListener('input', e => {
  currentSearch = e.target.value;
  applyFilters();
});

document.getElementById('filterTabs').addEventListener('click', e => {
  if (!e.target.classList.contains('tab')) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  currentFilter = e.target.dataset.filter;
  applyFilters();
});

/* ============================
   MODAL
   ============================ */
function openPost(id) {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  let post;
  if (id === 'featured') {
    post = featuredPost;
  } else {
    post = posts.find(p => p.id === id);
  }
  if (!post) return;

  content.innerHTML = `
    <span class="tag">${capitalize(post.category)}</span>
    <h2>${post.title}</h2>
    <span class="modal-date">${post.date}${post.readTime ? ' · ' + post.readTime + ' read' : ''}</span>
    ${post.content.map(p => `<p>${p}</p>`).join('')}
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ============================
   MOBILE NAV
   ============================ */
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});

/* ============================
   CONTACT FORM
   ============================ */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  e.target.style.display = 'none';
  document.getElementById('formSuccess').classList.add('show');
  setTimeout(() => {
    e.target.style.display = 'flex';
    document.getElementById('formSuccess').classList.remove('show');
    e.target.reset();
  }, 4000);
});

/* ============================
   UTILS
   ============================ */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ============================
   INIT
   ============================ */
renderPosts(posts);
