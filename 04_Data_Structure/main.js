'use strict';

const data = {
  fname: 'Jessie',
  lname: 'Caminos',
  age: 24,
  friends: {
    1: 'Randyl',
    2: 'Jong2',
    3: 'Jomarie'
  },
  hobies: [
    'Coding',
    'Reading',
    'Eating',
    'Swimming',
  ],
  day: 'Friday',
  avail: function(days){
    if(!(days == this.day)) return console.log('Not Available');
    return console.log('Available');
  }
}

const result = data.avail('friday');
console.log(result);
