let firstName: string = "john";

let age: number = 22;

let obj: { firstName: string; age: number } = { firstName: "john", age: 23 };

function createUser(firstName: string, age: number): string {
  return `first name: ${firstName}; age: ${age}`;
}

let str = createUser("darwin", 31);

console.log(str);

function createUser2(
  firstName: string,
  age: number
): { age?: number; firstName: string } {
    if (age > 20) return { firstName }

    return { age, firstName }
}

let str2 = createUser2("darwin", 31);

console.log(str2);