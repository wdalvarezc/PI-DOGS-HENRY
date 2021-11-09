import {App} from './App';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DogCreate from './components/DogCreate';
import DogDetail from './components/DogDetail';
import { Error404 } from './components/Error404';

configure({adapter: new Adapter()});

  describe('App', () => {
  let store
  const middlewares = []
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe('El componente LandingPage debe renderizar en la ruta /', () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(LandingPage)).toHaveLength(1);
    });
  });
  describe('El componente Home debe renderizar en la ruta /home', () => {
    it('El componente Home debe renderizar en la ruta /home', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/home' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(Home)).toHaveLength(0);
    });
  });


  it('El componente DogCreate debe renderizar en la ruta /dogs', () => {
    const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/dogs' ]}>
            <App />
          </MemoryRouter>
        </Provider>
    );
    expect(container.find(DogCreate)).toHaveLength(0);
  });

  
  it('El componente DogDetail debe renderizar en la ruta /home/:id', () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[  '/home/:id' ]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.find(DogDetail)).toHaveLength(0);
  });
  describe('Error 404', () => {

    it('El componente Error 404 debe renderizar en cualquier ruta diferente a las definidas previamente', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/edit/1' ]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(container.find(Error404)).toHaveLength(0);
    });
  });
});
  