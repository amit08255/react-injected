window.injected = (root) => {
    const element = root.querySelector('[data-testid="sample"]');
    let counterObserver = null;
    
    if (element) {
        element.style.color = 'red';
    }

    // Options for the observer (which mutations to observe)
    const rootConfig = { attributes: false, childList: true, subtree: false };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                const counterRoot = root.querySelector('[data-testid="counter"]');

                if (counterObserver && !counterRoot) {
                    counterObserver.disconnect();
                    counterObserver = null;
                }

                if (counterRoot && !counterObserver) {
                    counterRoot.style['border-radius'] = '8px';

                    // Options for the observer (which mutations to observe)
                    const counterConfig = { attributes: false, childList: true, subtree: false };

                    // Callback function to execute when mutations are observed
                    const counterCallback = (mutationList, observer) => {
                        for (const mutation of mutationList) {
                            if (mutation.type === "childList") {
                                const counterNumbers = counterRoot.querySelectorAll('[data-testid="counter-number"]');

                                if (counterNumbers && counterNumbers.length > 0) {
                                    counterNumbers.forEach((number) => {
                                        number.style.color = 'green';
                                    })
                                }
                            } else if (mutation.type === "attributes") {
                                console.log(`The ${mutation.attributeName} attribute was modified.`);
                            }
                        }
                    };

                    // Create an observer instance linked to the callback function
                    counterObserver = new MutationObserver(counterCallback);

                    // Start observing the target node for configured mutations
                    counterObserver.observe(counterRoot, counterConfig);

                    const incrementButton = counterRoot.querySelector('[data-testid="increment-btn"]');

                    if (incrementButton) {
                        incrementButton.addEventListener('click', () => {
                            console.log('Increment button clicked');
                        });
                    }
                }
            } else if (mutation.type === "attributes") {
                console.log(`The ${mutation.attributeName} attribute was modified.`);
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(root, rootConfig);
};
