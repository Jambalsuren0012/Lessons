// let letter = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];
// let i = 0;
// while (i < letter.length) {
// if (letter[i][0] === 'н') {
// console.log(letter[i]);
// }
// i++;
// }
let array = ['apple', 'orange', 'apple', 'orange', 'apple'];
function getWordCntRd() {
    return array.reduce((prev, nxt) => {
      prev[nxt] = (prev[nxt] + 1) || 1;
      return prev;
    }, {});
  }
  getWordCntRd(array); // { apple: 3, orange: 2 }