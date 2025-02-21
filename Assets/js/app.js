function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleMenu();
});



// function toggleContact(platform) {
//     const info = document.getElementById(`${platform}-info`);
//     const allInfo = document.getElementsByClassName('contact-info');
    
//     // Remove active class from all info elements
//     Array.from(allInfo).forEach(element => {
//         element.classList.remove('active');
//     });
    
//     // Toggle active class on clicked element
//     if (!info.classList.contains('active')) {
//         info.classList.add('active');
//     }
// }

// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         const navLinks = document.querySelector('.nav-links');
//         navLinks.classList.remove('active');
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const animateOnScroll = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // Determine animation direction based on element type
//                 if (entry.target.tagName === 'H2') {
//                     entry.target.classList.add('slide-from-left');
//                 } else if (entry.target.classList.contains('player-card') || 
//                          entry.target.classList.contains('gallery-item')) {
//                     // Add index for staggered animations
//                     const items = Array.from(entry.target.parentElement.children);
//                     const index = items.indexOf(entry.target);
//                     entry.target.style.setProperty('--item-index', index);
//                     entry.target.classList.add('slide-from-bottom');
//                 } else if (entry.target.classList.contains('contact-icons')) {
//                     entry.target.classList.add('slide-from-bottom');
//                 } else {
//                     entry.target.classList.add('slide-from-right');
//                 }
                
//                 // Unobserve after animation
//                 observer.unobserve(entry.target);
//             }
//         });
//     };

//     // Create observer
//     const observer = new IntersectionObserver(animateOnScroll, {
//         threshold: 0.2,
//         rootMargin: '0px'
//     });

//     // Observe elements
//     document.querySelectorAll('section h2, section p, .player-card, .gallery-item, .contact-icons').forEach(element => {
//         element.classList.add('animate-on-scroll');
//         observer.observe(element);
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     // Initialize elements as hidden
//     const initializeElements = () => {
//         document.querySelectorAll('.animate-on-scroll').forEach(element => {
//             element.style.visibility = 'hidden';
//             element.style.opacity = '0';
//         });
//     };

//     // Animation observer function
//     const animateOnScroll = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 requestAnimationFrame(() => {
//                     animateElement(entry.target);
//                 });
//                 observer.unobserve(entry.target);
//             }
//         });
//     };

//     // Function to trigger animations
//     const animateElement = (element) => {
//         element.style.visibility = 'visible';
//         if (element.tagName === 'H2') {
//             element.classList.add('slide-from-left');
//         // } else if (element.classList.contains('player-card') || 
//         //            element.classList.contains('gallery-item')) {
//         //     const items = Array.from(element.parentElement.children);
//         //     const index = items.indexOf(element);
//         //     element.style.setProperty('--item-index', index);
//             // element.classList.add('slide-from-bottom');
//         } else if (element.classList.contains('contact-icons')) {
//             element.classList.add('slide-from-bottom');
//         } else {
//             element.classList.add('slide-from-right');
//         }
//     };

//     // Function to reset animations
//     const resetAnimation = (element) => {
//         element.style.visibility = 'hidden';
//         element.style.opacity = '0';
//         element.classList.remove('slide-from-left', 'slide-from-right', 'slide-from-bottom');
//         void element.offsetWidth; // Force reflow
//     };

//     // Create observer
//     const observer = new IntersectionObserver(animateOnScroll, {
//         threshold: 0.2,
//         rootMargin: '0px'
//     });

//     // Initialize and observe elements
//     initializeElements();
//     document.querySelectorAll('section h2, section p,  .contact-icons').forEach(element => {
//         element.classList.add('animate-on-scroll');
//         observer.observe(element);
//     });

//     // Handle navigation clicks
//     document.querySelectorAll('.nav-links a').forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute('href');
//             const targetSection = document.querySelector(targetId);
            
//             if (targetSection) {
//                 targetSection.scrollIntoView({ behavior: 'smooth' });
                
//                 // Reset and replay animations
//                 targetSection.querySelectorAll('.animate-on-scroll').forEach(element => {
//                     resetAnimation(element);
//                     requestAnimationFrame(() => {
//                         setTimeout(() => {
//                             animateElement(element);
//                         }, 100); // Small delay for smooth transition
//                     });
//                 });
//             }
//         });
//     });

   
// });

