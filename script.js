document.addEventListener('DOMContentLoaded', function ()
{
    let ele = document.getElementById('ExpinYears');
    if (ele)
    {
        var today = new Date(new Date().setHours(0, 0, 0, 0));
        var startDate = new Date(2011, 5, 06);
        ele.innerText = calcDate(today, startDate)
    }
}, false);

function navigateTo(divId)
{
    const element = document.getElementById(divId)
    if (element)
    {
        element.scrollIntoView(false);
    }
}

function calcDate(date1, date2)
{
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);
    var message = years + "+ years ";

    return message
}