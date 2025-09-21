document.addEventListener("DOMContentLoaded", () => {
  const clientsSection = document.querySelector(".clients-section");

  // Fade in after 2 seconds
  setTimeout(() => {
    clientsSection.classList.add("visible");
  }, 2000);
});
// Fade-in on scroll for expertise cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".expertise-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(card => {
    observer.observe(card);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Select everything that should animate on scroll
  const fadeItems = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeItems.forEach(item => {
    observer.observe(item);
  });
});
// Intersection Observer for fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 200); // staggered delay
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
// Expand / Collapse Bios
document.querySelectorAll(".read-more-btn").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".team-card");
    const fullBio = card.querySelector(".bio-full");

    if (fullBio.style.display === "block") {
      fullBio.style.display = "none";
      button.textContent = "Read More";
    } else {
      fullBio.style.display = "block";
      button.textContent = "Read Less";
    }
  });
});
// Read More / Read Less toggle with smooth animation
document.querySelectorAll(".read-more-btn").forEach(button => {
  button.addEventListener("click", () => {
    const extraText = button.previousElementSibling;

    if (extraText.classList.contains("show")) {
      extraText.classList.remove("show");
      button.textContent = "Read More";
    } else {
      extraText.classList.add("show");
      button.textContent = "Read Less";
    }
  });
});
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const bioFull = button.previousElementSibling;

    bioFull.classList.toggle('show');
    button.classList.toggle('active');
    button.textContent = bioFull.classList.contains('show') ? 'Read Less' : 'Read More';
  });
});
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const bioFull = button.previousElementSibling;

    // Toggle bio visibility
    bioFull.classList.toggle('show');
    button.classList.toggle('active');
    button.textContent = bioFull.classList.contains('show') ? 'Read Less' : 'Read More';

    if (bioFull.classList.contains('show')) {
      // Split bio text into lines
      const text = bioFull.dataset.fulltext || bioFull.textContent;
      bioFull.dataset.fulltext = text; // store original
      bioFull.innerHTML = '';

      const lines = text.split('. ');
      lines.forEach((line, index) => {
        const span = document.createElement('span');
        span.textContent = line + (index < lines.length - 1 ? '.' : '');
        span.style.animationDelay = `${index * 0.2}s`; // stagger
        bioFull.appendChild(span);
      });
    } else {
      // collapse back to empty (for smooth reset)
      bioFull.innerHTML = '';
    }
  });
});
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const bioFull = button.previousElementSibling;

    if (!bioFull.classList.contains('show')) {
      // EXPAND
      bioFull.classList.add('show');
      button.textContent = 'Read Less';

      const text = bioFull.dataset.fulltext || bioFull.textContent;
      bioFull.dataset.fulltext = text;
      bioFull.innerHTML = '';

      const lines = text.split('. ');
      lines.forEach((line, index) => {
        const span = document.createElement('span');
        span.textContent = line + (index < lines.length - 1 ? '.' : '');
        span.style.animationDelay = `${index * 0.2}s`;
        bioFull.appendChild(span);
      });
    } else {
      // COLLAPSE with smooth fade
      bioFull.style.opacity = '0';
      setTimeout(() => {
        bioFull.classList.remove('show');
        bioFull.innerHTML = '';
        bioFull.style.opacity = ''; // reset
      }, 500); // matches CSS transition
      button.textContent = 'Read More';
    }
  });
});

