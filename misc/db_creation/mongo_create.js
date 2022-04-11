db = db.getSiblingDB('vulns');

let nosql = [
    {
        username: "user",
        password: "user",
        role: "guest"
    },
    {
        username: "gabriel",
        password: "gabi1234",
        role: "guest"
    },
    {
        username: "admin",
        password: "yO36MeEu",
        role: "admin"
    }
];

let xss = [
    {
        path: "/images/boat-gaa2ca329d_640.jpg",
        description: "Barca pe lac, priveliste de munte"
    },
    {
        path: "/images/dog-g213168153_640.jpg",
        description: "Caine zambaret"
    },
    {
        path: "/images/grill-g30f8f79f9_640.jpg",
        description: "Foisor pentru gratar"
    },
    {
        path: "/images/meat-gde809f16d_640.jpg",
        description: "Carne pe gratar"
    },
    {
        path: "/images/dog-g71b6deabf_640.jpg",
        description: "Caine in excurie pe munte"
    },
    {
        path: "/images/mountains-g70563c951_640.jpg",
        description: "Vedere de la munte"
    },
    {
        path: "/images/person-g5c2bd8b55_640.jpg",
        description: "On top of the world munte"
    },
    {
        path: "/images/rottweiler-g31139b978_640.jpg",
        description: "Cainii vecinului"
    }
];

let nosqlIndex = { username : 1 };
let xssIndex = { path : 1 };

let collInfoObjs = [ 
    { coll: "nosql_bypass", data: nosql, index: nosqlIndex }, 
    { coll: "xss_stored", data: xss, index: xssIndex } 
  ];
  
for (obj of collInfoObjs) {
    db[obj.coll].insertMany(obj.data);
    db[obj.coll].createIndex(obj.index);
}
