const courses=[
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
console.log("All courses:");
courses.forEach((course) => console.log(course.Title));
console.log("All teachers:");
courses.forEach((course => {course.teachers.forEach(teacher => {console.log(teacher)})}));
console.log("All AP courses:");
const APs = courses.filter((course) => course.AP === true);
console.log(APs);