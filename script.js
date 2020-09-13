const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) { 
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const scroll = culcScroll();


        trigger.forEach( item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefauld();
                }
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('');
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('');
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('');
                document.body.style.marginRight = `0px`;
            }
        })
    };

    function showModalBytime(selector, time) { 
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
    // Убрать Сдвиг скролла страницы
    function culcScroll() { 
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    
    bindModal('','','');
};