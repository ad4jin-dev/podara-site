const steps = document.querySelectorAll('.step');
const image = document.getElementById('featureImage');

const images = [
  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
  "https://images.unsplash.com/photo-1581090700227-1e8c4bfa5f74",
  "https://images.unsplash.com/photo-1497366216548-37526070297c"
];

window.addEventListener('scroll', () => {
  let index = Math.floor(window.scrollY / 400);

  steps.forEach((step, i) => {
    step.classList.remove('active');
    if(i === index){
      step.classList.add('active');
      image.src = images[i];
    }
  });
});
