export default function getStudentsByLocation(arr, search) {
  return arr.filter((el) => el.location === search)
}