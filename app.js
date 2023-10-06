const classes=[
    {
        Title: "APWH",
        HW: 3,
        AP: true,
        required: true,
        teachers: ["Mugge","Carr", "Rerrick"],
    },
    {
        Title: "APCSP",
        HW: 1,
        AP: true,
        required: false,
        teachers: ["Whalen","Frusci"],

    },
    {
        Title: "APP1",
        HW: 2,
        AP: true,
        required: false,
        teachers: ["Ferrigno"],
    },
    {
        Title: "Physmed",
        HW: 1,
        AP: false,
        required: false,
        teachers: ["Colangelo"],
    },
    {
        Title: "Phys",
        HW: 1,
        AP: false,
        required: false,
        teachers: ["Colangelo","Weitzman"],
    },
    {
        Title: "Alg2",
        HW: 1,
        AP: false,
        required: true,
        teachers: ["Partnow","Amoroso"],
    },
]
classes.forEach(function (Title, HW, AP, required, teachers){
    console.log(Title, HW, AP, required, teachers);
});
const APs = classes.filter((x) => x.AP === true);
console.log(APs);
