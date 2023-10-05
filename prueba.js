function getListStudents() {
    return [
      { firstName: 'Guillaume', id: 1, location: 'San Francisco' },
      { firstName: 'James', id: 2, location: 'Columbia' },
      { firstName: 'Serena', id: 5, location: 'San Francisco' },
    ];
  }
  


function getStudentsByLocation(arr, search) {
    return arr.filter((el) => el.location === search )
}



const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco' ));