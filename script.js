function navigateTo(divId)
{
    const element = document.getElementById(divId)
    if (element)
    {
        element.scrollIntoView(false);
    }
}