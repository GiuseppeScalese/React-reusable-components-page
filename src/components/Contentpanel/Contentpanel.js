import React, {Component} from 'react';
import './Contentpanel.scss';
import Checkbox from '../Checkbox/Checkbox';
import Card from '../Card/Card';

class Contentpanel extends Component {

  handleCheck = () => {
//some checks
  };

  render() {
    return (
      <div className="Contentpanel">
      <h2>Workflows</h2>
      <div className="Contentpanel__wrapper">

        <div className="Contentpanel__panel-box">
          <div className="Contentpanel__panel-left">
              <div className="Contentpanel__content">
              <h3><span className="icon icon-arrow-down"/>Creators</h3>
                <Checkbox id={"checkbox1"} label={"Paul McCartney (Me)"} checked={"checked"} handleCheck={() => this.makeHttpRequestWithPage}/>
                <Checkbox id={"checkbox2"} label={"John Lennon"} checked={"checked"} handleCheck={() => this.makeHttpRequestWithPage}/>
                <Checkbox id={"checkbox3"} label={"Ringo Starr"} handleCheck={() => this.makeHttpRequestWithPage}/>
              </div>

              <div className="Contentpanel__content">
                <h3><span className="icon icon-arrow-down"/>Triggers</h3>
                <Checkbox id={"checkbox4"} label={"No trigger"} checked={"checked"} handleCheck={() => this.makeHttpRequestWithPage}/>
                <Checkbox id={"checkbox5"} className={"icon-exclamation"}  label={"Alerting"} checked={"checked"} handleCheck={() => this.makeHttpRequestWithPage}/>
                <Checkbox id={"checkbox6"} className={"icon-cursor-solid"} label={"Manual"} checked={"checked"}  handleCheck={() => this.makeHttpRequestWithPage}/>
                <Checkbox id={"checkbox7"} className={"icon-thunder-solid"} label={"Callable"} checked={"checked"} handleCheck={() => this.makeHttpRequestWithPage}/>
                <Checkbox id={"checkbox8"} className={"icon-clipboard-solid"} label={"Form"} checked={"checked"} handleCheck={() => this.makeHttpRequestWithPage}/>
                <Checkbox id={"checkbox9"} className={"icon-plug-solid"} label={"Service"} checked={"checked"} handleCheck={() => this.makeHttpRequestWithPage}/>
                <Checkbox id={"checkbox10"} className={"icon-globe"} label={"Webhooks"} checked={"checked"} handleCheck={() => this.makeHttpRequestWithPage}/>
        </div>

              <div className="Contentpanel__content">
                <h3><span className="icon icon-arrow-down"/>Status</h3>
                <Checkbox id={"checkbox11"} className={"icon-globe"} label={"Enabled"} checked={"checked"} handleCheck={() => this.makeHttpRequestWithPage}/>
                <Checkbox id={"checkbox12"} className={"icon-globe"} label={"Disabled"} checked={"checked"} handleCheck={() => this.makeHttpRequestWithPage}/>
              </div>

          </div>
          <div className="Contentpanel__panel-right">
            <label htmlFor="name" className="visually-hidden">Find a workflow</label>

            <input
              id="search"
              name="Search"
              type="text"
              placeholder="Find a workflow"
              className="search-field"
            />
            <div className="Contentpanel__cards-list">
              <Card iconType={"icon-globe"} primaryText={"Yellow submarine"} secondaryText={"Created by me"} tagType={"grey"} tagLabel={"Personal"}/>
              <Card iconProduct={"icon-slack"} cardType={"Card--icon"} iconType={"icon-globe"} primaryText={"My slack authentiation"} secondaryText={"Created at 21/10/19 - 11:08 by me"} tagType={"grey"} tagLabel={"Private"}/>
              <Card iconType={"icon-globe"} primaryText={"Strawberry fields forever"} secondaryText={"Created by me"} tagType={"blue"} tagLabel={"Organization"}/>
              <Card iconType={"icon-globe"} primaryText={"Lucy in the sky with diamonds"} secondaryText={"Created by me"} tagType={"grey"} tagLabel={"Personal"}/>
              <Card iconType={"icon-globe"} primaryText={"Black bird"} secondaryText={"Created by me"} tagType={"blue"} tagLabel={"Organization"}/>
              <Card iconType={"icon-globe"} primaryText={"Across the universe"} secondaryText={"Created by me"} tagType={"grey"} tagLabel={"Personal"}/>
              <Card iconType={"icon-globe"} primaryText={"Lady madonna"} secondaryText={"Created by me"} tagType={"grey"} tagLabel={"Personal"}/>
            </div>
          </div>
        </div>
      </div>
</div>
    );
  }
}

export default Contentpanel;
