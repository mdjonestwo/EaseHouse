

// Jumbo ANIMATION
let jumboTL =  gsap.timeline();

jumboTL.fromTo(
    ".login-container h1",
    {
        x: -600,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1, 
        duration: 2
    }
).fromTo(
    ".login-container h3",
    {
        x: 600,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 2
    },
    ">-.3"
)
