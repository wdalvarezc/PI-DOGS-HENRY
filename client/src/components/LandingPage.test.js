import React from 'react';
import { NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import LandingPage from './LandingPage';

configure({adapter: new Adapter()});

describe('<LandingPage />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<LandingPage />)
  })
  it('Deberia renderizar Un <h1 />  que contenga el texto "Bienvenidos al Mundo Perruno"', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h1').at(0).text()).toEqual('Bienvenidos al Mundo Perruno');
  });
  it('Deberia renderizar Un <NavLink />', () => {
    expect(wrapper.find(NavLink)).toHaveLength(1);
  });
  it('El NavLink contiene una h4 y una Imagen y cambiar la ruta hacia "/home".', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/home');
  });
  it('El <h4 /> debe contener el texto "Ingresar"', () => {
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('h4').at(0).text()).toEqual('Ingresar');
  });
  it('La <img /> debe contener una imagen alusiva al PI Dogs', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

})