// // SECTION 1: Mobile Menu Functions
// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
// }

// // SECTION 2: Contact Toggle Function
// function toggleContact(platform) {
//     const info = document.getElementById(`${platform}-info`);
//     const allInfo = document.getElementsByClassName('contact-info');
    
//     Array.from(allInfo).forEach(element => {
//         element.classList.remove('active');
//     });
    
//     if (!info.classList.contains('active')) {
//         info.classList.add('active');
//     }
// }

// // SECTION 3: Main DOMContentLoaded Event
// document.addEventListener('DOMContentLoaded', () => {
//     // Mobile menu setup
//     const burger = document.querySelector('.burger');
//     if (burger) {
//         burger.addEventListener('click', toggleMenu);
//     }

//     // Initialize elements
//     const initializeElements = () => {
//         document.querySelectorAll('.animate-on-scroll').forEach(element => {
//             element.style.visibility = 'hidden';
//             element.style.opacity = '0';
//         });
//     };

//     // Animation function
//     const animateElement = (element) => {
//         element.style.visibility = 'visible';
//         if (element.tagName === 'H2') {
//             element.classList.add('slide-from-left');
//         } else if (element.classList.contains('player-card')) {
//             element.classList.add('slide-from-left');
//         } else if (element.classList.contains('gallery-item')) {
//             element.classList.add('slide-from-right');
//         } else if (element.classList.contains('contact-icons')) {
//             element.classList.add('slide-from-bottom');
//         } else {
//             element.classList.add('slide-from-right');
//         }
//     };

//     // Reset animation function
//     const resetAnimation = (element) => {
//         element.style.visibility = 'hidden';
//         element.style.opacity = '0';
//         element.classList.remove('slide-from-left', 'slide-from-right', 'slide-from-bottom');
//         void element.offsetWidth; // Force reflow
//     };

//     // Intersection Observer
//     const observer = new IntersectionObserver(
//         (entries, observer) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     requestAnimationFrame(() => {
//                         animateElement(entry.target);
//                     });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         },
//         {
//             threshold: 0.2,
//             rootMargin: '0px'
//         }
//     );

//     // Initialize and observe elements
//     initializeElements();
//     document.querySelectorAll('section h2, section p, .player-card, .gallery-item, .contact-icons').forEach(element => {
//         element.classList.add('animate-on-scroll');
//         observer.observe(element);
//     });

//     // Navigation click handling
//     document.querySelectorAll('.nav-links a').forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute('href');
//             const targetSection = document.querySelector(targetId);
            
//             // Close mobile menu if open
//             const navLinks = document.querySelector('.nav-links');
//             if (navLinks && navLinks.classList.contains('active')) {
//                 navLinks.classList.remove('active');
//             }
            
//             if (targetSection) {
//                 targetSection.scrollIntoView({ behavior: 'smooth' });
                
//                 targetSection.querySelectorAll('.animate-on-scroll').forEach(element => {
//                     resetAnimation(element);
//                     setTimeout(() => {
//                         animateElement(element);
//                     }, 100);
//                 });
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu setup
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    function toggleMenu() {
        navLinks.classList.toggle('active');
    }

    if (burger) {
        burger.addEventListener('click', toggleMenu);
    }

    // Animation function
    const animateElement = (element) => {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        
        if (element.tagName === 'H2') {
            element.classList.add('slide-from-left');
        } else if (element.classList.contains('player-card')) {
            element.classList.add('slide-from-left');
        } else if (element.classList.contains('gallery-item')) {
            element.classList.add('slide-from-right');
        } else if (element.classList.contains('contact-icons')) {
            element.classList.add('slide-from-bottom');
        } else {
            element.classList.add('slide-from-right');
        }
    };

    // Intersection Observer setup
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '0px'
        }
    );

    // Observe elements
    document.querySelectorAll('section h2, section p, .player-card, .gallery-item, .contact-icons').forEach(element => {
        element.classList.add('animate-on-scroll');
        element.style.opacity = '0';
        element.style.visibility = 'hidden';
        observer.observe(element);
    });

    // Navigation click handling
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});