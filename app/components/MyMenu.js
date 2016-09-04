import React from 'react';

class MyMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROPS ======== MYmenuu ====== ", props);
  }
  render() {
    const optionsList = this.props.optionToMenu.map(function(opToMenu, key) {
      return (
        <li key={key} className="inline-block app-menu">
          <a target="_blank" className={opToMenu.classCss} href={opToMenu.hyperLink}>{opToMenu.name}</a>
        </li>
      );
    });

    return (
      <ul className="no-padding">
        {optionsList}
      </ul>
    )
  }
}

export default MyMenu;
