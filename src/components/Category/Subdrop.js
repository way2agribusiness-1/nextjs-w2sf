import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function SubKnowTech() {
  return (
    <DropdownButton id="dropdown-item-button" title="Agritech">
      <div className="lol">
        <Dropdown.ItemText>Farm Machineries</Dropdown.ItemText>
        <Dropdown.Item as="button">Implements & Others</Dropdown.Item>
      </div>
    </DropdownButton>
  );
}
export function SubKnowClinic() {
    return (
      <DropdownButton id="dropdown-item-button" title="Agritech">
        <div className="lol">
          <Dropdown.ItemText>PGR</Dropdown.ItemText>
          <Dropdown.Item as="button">PPP</Dropdown.Item>
        </div>
      </DropdownButton>
    );
  }
  export function SubKnowMarket() {
    return (
      <DropdownButton id="dropdown-item-button" title="Agritech">
        <div className="lol">
          <Dropdown.ItemText>Crop Production</Dropdown.ItemText>
          <Dropdown.Item as="button">Value Addition</Dropdown.Item>
          <Dropdown.Item as="button">Market</Dropdown.Item>
        </div>
      </DropdownButton>
    );
  }
  export function SubKnowPPP() {
    return (
      <DropdownButton id="dropdown-item-button" title="PPP">
        <div className="lol">
          <Dropdown.ItemText>PGR</Dropdown.ItemText>
          <Dropdown.Item as="button">PPP</Dropdown.Item>
        </div>
      </DropdownButton>
    );
  }