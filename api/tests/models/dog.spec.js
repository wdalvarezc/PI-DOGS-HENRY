const { Dog, Temperament, conn } = require('../../src/db.js');
const { expect } = require('chai');


describe('Temperament model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Temperament.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name of temperament is null', (done) => {
        Temperament.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name of temperament', () => {
        Temperament.create({ name: 'Friendly' });
      });
    });
  });
});


describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
    });
    describe('height_min', () => {
      it('should throw an error if height_min is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid height_min')))
          .catch(() => done());
      });
      it('should work when its a valid height_min', () => {
        Dog.create({ height_min: '10' });
      });
    });
    describe('height_max', () => {
      it('should throw an error if height_max is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid height_max')))
          .catch(() => done());
      });
      it('should work when its a valid height_max', () => {
        Dog.create({ height_max: '20' });
      });
    });    
    describe('weight_min', () => {
      it('should throw an error if weight_min is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid weight_min')))
          .catch(() => done());
      });
      it('should work when its a valid weight_min', () => {
        Dog.create({ weight_min: '6' });
      });
    });
    describe('weight_max', () => {
      it('should throw an error if weight_max is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid weight_max')))
          .catch(() => done());
      });
      it('should work when its a valid weight_max', () => {
        Dog.create({ weight_max: '10' });
      });
    });
    describe('life_time_min', () => {
      it('should throw an error if life_time_min is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid life_time_min')))
          .catch(() => done());
      });
      it('should work when its a valid life_time_min', () => {
        Dog.create({ life_time_min: '15' });
      });
    });
    describe('life_time_max', () => {
      it('should throw an error if life_time_max is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid life_time_max')))
          .catch(() => done());
      });
      it('should work when its a valid life_time_max', () => {
        Dog.create({ life_time_max: '20' });
      });
    });
  });
});
