export default {
  inserted: (el) => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            imageObserver.unobserve(image);
          }
        });
      });

      imageObserver.observe(el);
    } else {
      el.src = el.dataset.src;
    }
  }
};