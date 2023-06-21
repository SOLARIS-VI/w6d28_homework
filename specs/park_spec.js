const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('brachiosaurus', 'herbivore', 30);
    dinosaur3 = new Dinosaur('velociraptor', 'carnivore', 40);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function () {
    const dinosaur4 = new Dinosaur('triceratops', 'herbivore', 25);
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur2);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.findMostAttractiveDinosaur();
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findDinosaursBySpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.calculateTotalVisitorsPerDay();
    assert.strictEqual(actual, 120);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.calculateTotalVisitorsPerYear();
    assert.strictEqual(actual, 43800);
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = park.calculateTotalRevenuePerYear();
    assert.strictEqual(actual, 2190000);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.removeAllDinosaursBySpecies('t-rex');
    const actual = park.findDinosaursBySpecies('t-rex');
    assert.deepStrictEqual(actual, []);
  });

  it('should provide an object containing the number of dinosaurs in the park by diet type', function () {
    const actual = park.getDietTypeCounts();
    const expected = { 'carnivore': 2, 'herbivore': 1, 'omnivore':0 };
    assert.deepStrictEqual(actual, expected);
  });
});
