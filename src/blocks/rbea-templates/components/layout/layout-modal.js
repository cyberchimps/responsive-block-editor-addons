/**
 * Pattern Importer Modal with tabs.
 */

import LayoutLibrary from "./layout-library";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Fragment, useState } = wp.element;
const { Button, Dashicon, Modal, TabPanel } = wp.components;
const { useDispatch } = wp.data;

function LayoutModal(props) {
  const [currentTab, setCurrentTab] = useState("rbea-patterns-tab-sections");
  const [modalOpen, setModalOpen] = useState(true);
  const { removeBlock } = useDispatch("core/block-editor");

  const tabs = [];

  if (props.context.sections.length > 0) {
    tabs.push({
      name: "rbea-patterns-tab-sections",
      title: __("Sections", "responsive-block-editor-addons"),
      className: "rbea-patterns-tab-sections",
    });
  }

  if (props.context.layouts.length > 0) {
    tabs.push({
      name: "rbea-patterns-tab-layouts",
      title: __("Layouts", "responsive-block-editor-addons"),
      className: "rbea-patterns-tab-layouts",
    });
  }

  tabs.push({
    name: "rbea-patterns-tab-favorites",
    title: __("Favorites", "responsive-block-editor-addons"),
    className: "rbea-patterns-tab-favorites",
  });

  if (props.context.reusableBlocks.length) {
    tabs.push({
      name: "rbea-patterns-tab-reusable-blocks",
      title: __("Reusable Blocks", "responsive-block-editor-addons"),
      className: "rbea-patterns-tab-reusable-blocks",
    });
  }

  return (
    <Fragment key={"pattern-modal-" + props.clientId}>
      <Button
        key={"layout-modal-library-button-" + props.clientId}
        isPrimary
        className="rbea-pattern-modal-button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {__("Layout Library", "responsive-block-editor-addons")}
      </Button>
      {modalOpen ? (
        <Modal
          key={"modal-component-" + props.clientId}
          className="rbea-pattern-importer-modal"
          title={__(
            "Responsive Block Editor Addons",
            "responsive-block-editor-addons"
          )}
          onRequestClose={() => {
            setModalOpen(false);
            setCurrentTab(null);
            removeBlock(props.clientId);
          }}
        >
          <TabPanel
            key={"layout-modal-tabpanel-" + props.clientId}
            className="rbea-pattern-importer-modal-panel"
            activeClass="rbea-pattern-importer-modal-active-tab"
            onSelect={(tabName) => setCurrentTab(tabName)}
            tabs={tabs}
          >
            {(tab) => {
              const tabContent = __(
                "Default tab content",
                "responsive-block-editor-addons"
              );

              if (tab.name) {
                if ("rbea-patterns-tab-sections" === tab.name) {
                  return [
                    <LayoutLibrary
                      key={"pattern-modal-sections-" + props.clientId}
                      clientId={props.clientId}
                      currentTab={currentTab}
                      data={props.context.sections}
                      context={props.context}
                    />,
                  ];
                }

                if ("rbea-patterns-tab-layouts" === tab.name) {
                  return [
                    <LayoutLibrary
                      key={"pattern-modal-layouts-" + props.clientId}
                      clientId={props.clientId}
                      currentTab={currentTab}
                      data={props.context.layouts}
                      context={props.context}
                    />,
                  ];
                }

                if ("rbea-patterns-tab-collections" === tab.name) {
                  return [
                    <LayoutLibrary
                      key={"pattern-modal-collections-" + props.clientId}
                      clientId={props.clientId}
                      currentTab={currentTab}
                      data={props.context.collections}
                      context={props.context}
                    />,
                  ];
                }

                if ("rbea-patterns-tab-favorites" === tab.name) {
                  return [
                    <LayoutLibrary
                      key={"pattern-modal-favorites-" + props.clientId}
                      clientId={props.clientId}
                      currentTab={currentTab}
                      data={props.context.favorites}
                      context={props.context}
                    />,
                  ];
                }

                if ("rbea-patterns-tab-reusable-blocks" === tab.name) {
                  return [
                    <LayoutLibrary
                      key={"pattern-modal-reusable-blocks-" + props.clientId}
                      clientId={props.clientId}
                      currentTab={currentTab}
                      data={props.context.reusableBlocks}
                      context={props.context}
                    />,
                  ];
                }
              }
              return <div>{tabContent}</div>;
            }}
          </TabPanel>
        </Modal>
      ) : null}
    </Fragment>
  );
}
export default LayoutModal;
