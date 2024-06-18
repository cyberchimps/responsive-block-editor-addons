
import ResponsiveNewPaddingControlHelper from "./ResponsivePaddingControlHelper"

const { Dashicon, TabPanel } = wp.components;

export default function ResponsiveNewPaddingControl (props) {

    return (
        <>  
        <TabPanel
            className="responsive-size-type-field-tabs rbea-responsive-controls responsive-size-type-field__common-tabs  responsive-inline-margin"
            activeClass="active-tab"
            tabs={[
                {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                    " responsive-desktop-tab  responsive-responsive-tabs",
                },
                {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className: " responsive-tablet-tab  responsive-responsive-tabs",
                },
                {
                    name: "mobile",
                        title: <Dashicon icon="smartphone" />,
                    className: " responsive-mobile-tab  responsive-responsive-tabs",
                },
            ]}
        >
        {(tab) => {
            let tabout;
  
            if ("mobile" === tab.name) {
                tabout = (
                    <ResponsiveNewPaddingControlHelper
                     {...{...props, tabName: 'Mobile'}}
                    />
            );
            } else if ("tablet" === tab.name) {
                tabout = (
                    <ResponsiveNewPaddingControlHelper {...{...props, tabName: 'Tablet'}}/>
            );
            } else {
                tabout = (
                    <ResponsiveNewPaddingControlHelper
                    {...{...props, tabName: ''}}
                    />
            );
            }
  
            return <div>{tabout}</div>;
        }}
        </TabPanel>
        </>
    );
}