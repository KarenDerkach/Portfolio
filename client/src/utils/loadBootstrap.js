/**
 * Utility for lazy loading Bootstrap JavaScript only when needed
 * This improves performance by avoiding loading unnecessary scripts
 */

let bootstrapLoaded = false;

export const loadBootstrapJS = () => {
  return new Promise((resolve, reject) => {
    // Return immediately if already loaded
    if (bootstrapLoaded || window.bootstrap) {
      resolve();
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p';
    script.crossOrigin = 'anonymous';
    script.async = true;

    // Handle load success
    script.onload = () => {
      bootstrapLoaded = true;
      resolve();
    };

    // Handle load error
    script.onerror = () => {
      reject(new Error('Failed to load Bootstrap JS'));
    };

    // Append to head
    document.head.appendChild(script);
  });
};

/**
 * Initialize Bootstrap component when needed
 * @param {string} selector - CSS selector for the component
 * @param {string} component - Bootstrap component name (Modal, Dropdown, etc.)
 * @param {Object} options - Bootstrap component options
 */
export const initBootstrapComponent = async (selector, component, options = {}) => {
  try {
    await loadBootstrapJS();
    const element = document.querySelector(selector);
    if (element && window.bootstrap && window.bootstrap[component]) {
      return new window.bootstrap[component](element, options);
    }
  } catch (error) {
    console.warn('Failed to initialize Bootstrap component:', error);
  }
};

/**
 * Check if Bootstrap components are present on the page
 */
export const hasBootstrapComponents = () => {
  const selectors = [
    '.modal',
    '.dropdown',
    '.collapse',
    '.carousel',
    '[data-bs-toggle]',
    '.offcanvas',
    '.popover',
    '.tooltip'
  ];
  
  return selectors.some(selector => document.querySelector(selector));
};