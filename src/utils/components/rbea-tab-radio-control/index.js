import { useState, Fragment } from '@wordpress/element';
import { RadioControl } from '@wordpress/components';

const RbeaTabRadioControl = ({ label, selectedValue, onChange, options }) => {
  // Store the currently selected option in state
  const [activeOption, setActiveOption] = useState(selectedValue);

  // Handle the option change
  const handleChange = (value) => {
    setActiveOption(value); // Update the active option
    onChange(value); // Trigger the onChange handler
  };

  return (
    <Fragment>
      <div className="rbea-tab-radio-control-wrapper">
        <label>{label}</label>
        <div className="rbea-tab-radio-options .components-flex">
          {options.map((option) => (
            <div
              key={option.value}
              className={`rbea-tab-radio-option ${
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

export default RbeaTabRadioControl;
