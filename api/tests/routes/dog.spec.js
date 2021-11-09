/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
};

describe('Dog routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
});


describe('POST /dogs', () => {
  it('responde con 200', () => agent.post('/dogs').expect(200));
  it('responde con El Perrito ha sido creado con exito y envia el valor a la base de datos', () =>
    agent.post('/dogs')
      .send({name:"PerroNuevo",
        height_max: 20,
        height_min: 10,
        weight_max: 6,
        weight_min: 3,
        life_time_max: 20,
        life_time_min: 15,
        temperament: ["Spirited", "Diligent", "Dominant"],
        img: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg",
      })
      .then((res) => {
        expect(res.body).to.be.equal('El Perrito ha sido creado con exito');
      })
  );
  it('responde con El Perrito ha sido creado con exito y envia el valor a la base de datos', () =>
    agent.post('/dogs')
      .send({name:"PerroNuevo",
      height_max: 20,
      height_min: 10,
      weight_max: 6,
      weight_min: 3,
      life_time_max: 20,
      life_time_min: 15,
      temperament: ["Spirited", "Diligent", "Dominant"],
      img: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg",
      })
      .then((res) => {
        expect(res.body).to.be.equal('El Perrito ha sido creado con exito');
      })
  );
});
