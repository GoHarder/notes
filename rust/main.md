# Rust <!-- omit in toc -->

## Sections <!-- omit in toc -->

## Data Types

### Unit type

```rust
let x = (); // similar to void in javascript
```

### Numeric types

```rust
let x = 5; // i32
let y = 2.5; // f64
```

When working with numeric types, the types of numbers have to be the same.

### Type Coersion

Converting one data type to another.

```rust
let x = 255.0;
// the `as` keyword is used to convert one type to another
let y = x as u8 - 5; 
println!("{}", y);
```

### Mutable and Immutable

If you want to change the value of a variable, it has to be mutable.

```rust
let mut x = 5; // mutable
x = 6;
```

### Strings

There are two different types of strings in Rust. Char and String.

```rust
let x: char = 'a'; // char
let y: &str = "hello" // string pointer
```

### Tuples

```rust
let x: (u8, &str) = (1 as u8, "hello"); // tuple
```

### Arrays

The items in a array must be the same data type.

```rust
let x: [u8; 5] = [1, 2, 3, 4, 5]; // array
```

### Slices

- `&[T]` is a slice it doesn't own the data it points to.
- `&mut [T]` is a mutable slice it mutably borrows the data it points to.
- `Box<[T]>` a boxed slice.

```rust
let y: &[u8] = &[1, 2, 3, 4, 5]; // slice

// Items from an array can be sliced (from array section)
let x: &[u8] = &x[1..3]; // [2, 3]
let z: &[u8] = &x[1..=3]; // [2, 3, 4]
let ax: &[u8] = &x[..3]; // [1, 2, 3]
let az: &[u8] = &x[1..]; // [2, 3, 4, 5]
```

## Functions and Modules

```rust
fn get_full_name(first: &str, last: &str) -> String {
  // Do not add ; at the end of a function to return a value
  format!("{} {}", first, last)
}

// Optional syntax
fn get_full_name(first: &str, last: &str) -> String {
  return format!("{} {}", first, last);
}
```

To have the compiler skip the function, use the `#[allow]` attribute.

```rust
// This will turn off the warning in the compiler until
// you handle what you want to do later
#[allow(dead_code)]
fn get_full_name(first: &str, last: &str) -> String {
  format!("{} {}", first, last)
}
```

You can split code into a different module using the `mod` keyword.

file: src/helpers.rs
```rust
// `pub` makes the function public for other files
pub fn get_full_name(first: &str, last: &str) -> String {
  format!("{} {}", first, last)
}
```


file: src/main.rs
```rust
mod helpers;

fn main() {
  let full_name = helpers::get_full_name("John", "Doe");
  println!("{}", full_name);
}
```
