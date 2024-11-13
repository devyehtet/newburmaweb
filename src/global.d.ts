declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}

declare var require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[];
    (id: string): any;
  };
};

// Custom RequireContext type
interface RequireContext {
  (id: string): any; // Type for imported module
  keys(): string[]; // Returns an array of keys for the modules
}
