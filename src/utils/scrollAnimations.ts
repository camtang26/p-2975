class ScrollAnimator {
  private observer: IntersectionObserver;
  private threshold: number = 0.1;
  private debounceTimeout: number | null = null;

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersect(entries),
      {
        root: null,
        rootMargin: '50px',
        threshold: this.threshold
      }
    );
  }

  private handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !this.isExcluded(entry.target)) {
        const element = entry.target;
        const delay = element.getAttribute('data-delay');
        
        if (delay) {
          (element as HTMLElement).style.setProperty('--delay', `${delay}s`);
        }
        
        element.classList.add('animate');
        this.observer.unobserve(element);
        
        // Log for debugging
        console.log('Element animated:', element);
      }
    });
  }

  private isExcluded(element: Element): boolean {
    return element.closest('.navbar, .hero') !== null;
  }

  private debounce(callback: () => void, wait: number) {
    if (this.debounceTimeout) {
      window.clearTimeout(this.debounceTimeout);
    }
    this.debounceTimeout = window.setTimeout(callback, wait);
  }

  public init() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.querySelectorAll('.fade-in').forEach(element => {
        element.classList.remove('fade-in');
        (element as HTMLElement).style.opacity = '1';
      });
      return;
    }

    // Initialize observers with debouncing
    this.debounce(() => {
      document.querySelectorAll('.fade-in').forEach(element => {
        this.observer.observe(element);
      });
    }, 100);

    console.log('ScrollAnimator initialized');
  }

  public cleanup() {
    if (this.debounceTimeout) {
      window.clearTimeout(this.debounceTimeout);
    }
    this.observer.disconnect();
  }
}

export const scrollAnimator = new ScrollAnimator();