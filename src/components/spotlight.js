// Spotlight Cursor Effect
class SpotlightCursor {
  constructor() {
    this.spotlight = null;
    this.init();
  }

  init() {
    // Create spotlight element
    this.spotlight = document.createElement('div');
    this.spotlight.className = 'cursor-spotlight';
    document.body.appendChild(this.spotlight);

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      this.updatePosition(e.clientX, e.clientY);
    });

    // Show spotlight on mouse enter
    document.addEventListener('mouseenter', () => {
      this.spotlight.classList.add('active');
    });

    // Hide spotlight on mouse leave
    document.addEventListener('mouseleave', () => {
      this.spotlight.classList.remove('active');
    });
  }

  updatePosition(x, y) {
    if (this.spotlight) {
      this.spotlight.style.left = `${x - 50}px`;
      this.spotlight.style.top = `${y - 50}px`;
    }
  }
}

// Initialize spotlight cursor when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new SpotlightCursor();
});