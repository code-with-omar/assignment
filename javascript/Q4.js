const removeDuplicates = (array) => {
  const unique = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (!unique.includes(array[i])) {
  //       unique.push(array[i]);
  //     }
  //   }
  for (element of array) {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  }
  return unique;
};

const arrayOfInterger = [1, 2, 3, 4, 5, 5, 7, 1, 9, 1, 2, 5, 10, 99];
const arrayWithOutDubilcates = removeDuplicates(arrayOfInterger);
console.log(arrayWithOutDubilcates);
