import { useState, Fragment } from '@wordpress/element';

const RbeaInlineTabRadioControl = ({ label, selectedValue, onChange, options, defaultValue = "none" }) => {
  // Track the currently selected option
  const [activeOption, setActiveOption] = useState(selectedValue);

  // Handle the option change
  const handleChange = (value) => {
    // If the clicked option is already selected, reset to the default (unselect it)
    if (activeOption === value) {
      setActiveOption(null); 
      onChange(defaultValue); 
    } else {
      setActiveOption(value); 
      onChange(value);
    }
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
