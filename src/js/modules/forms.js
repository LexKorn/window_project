import checkNumInputs from "./checkNumInputs";

const forms = () => {
    const forms = document.querySelectorAll('.form'),
          inputs = document.querySelectorAll('.form_input');

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
    };

    checkNumInputs('input[name="user_phone"]');

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let userMessage = document.createElement('div');
            userMessage.classList.add('status');
            item.appendChild(userMessage);

            const formData = new FormData(item);

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
                    }, 3000);
                })
        });
    });
}

export default forms;