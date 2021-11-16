let tigger = { character: "Tigger" }; // start with just the character attribute
let pooh = { character: "Winnie the Pooh" };
let piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
let bees = { character: "Bees"};
let owl = { character: "Owl"};
let crisRobin = { character: "Christopher Robin"};
let rabbit = { character: "Rabbit"};
let gopher = { character: "Gopher"};
let kanga = { character: "Kanga"};
let eeyore = { character: "Eeyore"};
let heffalumps = { character: "Heffalumps"};

tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
tigger.north.west = piglet;
tigger.north.east = bees;  

pooh.south = tigger.north;
pooh.west = piglet.east;
pooh.east = bees.west;
pooh.north = crisRobin;
pooh.north.west = owl;
pooh.north.east = rabbit;

piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
piglet.north = owl;
piglet.north.east = crisRobin;
piglet.east = pooh;

bees.north = rabbit;
bees.north.east = gopher;
bees.north.east = crisRobin;
bees.west = pooh;

owl.south = piglet.north;
owl.south.east = pooh.north.west;
owl.east = crisRobin;
owl.north.east = kanga;

crisRobin.west = owl;
crisRobin.east = rabbit;
crisRobin.north = kanga;
crisRobin.south = pooh.north;
crisRobin.south.west = piglet.north.east;
crisRobin.south.east = bees.north.west;

rabbit.west = crisRobin;
rabbit.east = gopher;
rabbit.south = bees.north;
rabbit.south.west = pooh.north.east;
rabbit.north.west = kanga;

gopher.west = rabbit;
gopher.south.west = bees.north.east;

kanga.north = eeyore;
kanga.north.east = heffalumps;
kanga.south = crisRobin.north;
kanga.south.west = owl.north.east;
kanga.south.east = rabbit.north.west;

eeyore.east = heffalumps;
eeyore.south = kanga.north;

heffalumps.west = eeyore;
heffalumps.south.west = kanga.north.east;

