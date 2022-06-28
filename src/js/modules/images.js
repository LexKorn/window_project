const images = () => {
    const imgModal = document.createElement('div'),
          worksContainer = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgModal.classList.add('popup_img');
    worksContainer.appendChild(imgModal);
    imgModal.appendChild(bigImg);

    imgModal.style.justifyContent = 'center';
    imgModal.style.alignItems = 'center';
    imgModal.style.display = 'none';

    // imgModal.style.cssText = `        
    //     justifyContent: center;
    //     alignItems: center;  
    //     display: none;      
    // `;

    worksContainer.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);            
            bigImg.style.maxWidth = '90%';
            bigImg.style.maxHeight = '90%';
        }

        if (target && target.matches('div.popup_img')) {
            imgModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

};

export default images;