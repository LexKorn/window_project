import calcScroll from "./calcScroll";

const images = () => {
    const imgModal = document.createElement('div'),
          worksContainer = document.querySelector('.works'),
          bigImg = document.createElement('img'),
          scroll = calcScroll();

    imgModal.classList.add('popup_img');
    worksContainer.appendChild(imgModal);
    imgModal.appendChild(bigImg);

    // imgModal.style.justifyContent = 'center';
    // imgModal.style.alignItems = 'center';
    // imgModal.style.display = 'none';

    imgModal.style.cssText = `        
        justify-content: center;
        align-items: center;  
        display: none;      
    `;

    const closeImg = () => {
        imgModal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    };

    worksContainer.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;

            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);            
            bigImg.style.maxWidth = '90%';
            bigImg.style.maxHeight = '90%';
        }

        if (target && target.matches('div.popup_img')) {
            closeImg();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeImg();
        }
    });

};

export default images;