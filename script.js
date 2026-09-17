/* ================= JAVASCRIPT EFFECTS ================= */

.navbar.scrolled {
    position: fixed;
    background: rgba(8, 8, 8, 0.92);
    backdrop-filter: blur(15px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}


/* Mobile Menu Button */

.mobile-menu-btn {
    display: none;

    width: 42px;
    height: 42px;

    border: 1px solid var(--border);

    background: transparent;

    cursor: pointer;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    gap: 5px;
}

.mobile-menu-btn span {
    width: 20px;
    height: 1px;

    background: var(--cream);

    transition: 0.3s;
}


/* Mobile Menu */

@media (max-width: 1000px) {

    .mobile-menu-btn {
        display: flex;
    }

    .nav-menu {
        position: absolute;

        top: 85px;
        left: 5%;
        right: 5%;

        display: flex;

        flex-direction: column;

        gap: 0;

        padding: 10px 0;

        background: rgba(12,12,12,0.98);

        border: 1px solid var(--border);

        opacity: 0;

        visibility: hidden;

        transform: translateY(-10px);

        transition: 0.3s;

        z-index: 100;
    }

    .nav-menu.mobile-active {

        opacity: 1;

        visibility: visible;

        transform: translateY(0);
    }

    .nav-menu a {

        padding: 15px 20px;

        border-bottom: 1px solid var(--border);
    }

    .nav-menu a:last-child {
        border-bottom: none;
    }

}


/* Hamburger Animation */

.mobile-menu-btn.active span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
}

.mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
}


/* Active Navigation */

.nav-menu a.active {
    color: var(--gold);
}


/* Reveal Animation */

.reveal {

    opacity: 0;

    transform: translateY(35px);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.reveal.show {

    opacity: 1;

    transform: translateY(0);
}


/* Course Card Glow */

.course-card::before {

    content: "";

    position: absolute;

    inset: 0;

    pointer-events: none;

    opacity: 0;

    background:
        radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            rgba(215,181,109,0.15),
            transparent 30%
        );

    transition: opacity 0.3s;
}

.course-card:hover::before {
    opacity: 1;
}


/* Ripple */

.primary-btn,
.secondary-btn,
.light-btn,
.nav-btn {

    position: relative;

    overflow: hidden;
}

.ripple {

    position: absolute;

    border-radius: 50%;

    background: rgba(255,255,255,0.25);

    transform: scale(0);

    animation: ripple-animation 0.6s linear;

    pointer-events: none;
}

@keyframes ripple-animation {

    to {

        transform: scale(4);

        opacity: 0;

    }

}


/* Hero Card */

.hero-card {

    transition:
        transform 0.15s ease,
        box-shadow 0.3s ease;
}


/* Stat Animation */

.stat strong {

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;

    transform: translateY(10px);
}

.stat strong.stat-visible {

    transform: translateY(0);
}


/* Page Loading */

body {

    transition: opacity 0.3s ease;
}

body.page-loaded {
    opacity: 1;
}
