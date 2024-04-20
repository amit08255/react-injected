window.injected = (root) => {
    const elements = root.querySelectorAll('[data-testid="sample"]');
    elements[0].style.color = 'red';
};
