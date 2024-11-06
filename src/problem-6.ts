interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(passedObj: Profile, itemToUpdate: Partial<Profile>) {
  return { ...passedObj, ...itemToUpdate };
}

const myProfile: Profile = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
console.log(updateProfile(myProfile, { age: 26 }));
