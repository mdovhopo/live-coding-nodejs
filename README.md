# Live Coding Tasks

The repo contains a couple of coding tasks ranging from easy to hard.

## Prerequisites
- nodejs 20+ (but any other JS runtime is fine as well)
- git

## Structure

The directory [tasks](./tasks) contains the tasks. Each task has its own directory with corresponding number.

It is expected that tasks will be done in order.

Each directory contains:
- `main.js` - the solution is expected here
- `main.test.js` - some basic tests to check the solution
- `README.md` - the task description

Feel free to change any of given files.

## Goal

Make sure to pass existing tests and provide clear reasoning for the solution.
The use of code quality tools is encouraged.

## Tips

Run test cases with:

```bash
node --test
```

command

Optionally, you can specify wildcard to run only specific tests and files:

```bash
node --test --test-name-pattern="should return taxi" tasks/01/main.test.js 
```

Note that all provided code was written for nodejs 20. If you wish to use other
runtime, make sure to port code to it.
