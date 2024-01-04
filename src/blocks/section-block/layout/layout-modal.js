const {rawHandler} = wp.blocks;
/**
 * Pattern Importer Modal with tabs.
 */

/**
 * WordPress dependencies.
 */
const { select } = wp.data;

const {withSelect, withDispatch} = wp.data;
const siteData = require("../../../../includes/data/responsive-sites-gutenberg-all.json");
const {map} = require("lodash");
import "./style.scss";
const {compose} = wp.compose;

const {__} = wp.i18n;
const {Fragment, useState, useEffect} = wp.element;
const {Button, Dashicon, Modal, TabPanel} = wp.components;
const {useDispatch} = wp.data;
export function LayoutModal(props) {
  const [currentTab, setCurrentTab] = useState("rbea-patterns-tab-sections");
  const [modalOpen, setModalOpen] = useState(true);
  const [CurrentPageContent, setcurrentPageContent] = useState();
  const [showToast, setShowToast] = useState(false);
  const [sitesData, setSitesData] = useState(siteData);
  const [selectedSite, setSelectedSite] = useState(null);
  const [requiredPlugins, setRequiredPlugins] = useState([]);
  const [importStatus, setImportStatus] = useState("Import Template");
  const [isProactive, setIsProactive] = useState(false); // New state for proactivity
  const [Xmlupdatestatus, setXmlUpdateStatus] = useState(false);
  const {apiFetch} = wp;

  const [searchQuery, setSearchQuery] = useState("");
  const [noSearchResult, setNoSearchResult] = useState(false);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Debounce the filter function
  const debouncedFilter = debounce((query) => {
    let searchedData;

    if (query) {
      searchedData = sitesData.filter(
        (site) =>
          site.title.rendered.toLowerCase().includes(query.toLowerCase()) ||
          site.slug.toLowerCase().includes(query.toLowerCase()) ||
          site.sites_category.some((category) =>
            category.toLowerCase().includes(query.toLowerCase())
          )
      );

      setSitesData(searchedData);

      // Check if no results are found and set noSearchResult accordingly
      setNoSearchResult(searchedData.length === 0);
    } else {
      setSitesData(siteData);
      setNoSearchResult(false); // Reset noSearchResult when searchQuery is empty
    }
  }, 300); // Adjust the delay (in milliseconds) as needed

  useEffect(() => {
    debouncedFilter(searchQuery);
    if (modalOpen) {
      checkIsProActive();
    }
  }, [searchQuery, siteData, noSearchResult, currentTab]);
  const {removeBlock} = useDispatch("core/block-editor");
  const checkIsProActive = async () => {
    try {
      const response = await apiFetch({
        path: "custom/v1/responsive-pro-activation-status", // Replace with your actual endpoint
      });
      // Check the response and set isProactive state accordingly
      setIsProactive(response && response.pro_active);
      // let data = response && response.data;
// 
      // setSitesData()
    } catch (error) {
      console.error("Error checking endpoint:", error);
    }
  };
  const openModal = async () => {
    await checkIsProActive(); // Check the endpoint before opening the modal
    getCurrentPostContent();
    setModalOpen(true);
  };

  const handleSearchClick = () => {
    // Handle search logic
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };
  const renderTabContent = () => {
    switch (currentTab) {
      case "pages":
        return <PagesTabContent />;
      case "patterns":
        return <PatternsTabContent />;
      case "wireframes":
        return <WireframesTabContent />;
      case "pageinnertab":
        return <PagesinnerTab />;
      case "nosearchresult":
        return <Noresultfound />;
      default:
        return <PagesTabContent />;
    }
  };
  const Toast = ({message, showToast, onClose}) => {
    useEffect(() => {}, [onClose]);

    return showToast ? (
      <div className="toast">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="dashicons dashicons-dismiss"
        ></button>
      </div>
    ) : null;
  };
  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };
  const PagesTabContent = () => {
    // Content for the Pages tab
    const handleCardClick = (site) => {
      setCurrentTab("pageinnertab");
      setSelectedSite(site);
      setRequiredPlugins(site.required_plugins);
    };
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0 40px",
          padding: "40px 0",
        }}
      >
        <Toast
          message={
            !Xmlupdatestatus
              ? "Template library refreshed!"
              : "Syncing template library in the background. The process can take anywhere between 2 to 3 minutes. We will notify you once done."
          }
          showToast={showToast}
          onClose={handleCloseToast}
        />
        <div className="pages-tab-content">
          {noSearchResult ? (
            <Noresultfound />
          ) : (
            sitesData?.map((site) => (
              <div
                className="rba-popup-card-component"
                key={site.id}
                onClick={(e) => handleCardClick(site)}
              >
                <img
                  src={site.featured_image_url}
                  alt={site.title.rendered.replace(/&#8211;|Gutenberg/g, "")}
                  style={{
                    width: "100%",
                    height: "396px",
                    objectPosition: "top",
                    objectFit: "cover",
                  }}
                />
                {site.demo_type === "pro" && (
                  <div className="rba-popup-pro-badge">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4141 15H4.58073C4.35156 15 4.16406 15.1875 4.16406 15.4167V16.25C4.16406 16.4792 4.35156 16.6667 4.58073 16.6667H15.4141C15.6432 16.6667 15.8307 16.4792 15.8307 16.25V15.4167C15.8307 15.1875 15.6432 15 15.4141 15ZM17.0807 6.66671C16.3906 6.66671 15.8307 7.2266 15.8307 7.91671C15.8307 8.1016 15.8724 8.27348 15.9453 8.43233L14.0599 9.56254C13.6589 9.80212 13.1406 9.66671 12.9089 9.26046L10.7865 5.54692C11.0651 5.31775 11.2474 4.974 11.2474 4.58337C11.2474 3.89327 10.6875 3.33337 9.99739 3.33337C9.30729 3.33337 8.74739 3.89327 8.74739 4.58337C8.74739 4.974 8.92969 5.31775 9.20833 5.54692L7.08594 9.26046C6.85417 9.66671 6.33333 9.80212 5.9349 9.56254L4.05208 8.43233C4.1224 8.27608 4.16667 8.1016 4.16667 7.91671C4.16667 7.2266 3.60677 6.66671 2.91667 6.66671C2.22656 6.66671 1.66406 7.2266 1.66406 7.91671C1.66406 8.60681 2.22396 9.16671 2.91406 9.16671C2.98177 9.16671 3.04948 9.15629 3.11458 9.14587L4.9974 14.1667H14.9974L16.8802 9.14587C16.9453 9.15629 17.013 9.16671 17.0807 9.16671C17.7708 9.16671 18.3307 8.60681 18.3307 7.91671C18.3307 7.2266 17.7708 6.66671 17.0807 6.66671Z"
                        fill="#374151"
                      />
                    </svg>
                    Pro
                  </div>
                )}
                <div className="card-content">
                  <div className="card-content-heading">
                    {site.title.rendered.replace(/&#8211;|Gutenberg/g, "")}
                  </div>
                  <div className="card-content-para">
                    {Array.isArray(site.pages) ? site.pages.length : 1}{" "}
                    Templates
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  const PagesinnerTab = (site) => {
    if (!selectedSite) {
      return null; // or render a default state when no site is selected
    }
    const [selectedPage, setSelectedPage] = useState(
      selectedSite.pages && selectedSite.pages.length > 0
        ? selectedSite.pages[0]
        : null
    );
    const handlePageClick = (page) => {
      setSelectedPage(page);
    };
    const handleInstallPlugins = async (pluginsToInstall) => {
      // Iterate over the plugins and enqueue them for installation
      for (const plugin of pluginsToInstall) {
        await new Promise((resolve) => {
          wp.updates.queue.push({
            action: "install-plugin",
            data: {
              slug: plugin.slug,
            },
            success: () => {
              resolve(); // Resolve the promise when the installation is successful
            },
          });
        });
      }

      // Check the queue after all installations are completed
      wp.updates.queueChecker();
    };

    const activateAllPlugins = async (activatePlugins) => {
      // Create an array of promises for each plugin activation
      const activationPromises = activatePlugins.map((singlePlugin) => {
        return activatePlugin(singlePlugin);
      });

      // Wait for all plugin activations to complete before moving to the next step
      await Promise.all(activationPromises);

      // Next function can start executing here
    };
    const activatePlugin = (singlePlugin) => {
      return new Promise(async (resolve, reject) => {
        const formData = new window.FormData();
        formData.append(
          "action",
          "responsive_ready_sites_required_plugin_activate"
        );
        formData.append("init", singlePlugin.init);

        try {
          const response = await apiFetch({
            url: responsive_globals.ajax_url,
            method: "POST",
            body: formData,
          });

          if (response.success) {
            // Assuming the response object contains the data you need
            const data = response.data;
            resolve(data); // Resolve the promise with the data when activation is successful
          } else {
            reject(new Error(`HTTP error! Status: ${response.success}`));
          }
        } catch (error) {
          console.error("Fetch error:", error);
          reject(error);
        }
      });
    };

    const AddWpForms = () => {
      return new Promise(async (resolve, reject) => {
        const formData = new window.FormData();
        formData.append("action", "responsive_ready_sites_import_wpforms");
        formData.append("wpforms_path", selectedSite.wpforms_path);

        try {
          const response = await apiFetch({
            url: responsive_globals.ajax_url,
            method: "POST",
            body: formData,
          });

          if (response.success) {
            // Assuming the response object contains the data you need
            const data = response.data;
            resolve(data); // Resolve the promise with the data when the operation is successful
          } else {
            reject(new Error(`HTTP error! Status: ${response.success}`));
          }
        } catch (error) {
          console.error("Fetch error:", error);
          reject(error);
        }
      });
    };

    const importTemplate = async () => {};

    const import_page = async (site_url, page_id, clientId) => {
      const currenturl =
        selectedSite.site_url + "/wp-json/wp/v2/pages/" + selectedPage.page_id;
      try {
        const response = await fetch(currenturl);

        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${currenturl}`);
        }

        const data = await response.json();

        const content = data.original_content;
        let modified_content = await importApiCall(content);
        props.import(modified_content["data"], clientId);
      } catch (error) {
        console.error(error);
      }
    };

    function importApiCall(content) {
      //call backend api, which in turn calls function to download images and replace links with downloaded paths.
      return apiFetch({
        path: "/rbeablocks/v1/import",
        method: "PATCH",
        body: JSON.stringify({pattern_content: content}),
        _wpnonce: wpApiSettings.nonce,
      })
        .then((modified_content) => {
          return modified_content;
        })
        .catch((error) => console.error(error));
    }

    async function handleImportButtonClick(clientId, site) {
      // console.groupCollapsed("IMPORT STARTED...");
      let pluginsArray = selectedSite.required_plugins;
      const filteredPlugins = pluginsArray.filter(
        (plugin) => plugin.name !== "Responsive Block Editor Addons"
      );
      handleInstallPlugins(filteredPlugins);
      if (selectedSite.demo_type === "free") {
        setImportStatus("Importing...");
        import_page(selectedSite.site_url, selectedPage.page_id, clientId);
      } else if (selectedSite.demo_type !== "free" && isProactive === true) {
        setImportStatus("Importing...");
        import_page(selectedSite.site_url, selectedPage.page_id, clientId);
      } else {
        window.open("https://cyberchimps.com/pricing/", "_blank");
      }
    }

    return (
      <>
        <div className="rba-pop-up-inner-block">
          {(Array.isArray(selectedSite.pages)
            ? selectedSite.pages.length
            : 0) === 0 ? (
            <div style={{width: "100%", overflowY: "auto", maxHeight: "600px"}}>
              <img
                src={selectedSite.featured_image_url}
                style={{maxWidth: "100%"}}
              />
            </div>
          ) : (
            <div className="rba-popup-inner-main-div">
              <div className="rba-popup-inner-img-div">
                <img width="100%" src={selectedPage.featured_image} />
              </div>
              <div>
                <div className="rba-pop-up-inner-imgs-div">
                  {selectedSite.pages.map((page) => (
                    <div
                      key={page.page_id}
                      onClick={() => handlePageClick(page)}
                      className={`rba-pop-up-inner-small-img-div  ${
                        selectedPage && page.page_id === selectedPage.page_id
                          ? "selected"
                          : ""
                      }`}
                    >
                      <img
                        width="214px"
                        height="266.26px"
                        style={{
                          borderRadius: " 4px, 4px, 0px, 0px",
                          objectFit: "cover",
                          objectPosition: "center top",
                          padding: "5px",
                        }}
                        src={page.featured_image}
                        alt="Featured"
                      />
                      <div className="rba-popup-innerdiv-small-img-caption">
                        {page.page_title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="rba-section-blocks-inner-div-buttons">
          <div className="rba-inner-div-bottom-site-title">
            {selectedSite.title.rendered.replace(/&#8211;|Gutenberg/g, "")}{" "}
          </div>
          <div className="rba-section-blocks-inner-div-buttons-container">
            <button
              className="rba-sectoin-block-inner-div-btn-white"
              onClick={() => {
                setCurrentTab("pages");
              }}
            >
              Go back
            </button>
            <button
              className="rba-sectoin-block-inner-div-btn"
              onClick={() =>
                selectedPage === null
                  ? window.open(selectedSite.site_url, "_blank")
                  : window.open(
                      `${selectedSite.site_url}/?page_id=${selectedPage.page_id}`,
                      "_blank"
                    )
              }
            >
              Preview '
              {selectedSite.title.rendered.replace(/&#8211;|Gutenberg/g, "")}'
              Site
            </button>

            <button
              className="rba-sectoin-block-inner-div-btn"
              onClick={() =>
                handleImportButtonClick(props.clientId, selectedSite.site_url)
              }
            >
              {selectedSite.demo_type === "free"
                ? importStatus
                : isProactive === true
                ? importStatus
                : "Get access"}
            </button>
          </div>
        </div>
      </>
    );
  };
  const handleClearSearchInput = () => {
    const searchInput = document.getElementById("search-input-query");
    if (searchInput) {
      searchInput.value = "";
    }
    setSearchQuery((prevSearchQuery) => "");
    setNoSearchResult(false);
  };
  const Noresultfound = () => {
    return (
      <div
        className="rbea-no-search-result"
        style={{
          width: "calc(100vw - 80px)",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <h3>Sorry no results found.</h3>
        <button
          onClick={() => {
            handleClearSearchInput();
          }}
          className="rbea-back-to-templates"
        >
          Back to Templates
        </button>
      </div>
    );
  };
  const checkForXMLUpdates = async () => {
    setShowToast(true);

    return new Promise(async (resolve, reject) => {
      try {
        const response = await apiFetch({
          path: "custom/v1/responsive-pro-activation-status", // Replace with your actual endpoint
        });

        // let xml_update = response && response.xml_update;
        let xml_update = true;
        setXmlUpdateStatus(xml_update);
        setShowToast(true);

        if (xml_update) {
          const formData = new window.FormData();
          formData.append("action", "rbea_sync_library");

          try {
            const response = await apiFetch({
              url: responsive_globals.ajax_url,
              method: "POST",
              body: formData,
            });

            if (response.success) {
              // Assuming the response object contains the data you need
              const data = JSON.parse(response.data.filtered_data);
              setSitesData(data);
              setXmlUpdateStatus(false);
              resolve(data); // Resolve the promise with the data when activation is successful
            } else {
              reject(new Error(`HTTP error! Status: ${response.success}`));
            }
          } catch (error) {
            reject(error);
          }
        } else {
          resolve(null); // Resolve with null when no XML update is needed
        }
      } catch (error) {
        console.error("Error checking endpoint:", error);
        reject(error);
      }
    });
  };

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
          title={
            <Fragment>
              <div className="modal-header-content">
                <div className="modal-title">
                {<img src={responsive_globals.plugin_url + 'admin/images/RBA-Logo-without-text.png'} alt="rbea-logo" />}
                  {__("Template Library", "my-textdomain")}
                </div>

                <div className="modal-tabs">
                  <button
                    className="modal-tab-name"
                    onClick={() => handleTabClick("pages")}
                  >
                    <svg
                      width="18"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.05085 12.5077H9.15254V11.0073H3.05085V12.5077ZM14.2373 14.7082V2.70529C14.2373 1.60502 13.322 0.704803 12.2034 0.704803H2.0339C0.915254 0.704803 0 1.60502 0 2.70529V14.7082C0 15.8085 0.915254 16.7087 2.0339 16.7087H12.2034C13.322 16.7087 14.2373 15.8085 14.2373 14.7082ZM1.52542 14.7082V2.70529C1.52542 2.40522 1.72881 2.20517 2.0339 2.20517H12.2034C12.5085 2.20517 12.7119 2.40522 12.7119 2.70529V14.7082C12.7119 15.0083 12.5085 15.2083 12.2034 15.2083H2.0339C1.72881 15.2083 1.52542 15.0083 1.52542 14.7082ZM3.05085 9.20687H11.1864V7.70651H3.05085V9.20687ZM3.05085 5.90607H11.1864V4.50573H3.05085V5.90607ZM16.4746 4.70578V17.7089C16.4746 18.4091 15.8644 18.9092 15.2542 18.9092H4.0678V20.4096H15.2542C16.7797 20.4096 18 19.2093 18 17.6089V4.70578H16.4746Z"
                        fill="#FFF"
                      />
                    </svg>
                    {__("Pages", "my-textdomain")}
                  </button>
                  {/* <button className="" onClick={() => handleTabClick("patterns")}>
                    {__("Patterns", "my-textdomain")}
                  </button>
                  <button onClick={() => handleTabClick("wireframes")}>
                    {__("Wireframes", "my-textdomain")}
                  </button> */}
                </div>
                <div className="modal-header">
                  <div className="rba-popup-searchform">
                    <input
                      id="search-input-query"
                      className="rba-pop-up-search-button-input"
                      type="text"
                      placeholder={__("Search Templates...", "my-textdomain")}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                      }}
                    />

                    <button
                      className="rba-pop-up-search-button"
                      onClick={handleSearchClick}
                    >
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.54772 0.852417C10.1192 0.852417 13.0953 3.78468 13.0953 7.30339C13.0953 8.59359 12.7382 9.76649 12.0239 10.8221L16.0715 14.3408L14.8811 15.631L10.8334 12.2296C9.64296 13.2852 8.21439 13.8717 6.54772 13.8717C2.97629 13.8717 0.000102997 10.9394 0.000102997 7.42068C0.000102997 3.78468 2.97629 0.852417 6.54772 0.852417ZM6.54772 11.995C9.16677 11.995 11.3096 9.88378 11.3096 7.30339C11.3096 4.723 9.16677 2.61177 6.54772 2.61177C3.92867 2.61177 1.78582 4.723 1.78582 7.30339C1.78582 9.88378 3.92867 11.995 6.54772 11.995Z"
                          fill="#E2E5E7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="rba-popup-close-and-sync">
                <button
                  className="rba-pop-up-search-button"
                  onClick={() => {
                    checkForXMLUpdates();
                  }}
                >
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19565 0C12.6489 0 15.4859 2.71875 15.9652 6.25H18L14.5761 10.4167L11.1522 6.25H13.4217C12.9815 4.19792 11.2598 2.65625 9.19565 2.65625C7.77717 2.65625 6.525 3.39583 5.73261 4.51042L4.05978 2.47917C5.31196 0.958333 7.15109 0 9.19565 0ZM8.80435 14C5.36087 14 2.51413 11.2813 2.03478 7.75H0L3.42391 3.58333C4.56848 4.96875 5.70326 6.36458 6.84783 7.75H4.57826C5.01848 9.80208 6.74022 11.3438 8.80435 11.3438C10.2228 11.3438 11.475 10.6042 12.2674 9.48958L13.9402 11.5208C12.688 13.0417 10.8587 14 8.80435 14Z"
                      fill="#E2E5E7"
                    />
                  </svg>
                </button>
                <div>
                  <svg
                    width="2"
                    height="26"
                    viewBox="0 0 2 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 25.0498V0.911438" stroke="#D4D4D4" />
                  </svg>
                </div>
                <button
                  className="rba-pop-up-search-button"
                  onClick={closeModal}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2.66183L8.35151 7.24171L13 11.8216L11.1485 13.6458L6.5 9.07883L1.86465 13.6458L0 11.8086L4.63535 7.24171L0 2.67477L1.86465 0.837646L6.5 5.40458L11.1485 0.837646L13 2.66183Z"
                      fill="#E2E5E7"
                    />
                  </svg>
                </button>
              </div>
            </Fragment>
          }
          shouldCloseOnOverlayClick
          shouldShowCloseButton={false}
          className="full-screen-modal"
        >
          <div>{renderTabContent()}</div>
        </Modal>
      ) : null}
    </Fragment>
  );
}

export default compose(
  /**
   * Use rawHandler to parse html layouts to blocks
   * See https://git.io/fjqGc for details
   */
  withSelect((select, {clientId}) => {
    const {getBlock} = select("core/block-editor");
    const {canUserUseUnfilteredHTML} = select("core/editor");
    const block = getBlock(clientId);
    return {
      block,
      canUserUseUnfilteredHTML: canUserUseUnfilteredHTML(),
    };
  }),
  withDispatch((dispatch, {block, canUserUseUnfilteredHTML}) => ({
    import: (blockLayout) =>
      dispatch("core/block-editor").replaceBlocks(
        block.clientId,
        rawHandler({
          HTML: blockLayout,
          mode: "BLOCKS",
          canUserUseUnfilteredHTML,
        })
      ),
  }))
)(LayoutModal);
