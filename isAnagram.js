let isAnagram = (str1, str2) => {
    if(str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")) return true
}
console.log(isAnagram("Mary", "Army"))