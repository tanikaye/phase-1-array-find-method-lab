const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function cb(element, index) {
  console.log('logged ',element)
return (element.result === "W")
}

function superbowlWin(record) {
  if (record.find(cb) === undefined) {
    return undefined;
  }
return record.find(cb).year;
}

console.log(superbowlWin(record))
console.log('yoyo ', record.find(cb))




