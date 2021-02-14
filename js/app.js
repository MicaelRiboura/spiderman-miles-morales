document.addEventListener('DOMContentLoaded', () => {
    let timeline = new TimelineMax();

    timeline.fromTo('.bg-loader', 1, 
        {width: '100%'},
        {width: '0%', delay: 3, ease: Expo.easeInOut}
    )
    .fromTo('.bg-video',2,
    {width: '0%', opacity: 0},
    {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')

    .fromTo('.logo', 0.5,
    {y: -50, opacity: 0},
    {y: 0, width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.nav-list', 0.5,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.nav-social', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.item-1', 0.6,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.item-2', 0.6,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.item-3', 0.6,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.item-4', 0.6,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
    .fromTo('.spiderman', 0.6,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
});


const bx = document.querySelector('.bx');
const navList = document.querySelector('.nav-list');

bx.addEventListener('click', () => {
    navList.classList.toggle('showMenu');
});