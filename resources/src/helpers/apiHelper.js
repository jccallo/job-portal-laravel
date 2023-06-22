// toastr se importo directamente en index.html
export const toastSuccess = (content, title) => {
    toastr.success(content, title);
  };

  export const toastError = (content, title) => {
    toastr.error(content, title);
  };

  export const deleteIdAttribute = (data) => {
    // elimina el atributo id de la data
    const fixedData = { ...data };
    delete fixedData.id;
    return fixedData;
  };
