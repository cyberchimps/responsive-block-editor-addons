import { useState, Fragment } from '@wordpress/element';
import { RadioControl } from '@wordpress/components';

const RbeaInlineTabRadioControl = ({ label, selectedValue, onChange, options }) => {
  // Track the currently selected option
  const [activeOption, setActiveOption] = useState(selectedValue);

  // Handle the option change
  const handleChange = (value) => {
    setActiveOption(value); // Update the active option in the state
    onChange(value); // Call the onChange handler
  };

  return (
    <Fragment>
      <div className="rbea-inline-radio-tab-control-wrapper">
        <label>{label}</label>
        <div className="rbea-inline-radio-tab-options">
          {options.map((option) => (
            <div
              key={option.value}
              className={`rbea-inline-radio-tab-option ${
                activeOption === option.value ? 'is-active' : ''
              }`}
              onClick={() => handleChange(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default RbeaInlineTabRadioControl;
