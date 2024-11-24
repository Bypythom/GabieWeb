document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('.lazy-load');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const dataSrc = img.getAttribute('data-src'); // Get the data-src attribute
          if (dataSrc) {
            img.src = dataSrc; // Set the src to load the image
            img.onload = () => {
              img.parentElement.classList.add('visible'); // Add fade-in effect after loading
            };
            observer.unobserve(img); // Stop observing after loading
          }
        }
      });
    }, {
      threshold: 0.1 // Trigger when at least 10% of the image is visible
    });
  
    lazyImages.forEach(image => {
      observer.observe(image); // Observe each lazy-loaded image
    });
  });
  