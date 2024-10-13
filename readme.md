# String Calculator

[Click here to open the website of String calculator](https://assignmentbyatul.netlify.app/)

## Overview

This project implements a **String Calculator** function that takes in a string of numbers and returns their sum. The numbers can be separated by various delimiters, including commas, newlines, and custom delimiters. The solution also handles edge cases such as negative numbers and invalid input.

The project is designed using JavaScript with Jest for unit testing to ensure the functionality meets the requirements.

## Functionality

The `add()` function is designed to process a string of numbers with the following features:

- **Default Delimiters:** The function supports commas `,` and newlines `\n` as default delimiters.

  **Example:**

  ```javascript
  add('1,2,3'); // returns 6
  add('1\n2,3'); // returns 6
  ```

- **Custom Delimiters:** You can specify custom delimiters by using the format //[delimiter]\n. It supports both single custom delimiters and multiple custom delimiters enclosed in square brackets [].

  **Example:**

  ```javascript
  add('//;\n1;2;3'); // returns 6
  add('//[;][%]\n1;2%3'); // returns 6
  ```

- **Negative Numbers Handling:** If the input contains negative numbers, the function throws an error with a message listing all the negative numbers found.

  **Example:**

  ```javascript
  add('1,-2,3,-4'); // returns "Negative numbers are not allowed: -2, -4"
  ```

- **Delimiters of Any Length:** Custom delimiters can be of any length when provided in the format //[delimiter]\n.

  **Example:**

  ```javascript
  add('//[***]\n1***2***3'); // returns 6
  ```

- **Graceful Handling of Invalid Input:** The function throws an error if the input contains non-numeric characters.

  **Example:**

  ```javascript
  add('1,a,3'); // throws error "Invalid input: Non-numeric value detected"
  ```

## Implementation Details

Function: add(inputString)

The add function processes the input string using a regular expression to detect delimiters. The key steps are:

    Parsing the input to check for custom delimiters.
    Splitting the input string by the detected delimiters (comma, newline, or custom delimiters).
    Summing up the numbers and throwing an error for negative numbers or non-numeric input.

## Tests

Followed the TDD process to achieve the expectation and follow a clean code practice. The tests for the add function are written using Jest. Each test case verifies a specific scenario, ensuring that the function handles both typical and edge cases as expected.
