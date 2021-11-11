/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
let dog = {
  name: 'Pug',
  height_min: '10',
  height_max: '20',
  weight_min: '2',
  weight_max: '3',
  life_time_min: '2',
  life_time_max: '10',
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
dog = {
  name: "PerroNuevo",
  height_max: 20,
  height_min: 10,
  weight_max: 6,
  weight_min: 3,
  life_time_max: 20,
  life_time_min: 15,
  temperament: ["Spirited", "Diligent", "Dominant"],
  img: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg"
}

describe('POST /dogs', () => {
  it('creado con exito y envia el valor a la base de datos', () =>
  agent.post('/dogs')
  .send(dog)
  .then((res) => {
    console.log(res.text)
    expect(res.text).to.be.equal('Dog creado con exito');
  })
  );
});
