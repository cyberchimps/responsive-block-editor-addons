/**
 * Collections
 * Components that do logic and set state, but do not render output.
 */

const { useState } = wp.element;

export function useCollectionsVisualState(initialSettings) {
  const [currentView, setCurrentView] = useState(initialSettings.view);
  const [currentCollection, setCurrentCollection] = useState(
    initialSettings.collection
  );

  return {
    currentView,
    setCurrentView,
    currentCollection,
    setCurrentCollection,
  };
}
