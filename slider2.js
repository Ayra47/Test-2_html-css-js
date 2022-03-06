let offset2 = 0;
const sliderLine2 = document.querySelector('.aside');



if(window.outerWidth < 768) 
{
    document.querySelector('.press_next').addEventListener('click', function()
{
    offset2 = offset2 + 471;
    if (offset2 > 942)
    {
        offset2 = 0;
    }
    sliderLine2.style.left = -offset2 + 'px';
});

document.querySelector('.press_prev').addEventListener('click', function()
{
    offset2 = offset2 - 471;
    if (offset2 < 0)
    {
        offset2 = 942;
    }
    sliderLine2.style.left = -offset2 + 'px';
});
}

else
{
    document.querySelector('.press_next').addEventListener('click', function()
{
    offset2 = offset2 + 471;
    if (offset2 > 471)
    {
        offset2 = 0;
    }
    sliderLine2.style.left = -offset2 + 'px';
});

document.querySelector('.press_prev').addEventListener('click', function()
{
    offset2 = offset2 - 471;
    if (offset2 < 0)
    {
        offset2 = 471;
    }
    sliderLine2.style.left = -offset2 + 'px';
});
}