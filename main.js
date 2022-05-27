import users from './users.json' assert {type: 'json'};

// // Bài 1: Sắp xếp lại mảng theo format: [string..., number...]
console.log("Bài 1:")
var a = ["a", "b", 22, "x", 44, 5, "my cute", -55]
var format = a.filter((val, idx) => !Number.isFinite(val)) + "," + a.filter((val, idx) => Number.isFinite(val))
console.log(format)

// Bài 2:
console.log("")
console.log("Bài 2:")
// a) Lọc ra các user có tên(name) có tồn tại kí tự 's'
console.log("Các user có kí tự 's' trong tên:")
var userNameS = users.filter((val, idx) => val.name.indexOf("s") > -1)
console.log(userNameS)

// b) Lọc ra các user có giới tính(female) và tuổi(age) >= 30
console.log("")
console.log("Các user là female và age >= 30:")
var userFemale30Age = users.filter((val, idx) => val.gender === "female" && val.age >= 30)
console.log(userFemale30Age)

// c) Tìm user có có giới tính nam(male) lớn tuổi nhất
console.log("")
console.log("Các user là male lớn tuổi nhất:")
function findMaxAge (array) {
    var maxAge = 0
    for (var i = 0; i < array.length ; i++) {
        if (array[i].age > maxAge) {
            maxAge = array[i].age
        }
    }
    return maxAge
}
var userMaleMaxAge = users.filter((val, idx) => val.gender === "male" && val.age === findMaxAge(users))
console.log(userMaleMaxAge)

// d) Lọc ra user có địa chỉ(address) ở 'Ohio'
console.log("")
console.log("Các user có địa chỉ ở 'Ohio':")
var userLiveInOhio = users.filter((val, idx) => {
    return val.address.indexOf("Ohio") > -1
})
console.log(userLiveInOhio)

// e) Tìm user có balance thấp nhất
console.log("")
console.log("Các user có balance thấp nhất:")
function findLowBalance (array) {
    var lowBalance = array[0].balance
    for (var i = 0; i < array.length ; i++) {
        if (array[i].balance < lowBalance) {
            lowBalance = array[i].balance
        }
    }
    return lowBalance
}
var userLowBalance = users.filter((val, idx) => val.balance === findLowBalance(users))
console.log(userLowBalance)

// f) Tìm user có số tags > 3
console.log("")
console.log("Các user có số tags > 3:")
var usersTags = users.filter((val) => val.tags.length > 3)
console.log(usersTags)