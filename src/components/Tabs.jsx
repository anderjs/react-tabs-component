import React from 'react';
import { bootstrapClassNames } from './constants';
import PropTypes from 'prop-types';


export const Tabs = ({ content, defaultTab = 0, onChange }) => {
  const [currentTab, setCurrentTab] = React.useState(defaultTab);
  /**
   * Shows the current tabNumber.
   * @param {number} tabIndex 
   */
  function onClickTab(tabIndex) {
    if(tabIndex !== currentTab) { 
      setCurrentTab(tabIndex);
      if(onChange)
    }
  };

  function getActiveTab(tabIndex) {
    if(tabIndex === currentTab) return bootstrapClassNames.tabItemActive;
    return bootstrapClassNames.tabItem;
  }

  return (
    <React.Fragment>
       <div className={bootstrapClassNames.tabs} role='tablist'>
        {content.map((tab, index) => (
          <li 
            className={getActiveTab(index)}
            onClick={() => onClickTab(index)} 
            >
            {tab.tabName}
          </li>
        ))}  
      </div>
      <div className={bootstrapClassNames.tabContent}>
        {content.map((tab, index) => (
          index === currentTab && (
            <div className={getActiveTab(index)} key={index}>
              {tab.JSX}
            </div>
          )
        ))}
      </div>
    </React.Fragment>
  );
};

Tabs.propTypes = {
  content: PropTypes.array.isRequired,
  defaultTab: PropTypes.number
};