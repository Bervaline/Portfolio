// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Typing Animation
const devText = "Front-End Developer";
const designText = "UI/UX Designer";
let devElement = document.getElementById('typing-dev');
let designElement = document.getElementById('typing-design');

function typeWriter(text, element, speed = 100) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            setTimeout(() => { element.innerHTML = ''; }, 2000);
            if (text === devText) {
                setTimeout(() => typeWriter(designText, designElement), 500);
            } else {
                setTimeout(() => typeWriter(devText, devElement), 500);
            }
        }
    }
    typing();
}

typeWriter(devText, devElement);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', { name, email, subject, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Scroll Animation
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Add a class to header when scrolled
    if (scrollPosition > 50) {
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
    }
});


    document.getElementById("downloadBtn").addEventListener("click", function () {
        // Create a temporary anchor element
        const link = document.createElement("a");
        link.href = "CURRICULUM VITAE (2) (1).pdf"; // Make sure cv.pdf is in the same directory or adjust the path
        link.downloads = "CURRICULUM VITAE (2) (1).pdf"; // File name after download
        document.body.appendChild(link);
        link.click(); // Trigger download
        document.body.removeChild(link); // Clean up
    
});
