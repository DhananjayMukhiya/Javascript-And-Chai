const accountId = 123445
let accountEmail = "dhananjay@coders.com"
var accountPassword = 256757

accountCity = "Patna"

// Prefer not to use var because of issue in block scope and functional scope   

// accountId = 9887 // not allowed
accountEmail = "hdsj234@google.com"
accountPassword = 111111
accountCity = "Motihari"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
Notes on Variables in JavaScript:

1. const: 
    - Used to declare constants (values that cannot be reassigned).
    - Must be initialized at the time of declaration.
    - Block scoped.

2. let:
    - Used to declare variables that can be reassigned.
    - Block scoped.

3. var:
    - Used to declare variables (older way).
    - Function scoped (not block scoped).
    - Avoid using due to scope issues.

4. Variables can be declared without any keyword (not recommended).
    - Becomes a global variable.

Example:
const pi = 3.14;
let name = "John";
var age = 25;
city = "New York"; // Not recommended

*/