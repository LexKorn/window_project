const images = () => {
    const imgModal = document.createElement('div'),
          worksContainer = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgModal.classList.add('popup');
    worksContainer.appendChild(imgModal);
    imgModal.appendChild(bigImg);

    imgModal.style.justifyContent = 'center';
    imgModal.style.alignItems = 'center';
    imgModal.style.display = 'none';

    worksContainer.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgModal.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);            
        }

        if (target && target.matches('div.popup')) {
            imgModal.style.display = 'none';
        }
    });

};

export default images;