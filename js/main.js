// ============================================================
// MOBILE MENU TOGGLE
// ============================================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// ============================================================
// PROJECTS FILTERING
// ============================================================
const projectsGrid = document.getElementById('projects-grid');
const projectFilterButtons = document.querySelectorAll('.project-filter');

function renderProjects(projects) {
  projectsGrid.innerHTML = projects.map((project, idx) => `
    <article class="group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 opacity-0 animate-fade-in-up" style="animation-delay: ${0.2 + idx * 0.1}s;">
      <div class="relative aspect-video bg-secondary overflow-hidden">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        ${project.featured ? '<span class="absolute top-3 left-3 px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-lg animate-pulse">Featured</span>' : ''}
      </div>

      <div class="md:p-6 p-2 space-y-4">
        <div>
          <span class="text-xs text-primary font-mono uppercase tracking-wider">
            ${project.category}
          </span>
          <h3 class="text-xl font-semibold text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
            ${project.title}
          </h3>
        </div>

        <p class="text-muted-foreground text-sm leading-relaxed">
          ${project.description}
        </p>

        <div class="flex flex-wrap gap-1.5">
          ${project.technologies.map(tech => `
            <span class="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded hover:bg-primary/20 hover:text-primary transition-all duration-300">
              ${tech}
            </span>
          `).join('')}
        </div>

        <div class="flex gap-3 pt-2 opacity-90 group-hover:opacity-100 transition-opacity">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-2 text-sm bg-transparent border border-border text-foreground rounded hover:border-primary transition-colors">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Live Demo
          </a>
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-2 text-sm bg-transparent border border-border text-foreground rounded hover:border-primary transition-colors">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

// Initialize projects with all items
renderProjects(projectsData);

// Filter projects
projectFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    
    // Update active button
    projectFilterButtons.forEach(btn => {
      btn.classList.remove('bg-primary', 'text-primary-foreground', 'shadow-lg', 'shadow-primary/50');
      btn.classList.add('bg-secondary', 'text-secondary-foreground', 'hover:bg-secondary/80', 'hover:border-primary/50');
    });
    
    button.classList.remove('bg-secondary', 'text-secondary-foreground', 'hover:bg-secondary/80', 'hover:border-primary/50');
    button.classList.add('bg-primary', 'text-primary-foreground', 'shadow-lg', 'shadow-primary/50');
    
    // Filter projects
    const filtered = category === 'All' 
      ? projectsData 
      : projectsData.filter(p => p.category === category);
    
    renderProjects(filtered);
  });
});

// ============================================================
// BLOG RENDERING
// ============================================================
const blogContainer = document.getElementById('blog-container');

function renderBlog() {
  if (blogPostsData.length === 0) return;
  
  const featured = blogPostsData[0];
  const others = blogPostsData.slice(1);
  
  let html = `
    <article class="group grid md:grid-cols-2 gap-8 bg-background/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
      <div class="relative aspect-video md:aspect-auto bg-secondary overflow-hidden">
        <img src="${featured.image}" alt="${featured.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
        <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div class="p-6 md:p-8 flex flex-col justify-center space-y-4">
        <div class="flex items-center gap-4 text-sm text-muted-foreground">
          <span class="text-primary font-medium">${featured.category}</span>
          <span class="flex items-center gap-1.5">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            ${formatDate(featured.date)}
          </span>
          <span>${featured.readTime}</span>
        </div>
        <h3 class="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          ${featured.title}
        </h3>
        <p class="text-muted-foreground leading-relaxed">
          ${featured.excerpt}
        </p>
        <a href="/blog/${featured.slug}.html" class="inline-flex items-center text-primary font-medium hover:underline group/link">
          Read Article
          <svg class="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
      </div>
    </article>
  `;
  
  // Add other blog posts
  html += '<div class="grid md:grid-cols-3 md:gap-6 gap-3 mt-6">';
  
  others.forEach((post, idx) => {
    html += `
      <article class="group bg-background/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 opacity-0 animate-fade-in-up" style="animation-delay: ${0.3 + idx * 0.1}s;">
        <div class="relative aspect-video bg-secondary overflow-hidden">
          <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div class="p-6 space-y-3">
          <div class="flex items-center gap-3 text-xs text-muted-foreground">
            <span class="text-primary font-medium">${post.category}</span>
            <span>${formatDate(post.date)}</span>
          </div>
          <h3 class="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            ${post.title}
          </h3>
          <p class="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            ${post.excerpt}
          </p>
          <a href="/blog/${post.slug}.html" class="inline-flex items-center text-sm text-primary font-medium hover:underline group/link">
            Read More
            <svg class="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
      </article>
    `;
  });
  
  html += '</div>';
  blogContainer.innerHTML = html;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

renderBlog();

// ============================================================
// FAQ ACCORDION
// ============================================================
const faqContainer = document.getElementById('faq-container');
const faqFilterButtons = document.querySelectorAll('.faq-filter');

function renderFAQ(items) {
  faqContainer.innerHTML = items.length > 0 ? items.map(faq => `
    <div class="accordion-item">
      <button type="button" class="accordion-header w-full text-left" onclick="toggleAccordion(this)">
        <div class="flex items-center md:gap-3 gap-1">
          <span class="text-xs text-primary font-mono uppercase tracking-wider font-medium">
            ${faq.category}
          </span>
          <h3 class="font-semibold text-foreground text-base md:text-lg">
            ${faq.question}
          </h3>
        </div>
        <svg class="accordion-toggle h-5 w-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
      <div class="accordion-content text-muted-foreground leading-relaxed md:pb-4 pb-2">
        ${faq.answer}
      </div>
    </div>
  `).join('') : '<div class="text-center md:py-12 py-4"><p class="text-muted-foreground">No FAQs found for this category.</p></div>';
}

// Initialize FAQ with all items
renderFAQ(faqData);

// Toggle accordion
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const toggle = button.querySelector('.accordion-toggle');
  
  // Close other open accordions
  document.querySelectorAll('.accordion-header').forEach(header => {
    if (header !== button) {
      header.classList.remove('active');
      header.nextElementSibling.classList.remove('active');
      header.querySelector('.accordion-toggle').classList.remove('active');
    }
  });
  
  // Toggle current accordion
  button.classList.toggle('active');
  content.classList.toggle('active');
  toggle.classList.toggle('active');
}

// Filter FAQ
faqFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    
    // Update active button
    faqFilterButtons.forEach(btn => {
      btn.classList.remove('bg-primary', 'text-primary-foreground');
      btn.classList.add('bg-transparent', 'border', 'border-border', 'text-foreground');
    });
    
    button.classList.remove('bg-transparent', 'border', 'border-border', 'text-foreground');
    button.classList.add('bg-primary', 'text-primary-foreground');
    
    // Filter FAQ
    const filtered = category === 'All'
      ? faqData
      : faqData.filter(faq => faq.category === category);
    
    renderFAQ(filtered);
  });
});

// ============================================================
// CONTACT FORM
// ============================================================
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const buttonText = document.getElementById('button-text');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Simulate form submission
  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  buttonText.textContent = 'Sending...';
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Show success message
  successMessage.classList.remove('hidden');
  
  // Reset form
  contactForm.reset();
  submitButton.disabled = false;
  buttonText.textContent = 'Send Message';
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 5000);
});

// ============================================================
// AI CHATBOT
// ============================================================
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatIcon = chatbotToggle.querySelector('#chat-icon');
const closeIconBot = chatbotToggle.querySelector('#close-icon');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

let messageId = 0;

chatbotToggle.addEventListener('click', () => {
  chatbotWindow.classList.toggle('hidden');
  chatIcon.classList.toggle('hidden');
  closeIconBot.classList.toggle('hidden');
});

chatbotClose.addEventListener('click', () => {
  chatbotWindow.classList.add('hidden');
  chatIcon.classList.remove('hidden');
  closeIconBot.classList.add('hidden');
});

async function sendMessage() {
  const message = chatbotInput.value.trim();
  if (!message) return;
  
  // Add user message
  addMessage(message, 'user');
  chatbotInput.value = '';
  
  // Get all messages
  const messages = Array.from(chatbotMessages.querySelectorAll('[data-role]')).map(el => ({
    role: el.dataset.role,
    content: el.textContent
  }));
  
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });
    
    if (!response.ok) throw new Error('API error');
    
    if (!response.body) {
      addMessage('Sorry, I encountered an error. Please try again.', 'assistant');
      return;
    }
    
    // Add empty assistant message
    const assistantMsgId = messageId;
    addMessage('', 'assistant', assistantMsgId);
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let assistantContent = '';
    const assistantElement = chatbotMessages.querySelector(`[data-id="${assistantMsgId}"]`);
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      assistantContent += chunk;
      
      if (assistantElement) {
        assistantElement.textContent = assistantContent;
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }
    }
    
    // Final decode
    const finalChunk = decoder.decode();
    if (finalChunk) {
      assistantContent += finalChunk;
      if (assistantElement) {
        assistantElement.textContent = assistantContent;
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }
    }
  } catch (error) {
    console.error('Chat error:', error);
    addMessage('Sorry, I encountered an error. Please try again.', 'assistant');
  }
}

function addMessage(content, role, id = null) {
  if (id === null) id = messageId++;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = role === 'user' ? 'flex justify-end' : 'flex gap-2';
  messageDiv.innerHTML = role === 'user' 
    ? `<div class="bg-primary text-primary-foreground rounded-lg p-3 text-sm max-w-xs">${content}</div>`
    : `<div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"><span class="text-xs">🤖</span></div><div class="bg-secondary text-secondary-foreground rounded-lg p-3 text-sm max-w-xs" data-role="${role}" data-id="${id}">${content}</div>`;
  
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

// ============================================================
// UTILITY - Set year in footer
// ============================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// ANIMATION - Initial animations
// ============================================================
// Trigger fade-in animations on page load
window.addEventListener('load', () => {
  document.querySelectorAll('[class*="animate-"]').forEach(el => {
    const animationClass = Array.from(el.classList).find(cls => cls.includes('animate-'));
    if (animationClass) {
      el.style.opacity = '0';
      const delay = el.style.animationDelay || '0s';
      setTimeout(() => {
        el.style.opacity = '1';
      }, parseInt(delay) * 1000);
    }
  });
});
