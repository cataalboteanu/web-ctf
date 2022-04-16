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
        path: "https://i.ibb.co/n0RDTsq/boat-gaa2ca329d-640.jpg",
        description: "Barca pe lac, priveliste de munte"
    },
    {
        path: "https://i.ibb.co/WVVZFt1/dog-g213168153-640.jpg",
        description: "Caine zambaret"
    },
    {
        path: "https://i.ibb.co/KjbwsxR/grill-g30f8f79f9-640.jpg",
        description: "Foisor pentru gratar"
    },
    {
        path: "https://i.ibb.co/wrZxm7t/meat-gde809f16d-640.jpg",
        description: "Carne pe gratar"
    },
    {
        path: "https://i.ibb.co/kJL8Sc8/dog-g71b6deabf-640.jpg",
        description: "Caine in excurie pe munte"
    },
    {
        path: "https://i.ibb.co/sFqVVbt/mountains-g70563c951-640.jpg",
        description: "Vedere de la munte"
    },
    {
        path: "https://i.ibb.co/xDgN75g/person-g5c2bd8b55-640.jpg",
        description: "On top of the world munte"
    },
    {
        path: "https://i.ibb.co/TvNSymX/rottweiler-g31139b978-640.jpg",
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
