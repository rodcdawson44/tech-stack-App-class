export const seLectLibrary = (libraryId) =>{
  return {
    type: 'select_library',
    payload: libraryId
  }
};
