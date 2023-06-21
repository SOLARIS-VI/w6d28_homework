const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  };
  
  Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
  };
  
  Park.prototype.removeDinosaur = function (dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    if (index !== -1) {
      this.dinosaurs.splice(index, 1);
    }
  };
  
  Park.prototype.findMostAttractiveDinosaur = function () {
    let mostAttractiveDinosaur = null;
    let maxVisitors = 0;
  
    for (let i = 0; i < this.dinosaurs.length; i++) {
      const dinosaur = this.dinosaurs[i];
      if (dinosaur.guestsAttractedPerDay > maxVisitors) {
        mostAttractiveDinosaur = dinosaur;
        maxVisitors = dinosaur.guestsAttractedPerDay;
      }
    }
  
    return mostAttractiveDinosaur;
  };
  
  
  Park.prototype.findDinosaursBySpecies = function (species) {
    const dinosaursBySpecies = [];
  
    for (const dinosaur of this.dinosaurs) {
      if (dinosaur.species.toUpperCase() === species.toUpperCase()) {
        dinosaursBySpecies.push(dinosaur);
      }
    }
  
    return dinosaursBySpecies;
  };
  
  Park.prototype.calculateTotalVisitorsPerDay = function () {
    let totalVisitors = 0;
  
    for (const dinosaur of this.dinosaurs) {
      totalVisitors += dinosaur.guestsAttractedPerDay;
    }
  
    return totalVisitors;
  };
  
  Park.prototype.calculateTotalVisitorsPerYear = function () {
    const visitorsPerDay = this.calculateTotalVisitorsPerDay();
    return visitorsPerDay * 365;
  };
  
  Park.prototype.calculateTotalRevenuePerYear = function () {
    const totalVisitorsPerYear = this.calculateTotalVisitorsPerYear();
    return totalVisitorsPerYear * this.ticketPrice;
  };
  
  Park.prototype.removeAllDinosaursBySpecies = function (species) {
    this.dinosaurs = this.dinosaurs.filter(
      (dinosaur) => dinosaur.species.toUpperCase() !== species.toUpperCase()
    );
  };
  
  Park.prototype.getDietTypeCounts = function () {
    const dietCounts = {
      carnivore: 0,
      herbivore: 0,
      omnivore: 0,
    };
  
    for (const dinosaur of this.dinosaurs) {
      const dietType = dinosaur.diet.toLowerCase();
      if (dietType === 'carnivore') {
        dietCounts.carnivore++;
      } else if (dietType === 'herbivore') {
        dietCounts.herbivore++;
      } else if (dietType === 'omnivore') {
        dietCounts.omnivore++;
      }
    }
  
    return dietCounts;
  };
  
  
  
  module.exports = Park;
  