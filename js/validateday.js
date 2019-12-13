const validateDay = (date) => {
    let shortDay = date.slice(0, 3);
    let firstDate = date.slice(3, 8);
    let shortMonth = date.slice(8, 11);
    let secondDate = date.slice(11);

    switch (shortDay) {
        case 'Mon':
            day = 'Lun';
        break;
        case 'Tue':
            day = 'Mar';
        break;
        case 'Wed':
            day = 'Mie';
        break;
        case 'Thu':
            day = 'Jue';
        break;
        case 'Fri':
            day = 'Vie';
        break;
        case 'Sat':
            day = 'Sab';
        break;
        case 'Sun':
            day = 'Dom';
        break;
    
        default:
            day = 'Desconocido';
        break;
    }

    switch (shortMonth) {
        case 'Jan':
            month = 'Ene';
        break;
        case 'Aug':
            month = 'Ago';
        break;
        case 'Dec':
            month = 'Dic';
        break;
        default:
            month = shortMonth;
        break;
    }

    return day + firstDate + month + secondDate;
}