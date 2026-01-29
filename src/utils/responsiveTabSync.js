/**
 * Global Responsive Tab Synchronization
 * 
 * This module automatically synchronizes individual block responsive tabs
 * with the global WordPress editor device view.
 * 
 */

import { select, subscribe } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';

// Global device type synchronization system
class ResponsiveTabSync {
  constructor() {
    this.currentDeviceType = 'Desktop';
    this.subscription = null;
    this.isInitialized = false;
    this.lastClickTime = 0;
    this.clickDebounceMs = 300; // Prevent rapid clicking
    
    // Performance optimization: Cache containers and debounce operations
    this.containerCache = new Map(); // containerId -> { element, lastSync }
    this.syncDebounceTimeout = null;
    this.lastSyncTime = 0;
    
    // Additional optimizations
    this.deviceTypeMap = {
      'Desktop': 'desktop',
      'Tablet': 'tablet', 
      'Mobile': 'mobile'
    };
    this.responsiveTabSelector = '.responsive-size-type-field-tabs';
    this.tabSelector = '[role="tab"]';
    this.tabPanelSelector = '[role="tabpanel"]';
  }

  /**
   * Initialize the synchronization system
   */
  init() {
    if (this.isInitialized) return;
    
    // Set initial device type
    this.updateDeviceType();
    
    // Subscribe to WordPress data store changes
    this.subscribeToDeviceChanges();
    
    // Listen for custom device change events
    this.listenForCustomEvents();
    
    // Set up panel open observer
    this.setupPanelObserver();
    
    // Set up responsive tab click listeners
    this.setupResponsiveTabListeners();
    
    this.isInitialized = true;
  }

  /**
   * Subscribe to WordPress device type changes
   */
  subscribeToDeviceChanges() {
    // Check if WordPress data store is available
    if (!this.isWordPressDataAvailable()) {
      // Instead of polling every second, wait for WordPress to be ready
      this.waitForWordPressReady();
      return;
    }
    
    this.subscription = subscribe(() => {
      const newDeviceType = this.getCurrentDeviceType();
      
      if (newDeviceType && newDeviceType !== this.currentDeviceType) {
        this.currentDeviceType = newDeviceType;
        this.updateDeviceType();
        this.dispatchCustomEvent(newDeviceType);
      }
    });
  }

