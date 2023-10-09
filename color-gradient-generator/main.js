const button = document.getElementById('changeColorButton');
const body = document.body;
const gradients = [
    'linear-gradient(45deg, #FF5733, #33FF57)',
    'linear-gradient(45deg, #33FF57, #5733FF)',
    'linear-gradient(45deg, #5733FF, #33FFFF)',
    'linear-gradient(45deg, #33FFFF, #FF33FF)',
    'radial-gradient(circle farthest-corner at 10% 20%,  rgba(98,114,128,1) 0%, rgba(52,63,51,1) 90.1% )',
    'radial-gradient(circle 1294px at -15.5% 23.8%,  rgba(255,206,149,1) 0%, rgba(247,92,92,1) 44.9%, rgba(108,0,96,0.97) 93.8% )'
];

let currentGradientIndex = 0;

button.addEventListener('click', () => {
    body.style.background = gradients[currentGradientIndex];
    currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
});
