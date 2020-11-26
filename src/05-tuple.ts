export {};

let profile1: (string | number)[] = ['Alice', 139]; // array
profile1 = [150, 'Karen']; // not a type error
console.log(profile1);

let profile2: [string, number] = ['Yoko', 163]; // tuple
// profile2 = [165, 'Akari']; // type error
profile2 = ['Aya', 159];
console.log(profile2);