  /**
   * Wait for WordPress to be ready using event-driven approach
   */
  waitForWordPressReady() {
    let attempts = 0;
    const maxAttempts = 50; // Max 5 seconds (50 * 100ms)
    
    const checkWordPress = () => {
      attempts++;
      
      if (this.isWordPressDataAvailable()) {
        this.subscribeToDeviceChanges();
        return;
      }
      
      // Stop trying after max attempts to prevent infinite loops
      if (attempts >= maxAttempts) {
        return;
      }
      
      // Check again in 100ms
      setTimeout(checkWordPress, 100);
    };
    
    // Start checking after a short delay
    setTimeout(checkWordPress, 100);
    
    // Also listen for WordPress-specific events if available
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        if (this.isWordPressDataAvailable() && !this.subscription) {
          this.subscribeToDeviceChanges();
        }
      });
    }
  }

  /**
   * Check if WordPress data store is available
   */
  isWordPressDataAvailable() {
    try {
      return typeof wp !== 'undefined' && 
             wp.data && 
             wp.data.select && 
             wp.data.dispatch &&
             wp.data.select('core/edit-post') &&
             wp.data.dispatch('core/edit-post');
    } catch (error) {
      return false;
    }
  }

  /**
   * Get current device type from WordPress store
   */
  getCurrentDeviceType() {
    try {
      // Try the new API first
      const editorStore = select('core/editor');
      let deviceType = editorStore?.getDeviceType?.();
      
      // Fallback to deprecated API if new one doesn't exist
      if (!deviceType) {
        const editPostStore = select('core/edit-post');
        deviceType = editPostStore?.__experimentalGetPreviewDeviceType?.();
      }
      
      return deviceType || 'Desktop';
    } catch (error) {
      return 'Desktop';
    }
  }

  /**
   * Update body data-device-type attribute and sync all visible tabs
   */
  updateDeviceType() {
    const deviceType = this.getCurrentDeviceType();
    
    if (deviceType && typeof document !== 'undefined') {
      document.body.setAttribute('data-device-type', deviceType);
      
      // Sync all currently visible responsive tabs
      this.syncAllVisibleTabs(deviceType);
    }
  }

  /**
   * Sync all currently visible responsive tabs to the specified device type
   * Optimized with debouncing and caching
   */
  syncAllVisibleTabs(deviceType) {
    const targetTabName = this.deviceTypeMap[deviceType];
    
    if (!targetTabName) {
      return;
    }

    // Debounce rapid device changes
    if (this.syncDebounceTimeout) {
      clearTimeout(this.syncDebounceTimeout);
    }

    this.syncDebounceTimeout = setTimeout(() => {
      this.performOptimizedSync(targetTabName);
    }, 150); // Reduced from 500ms to 150ms
  }

  /**
   * Optimized sync method with caching and smart container detection
   */
  performOptimizedSync(targetTabName) {
    const now = Date.now();
    
    // Throttle syncs to prevent excessive calls
    if (now - this.lastSyncTime < 100) {
      return;
    }
    this.lastSyncTime = now;

    // Get all containers with caching
    const containers = this.getCachedContainers();
    
    if (containers.length === 0) {
      return;
    }

    // Sync only containers that need updating - optimized loop
    for (let i = 0; i < containers.length; i++) {
      const container = containers[i];
      const containerId = `container-${i + 1}`;
      const cacheKey = `${containerId}-${targetTabName}`;
      const cached = this.containerCache.get(cacheKey);
      
      // Skip if recently synced to this tab
      if (cached && (now - cached.lastSync < 1000)) {
        continue; // Skip to next iteration
      }

      this.syncTabsInContainer(container, targetTabName, containerId);
      
      // Update cache
      this.containerCache.set(cacheKey, {
        element: container,
        lastSync: now
      });
    }

    // Clean old cache entries
    this.cleanupCache();
  }

  /**
   * Get containers with caching
   */
  getCachedContainers() {
    const cacheKey = 'containers-cache';
    const cached = this.containerCache.get(cacheKey);
    const now = Date.now();

    // Use cache if less than 500ms old
    if (cached && (now - cached.timestamp < 500)) {
      return cached.containers;
    }

    // Refresh cache - avoid Array.from() for better performance
    const containers = document.querySelectorAll(this.responsiveTabSelector);
    const containersArray = containers.length ? Array.from(containers) : [];
    this.containerCache.set(cacheKey, {
      containers: containersArray,
      timestamp: now
    });

    return containersArray;
  }

  /**
   * Clean up old cache entries
   */
  cleanupCache() {
    const now = Date.now();
    const maxAge = 30000; // 30 seconds

    for (const [key, value] of this.containerCache.entries()) {
      if (now - value.lastSync > maxAge) {
        this.containerCache.delete(key);
      }
    }
  }

  /**
   * Wait for panel DOM to be ready and then sync immediately
   */
  waitForPanelDOMAndSync(targetTabName) {
    let checkCount = 0;
    const maxChecks = 20; // Max 1 second (20 * 50ms)
    
    const checkDOM = () => {
      checkCount++;
      
      // Check if we have responsive tab containers AND they have proper structure
      const containers = document.querySelectorAll(this.responsiveTabSelector);
      
      if (containers.length > 0) {
        // Check if at least one container has the proper tab structure - optimized
        let hasProperStructure = false;
        for (let i = 0; i < containers.length; i++) {
          const container = containers[i];
          const tabs = container.querySelectorAll(this.tabSelector);
          const tabPanels = container.querySelectorAll(this.tabPanelSelector);
          if (tabs.length > 0 && tabPanels.length > 0) {
            hasProperStructure = true;
            break; // Early exit when found
          }
        }
        
        if (hasProperStructure) {
          this.waitForControllerAndSync(targetTabName);
          return;
        }
      }
      
      // If not ready and we haven't exceeded max checks, check again in 50ms
      if (checkCount < maxChecks) {
        setTimeout(checkDOM, 50);
      } else {
        this.waitForControllerAndSync(targetTabName);
      }
    };
    
    checkDOM();
  }

  /**
   * Wait for controller to load and then sync tabs (optimized version)
   */
  waitForControllerAndSync(targetTabName, retryCount = 0) {
    // Use the optimized sync method instead
    this.performOptimizedSync(targetTabName);
  }

  /**
   * Set up MutationObserver to watch for panel open/close events and new blocks
   */
  setupPanelObserver() {
    if (typeof document === 'undefined') return;

    this.panelObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Watch for panel open/close events
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const panel = mutation.target;
          
          // Check if this is a PanelBody element
          if (panel.classList.contains('components-panel__body')) {
            // Check if panel just opened
            if (panel.classList.contains('is-opened')) {
              this.handlePanelOpened(panel);
            }
          }
        }
        
        // Watch for new DOM elements being added (new blocks)
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          this.handleNewBlocksAdded(mutation);
        }
      });
    });

    // Start observing
    this.panelObserver.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class'],
      childList: true
    });
  }

  /**
   * Handle when new blocks are added to the DOM
   */
  handleNewBlocksAdded(mutation) {
    // Check if any of the added nodes contain responsive tab containers - optimized
    let hasResponsiveTabs = false;
    const addedNodes = mutation.addedNodes;
    for (let i = 0; i < addedNodes.length; i++) {
      const node = addedNodes[i];
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.querySelector && (
          node.querySelector(this.responsiveTabSelector) ||
          node.classList.contains('responsive-size-type-field-tabs')
        )) {
          hasResponsiveTabs = true;
          break; // Early exit when found
        }
      }
    }

    if (hasResponsiveTabs) {
      
      // Clear container cache since new elements were added
      this.containerCache.delete('containers-cache');
      
      // Wait a bit for React to finish rendering, then sync
      setTimeout(() => {
        const currentDeviceType = this.getCurrentDeviceType();
        if (currentDeviceType) {
          this.syncAllVisibleTabs(currentDeviceType);
        }
      }, 100);
    }
  }

  /**
   * Handle when a panel is opened (optimized)
   */
  handlePanelOpened(panel) {
    // Check if this panel has responsive tabs (there might be multiple)
    const responsiveTabsContainers = panel.querySelectorAll(this.responsiveTabSelector);
    
    if (responsiveTabsContainers.length > 0) {
      const deviceType = this.getCurrentDeviceType();
      const targetTabName = this.deviceTypeMap[deviceType];
         
      // Sync all responsive tab containers in this panel - optimized loop
      for (let i = 0; i < responsiveTabsContainers.length; i++) {
        this.syncTabsInContainer(responsiveTabsContainers[i], targetTabName, `panel-${i + 1}`);
      }
    }
  }

  /**
   * Sync tabs in a specific container to the target device type
   */
  syncTabsInContainer(container, targetTabName, containerId = 'unknown') {
    if (!targetTabName) return;

    // Find the target device tab button
    const targetTab = container.querySelector(`.responsive-${targetTabName}-tab`);
    
    if (targetTab && targetTab instanceof HTMLElement) {
      // Check if this tab is already active
      const isAlreadyActive = targetTab.classList.contains('active-tab');
      
      if (!isAlreadyActive) {
        try {
          // Try to find the TabPanel using multiple selectors (anchor on the tab itself)
          let tabPanel = targetTab.closest('.components-tab-panel');

          if (!tabPanel) {
            // Try alternative selectors
            tabPanel = targetTab.closest('[class*="tab-panel"]');
            if (!tabPanel) {
              // Try finding by looking for parent with tablist
              const tablistParent = targetTab.closest('[role="tablist"]');
              tabPanel = tablistParent ? tablistParent.parentElement : null;
            }
          }
          
          if (tabPanel) {
            // Look for React instance - optimized search
            let reactKey = null;
            const keys = Object.keys(tabPanel);
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              if (key.startsWith('__reactInternalInstance') || 
                  key.startsWith('_reactInternalFiber') ||
                  key.startsWith('__reactFiber')) {
                reactKey = key;
                break; // Early exit when found
              }
            }
            
            if (reactKey && tabPanel[reactKey]) {
              const reactInstance = tabPanel[reactKey];
              let currentInstance = reactInstance;
              let depth = 0;
              
              // Walk the React tree to find the TabPanel component
              while (currentInstance && depth < 20) {
                if (currentInstance.memoizedProps && 
                    currentInstance.memoizedProps.tabs && 
                    currentInstance.memoizedProps.onSelect) {          
                  try {
                    currentInstance.memoizedProps.onSelect(targetTabName);
                    return; // Success, exit early
                  } catch (error) {
                  }
                }
                currentInstance = currentInstance.child || currentInstance.sibling || currentInstance.return;
                depth++;
              }
            }
          }
          // Fallback: Direct DOM manipulation of ARIA attributes and data attributes
          // Use the same improved TabPanel finding logic
          let tabPanelElement = targetTab.closest('.components-tab-panel');

          if (!tabPanelElement) {
            tabPanelElement = targetTab.closest('[class*="tab-panel"]');
            if (!tabPanelElement) {
              const tablistParent = targetTab.closest('[role="tablist"]');
              tabPanelElement = tablistParent ? tablistParent.parentElement : null;
            }
          }
          
          if (tabPanelElement) {
            // Find all tabs in this TabPanel
            const allTabs = tabPanelElement.querySelectorAll(this.tabSelector);
            const allTabPanels = tabPanelElement.querySelectorAll(this.tabPanelSelector);
            
            // Deactivate all tabs - optimized loop
            for (let i = 0; i < allTabs.length; i++) {
              const tab = allTabs[i];
              tab.setAttribute('aria-selected', 'false');
              tab.classList.remove('active-tab');
              tab.setAttribute('tabindex', '-1');
            }
            
            // Hide all tab panels - optimized loop
            for (let i = 0; i < allTabPanels.length; i++) {
              const panel = allTabPanels[i];
              panel.setAttribute('data-open', 'false');
              panel.style.display = 'none';
            }
            
            // Activate target tab
            targetTab.setAttribute('aria-selected', 'true');
            targetTab.classList.add('active-tab');
            targetTab.setAttribute('tabindex', '0');
            
            // Show target tab panel
            const targetTabPanel = tabPanelElement.querySelector(`[role="tabpanel"][aria-labelledby="${targetTab.id}"]`);
            if (targetTabPanel) {
              targetTabPanel.setAttribute('data-open', 'true');
              targetTabPanel.style.display = 'block';
            }
          }
          
          // Also try click event as backup
          const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          
          targetTab.dispatchEvent(clickEvent);
          
          // Verify the click worked
          setTimeout(() => {
            const isNowActive = targetTab.classList.contains('active-tab');
          }, 100);
          
        } catch (error) {
        }
      }
    } 
  }

  /**
   * Set up click listeners for responsive tabs to control global device view
   */
  setupResponsiveTabListeners() {
    if (typeof document === 'undefined') return;

    // Use event delegation to handle dynamically added tabs
    document.addEventListener('click', (event) => {
      const target = event.target;
      
      // Check if clicked element is a responsive device tab
      if (target.classList.contains('responsive-desktop-tab') || 
          target.classList.contains('responsive-tablet-tab') || 
          target.classList.contains('responsive-mobile-tab')) {
        
        this.handleResponsiveTabClick(target);
      }
      // Also check if click is on a child element of a responsive tab
      else if (target.closest('.responsive-desktop-tab') || 
               target.closest('.responsive-tablet-tab') || 
               target.closest('.responsive-mobile-tab')) {
        
        const tabElement = target.closest('.responsive-desktop-tab, .responsive-tablet-tab, .responsive-mobile-tab');
        this.handleResponsiveTabClick(tabElement);
      }
    }, true); // Use capture phase to ensure we get the event
  }

  /**
   * Handle click on responsive device tab
   */
  handleResponsiveTabClick(tabElement) {
    try {
      // Debounce rapid clicks
      const now = Date.now();
      if (now - this.lastClickTime < this.clickDebounceMs) {
        return;
      }
      this.lastClickTime = now;
      
      // Determine which device type was clicked
      let deviceType = null;
      
      if (tabElement.classList.contains('responsive-desktop-tab')) {
        deviceType = 'Desktop';
      } else if (tabElement.classList.contains('responsive-tablet-tab')) {
        deviceType = 'Tablet';
      } else if (tabElement.classList.contains('responsive-mobile-tab')) {
        deviceType = 'Mobile';
      }
      
      if (deviceType) {
        // Check if we're already on this device type to avoid unnecessary updates
        const currentDeviceType = this.getCurrentDeviceType();
        if (currentDeviceType === deviceType) {
          return;
        }
        
        // Update the global WordPress device type
        this.setGlobalDeviceType(deviceType);
      }
    } catch (error) {
    }
  }

  /**
   * Set the global WordPress device type
   */
  setGlobalDeviceType(deviceType) {
    try {
      // Check if wp.data is available
      if (typeof wp === 'undefined' || !wp.data) {
        return;
      }
      
      // Get the dispatch function from WordPress data store
      const { dispatch } = wp.data;
      
      if (!dispatch) {
        return;
      }
      
      // Try the new API first
      const editorDispatch = dispatch('core/editor');
      if (editorDispatch?.setDeviceType) {
        editorDispatch.setDeviceType(deviceType);
        return;
      }
      
      // Fallback to deprecated API if new one doesn't exist
      const editPostDispatch = dispatch('core/edit-post');
      if (editPostDispatch?.__experimentalSetPreviewDeviceType) {
        editPostDispatch.__experimentalSetPreviewDeviceType(deviceType);
      }
      
    } catch (error) {
    }
  }

  /**
   * Listen for custom device change events
   */
  listenForCustomEvents() {
    if (typeof window !== 'undefined') {
      window.addEventListener('rbea-device-changed', (event) => {
        const { deviceType } = event.detail;
        // Custom event handling if needed
      });
    }
  }

  /**
   * Dispatch custom event for device type changes
   */
  dispatchCustomEvent(deviceType) {
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('rbea-device-changed', {
        detail: { 
          deviceType,
          timestamp: Date.now(),
          source: 'rbea-responsive-tab-sync'
        }
      });
      
      window.dispatchEvent(event);
    }
  }

  /**
   * Get current device type
   */
  getDeviceType() {
    return this.currentDeviceType;
  }

  /**
   * Manually trigger device type update
   */
  forceUpdate() {
    this.updateDeviceType();
  }

  /**
   * Cleanup subscription and observers
   */
  destroy() {
    if (this.subscription) {
      this.subscription();
      this.subscription = null;
    }
    
    if (this.panelObserver) {
      this.panelObserver.disconnect();
      this.panelObserver = null;
    }
    
    // Clear debounce timeout
    if (this.syncDebounceTimeout) {
      clearTimeout(this.syncDebounceTimeout);
      this.syncDebounceTimeout = null;
    }
    
    // Clear cache
    this.containerCache.clear();
    
    if (typeof document !== 'undefined') {
      document.body.removeAttribute('data-device-type');
    }
    
    this.isInitialized = false;
  }
}

// Create global instance
const responsiveTabSync = new ResponsiveTabSync();

// Initialize when DOM is ready
domReady(() => {
  // Wait a bit for WordPress editor to be fully loaded
  setTimeout(() => {
    responsiveTabSync.init();
  }, 100);
});

// Also initialize if WordPress editor loads later
if (typeof window !== 'undefined' && window._wpLoadBlockEditor) {
  window._wpLoadBlockEditor.then(() => {
    setTimeout(() => {
      responsiveTabSync.init();
    }, 100);
  });
}

// Export for advanced usage
export default responsiveTabSync;

// Global access for debugging
if (typeof window !== 'undefined') {
  window.RBEAResponsiveTabSync = responsiveTabSync;
}