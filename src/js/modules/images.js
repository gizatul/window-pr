import calcScroll from "./calcScroll";

const images = () => {
    const imgPopup = document.createElement('div'), 
          workSection = document.querySelector('.works'), 
          bigImage = document.createElement('img'); 
          scroll = calcScroll();
          
    imgPopup.classList.add('popupImg'); 
    workSection.appendChild(imgPopup); 
    imgPopup.style.cssText = `
    display:none;
    justify-content:center;
    align-items:center;` 
          
    bigImage.style.maxHeight = '90vh';
    bigImage.style.maxWidth = '90vw'; 
    bigImage.classList.add('faded');

    imgPopup.appendChild(bigImage); 
          
    workSection.addEventListener('click', (e) => {
        e.preventDefault(); 

        if (e.target && e.target.classList.contains('preview')) { 
            imgPopup.style.display = 'flex'; 
            const path = e.target.parentNode.getAttribute('href');

            bigImage.setAttribute('src', path); 
            document.body.style.overflow = 'hidden'; 
            document.body.style.marginRight = `${scroll}px`;
        }
        if (e.target && e.target === imgPopup) { 
            imgPopup.style.display = 'none';  
            document.body.style.overflow = ''; 
            document.body.style.marginRight = `0px`;
        }
    });
}
export default images;