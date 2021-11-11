import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PokeNavBar from '../components/navBar/pokeNavBar'


configure({ adapter: new Adapter() });

describe("<NavBar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PokeNavBar />);
  });

  it("render two <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(2);
  });
  
  it('First Link have text "Pokemon Lab" and redirect to "/pokelab".', () => {

    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/pokelab");

    expect(wrapper.find(Link).at(0).text()).toEqual("Pokemon Lab");
  });
  it('First Link have text "Pokedex" and redirect to "/pokemain".', () => {

    expect(wrapper.find(Link).at(1).prop("to")).toEqual("/pokemain");
    
    expect(wrapper.find(Link).at(1).text()).toEqual("Pokedex");
  });
});