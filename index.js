// code your solution here
const record = [
    { year: "2022", result: "N/A"},
    { year: "2021", result: "N/A"},
    { year: "2020", result: "N/A"},
    { year: "2019", result: "N/A"},
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "W"},
    { year: "2015", result: "N/A"},
    { year: "2014", result: "L"},
    { year: "2013", result: "N/A"},
    { year: "2012", result: "N/A"}
  ]

function superbowlWin(record) {
    for(let item of record) {
        if(item.result === "W"){
            return item.year;
        }
    }
}