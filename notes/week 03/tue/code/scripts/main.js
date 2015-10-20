function MagicalCreature(options) {
  this.name = options.name;
  this.magicType = options.magicType || 'healing';
}

MagicalCreature.prototype.useMagic = function(otherCreature) {
  console.log(this.name + ' used magic ' + this.magicType + ' on ' + otherCreature.name);
}

function Unicorn(options) {
  MagicalCreature.call(this, options)
}

Unicorn.prototype = Object.create(MagicalCreature.prototype);
Unicorn.prototype.hornSmash = function(otherCreature) {
  console.log(this.name +' totally horn smashed ' + otherCreature.name + '!');
}

var marcy = new Unicorn({magicType: 'Flying', name: 'Marcy'});
var lucy = new MagicalCreature({name:'Lucy'});


// console.log(marcy);
// marcy.useMagic()
// marcy.hornSmash(lucy)


var example = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sumOfExample = example.reduce(function(total, current){
  return total + current;
})

var unicorns = [
  new Unicorn({name: 'Marcy'}),
  new Unicorn({name: 'Sprinkles', magicType: 'pink powder'}),
  new Unicorn({name: 'Sprinkles II'}),
  new Unicorn({name: 'Dot', magicType: 'regenerative'}),
  new Unicorn({name: 'Bull dog Jones', magicType: 'secret bull dog'}),
  new Unicorn({name: 'Amalthea', magicType: 'species transformation'})
]

// only have basic magic
var basicUnicorns = unicorns.filter(function(unicorn) {
  // if (unicorn['magicType'] === 'healing') {
  //   return true;
  // } else {
  //   return null;
  // }
  return unicorn.magicType === 'healing';
});

// make them all use their magic
unicorns.forEach(function(unicorn) {
  unicorn.useMagic(lucy);
})
