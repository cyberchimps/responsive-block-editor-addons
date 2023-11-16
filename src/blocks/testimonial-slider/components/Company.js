const { RichText } = wp.blockEditor;

const { createBlock } = wp.blocks;

const { __ } = wp.i18n;

class Company extends React.Component {
  render() {
    const { attributes, setAttributes, props, index_value } = this.props;

    const test_arr = attributes.test_block[index_value];
    let company = "";
    if (test_arr && typeof test_arr !== "undefined") {
      company = test_arr["company"];
      if (Array.isArray(company)) {
        company = company[0];
      }
    }

    var data_copy = [...attributes.test_block];

    if (setAttributes !== "not_set") {
      return (
        <RichText
          tagName="div"
          value={company}
          className="responsive-block-editor-addons-tm__company"
          style={{
            color: attributes.companyColor,
            fontFamily: attributes.companyFontFamily,
            fontWeight: attributes.companyFontWeight,
            lineHeight: attributes.companyLineHeight,
            fontSize: attributes.companyFontSize,
          }}
          onChange={(value) => {
            var new_content = {
              description: data_copy[index_value]["description"],
              name: data_copy[index_value]["name"],
              company: value,
              image: data_copy[index_value]["image"],
            };
            data_copy[index_value] = new_content;
            setAttributes({ test_block: data_copy });
          }}
          multiline={false}
          placeholder={__("Company Name", "responsive-block-editor-addons")}
          onMerge={props.mergeBlocks}
          onSplit={
            props.insertBlocksAfter
              ? (before, after, ...blocks) => {
                  setAttributes({ content: before });
                  props.insertBlocksAfter([
                    ...blocks,
                    createBlock("core/paragraph", { content: after }),
                  ]);
                }
              : undefined
          }
          onRemove={() => props.onReplace([])}
        />
      );
    } else {
      return (
        <RichText.Content
          tagName="span"
          value={company}
          className="responsive-block-editor-addons-tm__company"
          style={{
            color: attributes.companyColor,
            fontFamily: attributes.companyFontFamily,
            fontWeight: attributes.companyFontWeight,
            lineHeight: attributes.companyLineHeight,
            fontSize: attributes.companyFontSize,
          }}
        />
      );
    }
  }
}

export default Company;
