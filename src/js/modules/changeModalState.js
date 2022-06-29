import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionsByForm(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Тёплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (j === i) {
                                    box.checked = true;
                                } 
                            });
                        } else {
                            state[prop] = item.value;
                        }                        
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }

    bindActionsByForm('click', windowForms, 'form');
    bindActionsByForm('input', windowWidth, 'width');
    bindActionsByForm('input', windowHeight, 'height');
    bindActionsByForm('change', windowType, 'type');
    bindActionsByForm('change', windowProfile, 'checkbox');

};

export default changeModalState;