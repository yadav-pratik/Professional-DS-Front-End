import swal from 'sweetalert'

export const normalAlert = (title, icon, text) => {
    swal({
        title : title,
        text : text,
        icon : icon,
    });
}