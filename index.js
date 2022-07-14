Array.from(document.querySelectorAll('.toast'))
  .forEach(toastNode => new Toast(toastNode))