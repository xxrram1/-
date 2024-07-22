document.addEventListener("DOMContentLoaded", function() {
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');
    const popup = document.getElementById('project-popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupDetailsContent = document.getElementById('popup-details-content');
    const popupTechList = document.getElementById('popup-tech-list');
    const closePopup = document.querySelector('.popup .close');

    viewProjectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectCard = button.closest('.project-card');
            const projectImage = projectCard.querySelector('img').src;
            const projectTitle = projectCard.querySelector('h3').textContent;
            const projectDescription = projectCard.querySelector('p').textContent;

            popupImage.src = projectImage;
            popupTitle.textContent = projectTitle;
            popupDescription.textContent = projectDescription;


            popupDetailsContent.textContent = "Web page";
            popupTechList.innerHTML = `
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JS</li>
            `;

            popup.classList.add('show');
        });
    });

    closePopup.addEventListener('click', function() {
        popup.classList.remove('show');
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.classList.remove('show'); 
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const colorSchemeSelector = document.getElementById('colorScheme');

    colorSchemeSelector.addEventListener('change', (event) => {
        document.body.className = event.target.value;
        
    });
 
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    setInterval(() => {
        textItems.forEach((item, index) => {
            item.style.opacity = index === currentIndex ? '1' : '0';
        });

        currentIndex = (currentIndex + 1) % textItems.length;
    }, 2500); 
});
document.addEventListener("DOMContentLoaded", function() {
    const features = [
        { title: 'HTML', description: 'Expert in crafting semantic and accessible HTML.', proficiency: 95 },
        { title: 'CSS', description: 'Skilled in creating responsive and visually appealing designs with CSS.', proficiency: 85 },
        { title: 'JavaScript', description: 'Proficient in JavaScript for creating dynamic and interactive web elements.', proficiency: 80 },
        { title: 'React', description: 'Experienced in building modern web applications using React.', proficiency: 30 },
        { title: 'Node.js', description: 'Competent in server-side development using Node.js.', proficiency: 30 },
        { title: 'UI/UX Design', description: 'Strong background in designing user-friendly and visually pleasing interfaces.', proficiency: 90 },
        { title: 'SEO Best Practices', description: 'Knowledgeable in optimizing websites for better search engine rankings.', proficiency: 60 },
        { title: 'Performance Optimization', description: 'Experienced in improving website performance for faster load times.', proficiency: 75 },
        { title: 'Accessibility Compliance', description: 'Ensures websites are accessible to users with disabilities.', proficiency: 65 }
    ];

    const featuresContainer = document.getElementById('features-container');

    features.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';

        const featureTitle = document.createElement('h3');
        featureTitle.className = 'feature-title';
        featureTitle.textContent = feature.title;

        const featureDescription = document.createElement('p');
        featureDescription.className = 'feature-description';
        featureDescription.textContent = feature.description;

        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.width = '0%'; 
        progressBar.dataset.width = `${feature.proficiency}%`;

        const progressText = document.createElement('div');
        progressText.className = 'progress-text';
        progressText.textContent = `${feature.proficiency}%`;

        progressContainer.appendChild(progressBar);
        progressContainer.appendChild(progressText);

        featureCard.appendChild(featureTitle);
        featureCard.appendChild(featureDescription);
        featureCard.appendChild(progressContainer);
        featuresContainer.appendChild(featureCard);
    });

    const animateProgressBars = () => {
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const width = bar.dataset.width;
            bar.style.transition = 'width 1.5s ease-out';
            bar.style.width = width;
        });
    };


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text().then(text => {
                    throw new Error(`HTTP error ${response.status}: ${text}`);
                });
            }
        })
        .then(data => {
            form.reset();
            formMessage.textContent = "Your message has been sent successfully!";
            formMessage.style.color = "#28a745";
            formMessage.style.display = "block";
        })
        .catch(error => {
            console.error("Form submission error:", error);
            formMessage.textContent = "Oops! Something went wrong. Please try again.";
            formMessage.style.color = "#dc3545";
            formMessage.style.display = "block";
        });

        const smoothScrollToFormMessage = () => {
            const formMessagePosition = formMessage.getBoundingClientRect().top + window.pageYOffset - 60;
            window.scrollTo({
                top: formMessagePosition,
                behavior: 'smooth'
            });
        };

        smoothScrollToFormMessage();
    });
});