export default function appendToEachArrayValue(array, appendString) {
  for (let iterator of array) {
    iterator = appendString + iterator;
  }

  return array;
}
