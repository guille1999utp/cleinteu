import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  export const successAlert = (message,time=2000) => {
    Toast.fire({
      icon: "success",
      title: message,
      timer: time
    });
  }
