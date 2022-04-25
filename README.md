### To begin, please clone (or download as a zip) this repo to your machine.  Since you are applying for a position as a React developer, it is assumed that your machine is setup for React development.  If this is not the case, please let the interviewer know as this can be accomplished quickly enough.  This application is created using the create-react-app cli tool and uses standard JavaScript and JSX throughout.

### This evaluation consists of two sections. One is mandatory while the other is at your discretion given the time frame available.

### You will need to share your screen with the interviewer while completing this evaluation.

The mandatory section involves hydrating a function. This function is
located inside the Utils/NumberFunctions.js file. Please follow the
instructions there. For the purpose of speeding your task up:

Prime numbers from 1 to 24: 2,3,5,7,11,13,17,19,23 and therefore the
non-prime numbers are: 1,4,6,8,9,10,12,14,15,16,18,20,21,22,24 in that
same range. You will need to add enough React code to this application
(component or just inline) to be able to call this function and
validate that it is functioning correctly.

After the mandatory section is completed, please feel free to
implement _any_ of the following tasks which you believe you
can complete in the time still available:


-  Create a React component that will accept a comma-delimited string
of numbers, parse this string and calculate the primality for each
number in the string and display the results in a table, e.g.:

| Number | Is it prime? |
|--------|--------------|
| 3      | Yes          |
| 4      | No           |

_You may style it any way you wish._
- The cost of recalculating primality can, be quite costly. Use the
memoization pattern to reduce this time. Consider using a{" "}
`Map` object or, perhaps, another collection to help out.
 