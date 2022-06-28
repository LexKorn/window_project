import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const forms = document.querySelectorAll('.form'),
          inputs = document.querySelectorAll('input'),
          checkboxes = document.querySelectorAll('.checkbox');

    const message = {
        loading: 'Загрузка.... загрузка ....',
        success: 'Спасибо! Скоро с вами свяжемся)',
        failure: 'Ошибка! Что-то пошло не так....'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });

        checkboxes.forEach(item => {
            item.checked = false;
        })
    };

    checkNumInputs('input[name="user_phone"]');

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let userMessage = document.createElement('div');
            userMessage.classList.add('status');
            item.appendChild(userMessage);

            const formData = new FormData(item);

            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }               
            }

            postData('./assets/server.php', formData)
                .then(res => {
                    userMessage.textContent = message.success;
                    console.log(res);
                })
                .catch(() => userMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        userMessage.remove();
                        if (item.getAttribute('data-calc') === 'end') {
                            document.querySelector('.popup_calc_end').style.display = 'none';
                            document.body.style.overflow = '';
                        }
                    }, 2000);            
                });
        });
    });
}

export default forms;