const checkNumInputs = (selectorInputs) => {
    const inputs = document.querySelectorAll(selectorInputs);

    inputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;