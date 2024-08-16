let professor = {
  communicationSkill: "Very Excellent",
  leadershipSkill: "Very Good",
  Displine: "Good",
  knowldge: "Very Excellent",
  certificates: [
    "Hacker Rank Participation",
    "Coeding Ninja Participation",
    "Certificate in IFE course",
    "Certificate in Advance Programming",
  ],
  degree: {
    Masters: "Masters in CS",
    Bachelors: "Bachelors in CS",
    Bachelors1: "Bachelors1 in IT",
    PHD: "Phd in CS",
  },
};

console.log("==========================================================");

professor.totalExpirience = "14 Years";

console.log(`After the adding the element toalExperience : ${professor.totalExpirience}`);

console.log("==========================================================");

professor.communicationSkill = "Need To Improve";
console.log(`After the updating the element communicationSkill : ${professor.communicationSkill}`);

console.log("==========================================================");

let addElement = professor.certificates.splice(2, 0, "Oracle Certified");

console.log(`After Adding the element in certificates: ${professor.certificates}`);

console.log("==========================================================");

console.log(`Last Element of Array: ${professor.certificates[professor.certificates.length-1]}`);

console.log("==========================================================");

for (const key in professor.certificates) {
  if (Object.prototype.hasOwnProperty.call(professor.certificates, key)) {
    const element = professor.certificates[key];
    console.log(`transversing the Array : ${key}, ${element}`);
  }
}

console.log("==========================================================");

for (const key in professor) {
  if (Object.prototype.hasOwnProperty.call(professor, key)) {
    const element = professor[key];
    console.log(
      `The Complete object is printed after all modification : ${key}, ${element}`
    );
  }
}
