## The significance of union and intersection types in Typescript.

- Union and Intersection types is a kind of logical operator.
- In TypeScript Union is declared using | and Intercetion using &
- Using Intersection and union type we can declare a new type which need to fullfill the condition as stated below:

```typescript
type DataScientist = {
  name: string;
  programmingLanguages: string[];
};

// DataEngineer type
type DataEngineer = {
  name: string;
  databases: string[];
};
type MachineLearningEngineer = DataScientist & DataEngineer;
type AIEngineer = DataScientist | DataEngineer;
```
