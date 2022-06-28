const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeByOverlay = true) {
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
            //   inputs = document.querySelectorAll('.popup_calc_content input'),
            //   checkboxes = document.querySelectorAll('.checkbox');

        function closeModal() {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = '';
        }

        triggers.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                // if (item.getAttribute('data-calc') === 'trigger') {
                //     inputs.forEach(item => {
                //         if (item.value == '') {
                //             console.log('Введите недостающие данные');
                //         }
                //     });

                //     if (checkboxes.some(item => item.checked == true)) {
                //             console.log('Введите недостающие данные');
                //     }                                       
                // }
                    
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        
        close.addEventListener('click', () => {
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeByOverlay) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = '';
        }, time);
    }
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export default modals;