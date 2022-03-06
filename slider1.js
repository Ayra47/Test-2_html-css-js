

if(window.outerWidth < 768) 
{
    let offset = 0; //смещение от левого края
    const sliderLine = document.querySelector('.elements_3');
    
    document.querySelector('.slider_next').addEventListener('click', function()
    {
        offset = offset + 447;
        if (offset > 1788)
        {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    document.querySelector('.slider_prev').addEventListener('click', function()
    {
        offset = offset - 417;
        if (offset < 0)
        {
            offset = 1678;
        }
        sliderLine.style.left = -offset + 'px';
    });
}



else
{
let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.elements_3');

document.querySelector('.slider_next').addEventListener('click', function()
{
    offset = offset + 472;
    if (offset > 944)
    {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider_prev').addEventListener('click', function()
{
    offset = offset - 472;
    if (offset < 0)
    {
        offset = 944;
    }
    sliderLine.style.left = -offset + 'px';
});
}