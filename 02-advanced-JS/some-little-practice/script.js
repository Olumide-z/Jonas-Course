//constructor and inheritance

let Student = function(name, yearAdmitted, department){
    this.name = name,
    this.yearAdmitted = yearAdmitted,
    this.department = department
}

Student.prototype.yearSpent = function(){
    console.log(2021 - this.yearAdmitted)
}

let olumide = new Student('Olumide', 2017, 'Building')
let emrys = new Student('Emrys', 2018, 'Architecture')

olumide.yearSpent()
emrys.yearSpent()

console.log(olumide, emrys)
