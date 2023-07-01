
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('slide-in-animation');
        }
    })
}, {threshold: 1});

observer.observe(document.querySelector('.about-me')!);
observer.observe(document.querySelector('.working-on-card')!);
observer.observe(document.querySelector('.contact-page-wrapper')!);