import React from 'react';

/* Child components */
import MyMenu from './MyMenu.js';

class MySelf extends React.Component {
  constructor() {
    super();

    this.optionToMenu = [
      {
        name : 'Linkedin',
        hyperLink: 'https://br.linkedin.com/in/yoseph-santos-b6567b38',
        classCss: 'color-linkedin app-to-click'
      },
      {
        name : 'GitHub',
        hyperLink: 'https://github.com/YosephCode',
        classCss: 'color-github app-to-click'
      },
      {
        name : 'Twitter',
        hyperLink: 'https://twitter.com/Yoseph_Santos',
        classCss: 'color-twitter app-to-click'
      },
      {
        name : 'Workshop',
        hyperLink: 'http://ycodeworkshop.com/',
        classCss: 'color-workshop app-to-click'
      }
    ]
  }
  render() {
    return (
      <div className="center">
        <div className="talk-bubble tri-right round btm-left">
          <nav>
            <MyMenu
              optionToMenu = {this.optionToMenu}
            />
          </nav>
        </div>
        <div>
          <p>Social media about Yoseph Santos</p>
        </div>
      </div>
    );
  }
}

export default MySelf;
