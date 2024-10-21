document.addEventListener("DOMContentLoaded", function () {
            const menuTimeline = gsap.timeline({ paused: true });
            const menuToggle = document.getElementById("menuToggle");
            const hamburgerIcon = document.querySelector(".hamburger");

            menuToggle.addEventListener('click', function () {
                hamburgerIcon.classList.toggle('close');

                if (menuTimeline.reversed()) {
                    menuTimeline.play();
                } else {
                    menuTimeline.reverse();
                }
            });

            menuTimeline.to('.fullpage-menu', {
                duration: 0,
                display: "block",
                ease: 'Expo.easeInOut',
            }).from('.main-menu li a', {
                duration: 1.5,
                y: "100%",
                opacity: 0,
                stagger: 0.2,
                ease: 'Expo.easeInOut'
            }, "-=0.5").from('.small-menu a', {
                duration: 1.5,
                y: "100%",
                opacity: 0,
                stagger: 0.2,
                ease: 'Expo.easeInOut'
            }, "-=0.5").from('.social-links li', {
                duration: 1,
                y: "-100%",
                opacity: 0,
                stagger: 0.1,
                ease: 'Expo.easeInOut'
            }, "-=0.5");

            menuTimeline.reverse();
            const smallCircle = document.querySelector('.small-circle');
            const bigCircle = document.querySelector('.big-circle');

            document.addEventListener('mousemove', function (e) {
                smallCircle.style.left = e.pageX + 'px';
                smallCircle.style.top = e.pageY + 'px';

                bigCircle.style.left = e.pageX + 'px';
                bigCircle.style.top = e.pageY + 'px';
            });
            const magneticBtn = document.querySelector(".menu-toggle");

            magneticBtn.addEventListener("mousemove", function (event) {
                const { left, top, width, height } = magneticBtn.getBoundingClientRect();
                const magnetStrength = 0.25;

                const dx = event.clientX - (left + width / 2);
                const dy = event.clientY - (top + height / 2);
                const maxOffset = 15;

                gsap.to(magneticBtn, {
                    x: Math.max(-maxOffset, Math.min(dx * magnetStrength, maxOffset)),
                    y: Math.max(-maxOffset, Math.min(dy * magnetStrength, maxOffset)),
                    duration: 0.3,
                    ease: "power4.out"
                });

                gsap.to(bigCircle, {
                    scale: 1.8,
                    ease: "power4.out",
                    duration: 0.3
                });
            });

            magneticBtn.addEventListener("mouseleave", function () {
                gsap.to(magneticBtn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
                gsap.to(bigCircle, { scale: 1, duration: 0.3, ease: "power4.out" });
            });
            const hoverElements = document.querySelectorAll('a, button, .menu-toggle, iframe');
            hoverElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    gsap.to(bigCircle, {
                        scale: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                        duration: 0.3,
                        ease: "power4.out"
                    });
                });

                element.addEventListener('mouseleave', () => {
                    gsap.to(bigCircle, {
                        scale: 1,
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        duration: 0.3,
                        ease: "power4.out"
                    });
                });
            });
            const revealText = document.querySelector("#scroll-text");
            gsap.fromTo(revealText, {
                color: "grey"
            }, {
                color: "white",
                scrollTrigger: {
                    trigger: revealText,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: true,
                }
            });
            const gradientBlobLeft = document.createElement("div");
            const gradientBlobRight = document.createElement("div");

            gradientBlobLeft.style.position = "fixed";
            gradientBlobLeft.style.top = "0";
            gradientBlobLeft.style.left = "0";
            gradientBlobLeft.style.width = "25%";
            gradientBlobLeft.style.height = "100%";
            gradientBlobLeft.style.background = "radial-gradient(circle at center, #050523, transparent)";
            gradientBlobLeft.style.zIndex = "-1";

            gradientBlobRight.style.position = "fixed";
            gradientBlobRight.style.top = "0";
            gradientBlobRight.style.right = "0";
            gradientBlobRight.style.width = "25%";
            gradientBlobRight.style.height = "100%";
            gradientBlobRight.style.background = "radial-gradient(circle at center, #050523, transparent)";
            gradientBlobRight.style.zIndex = "-1";

            document.body.appendChild(gradientBlobLeft);
            document.body.appendChild(gradientBlobRight);
        });
