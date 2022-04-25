import logo from "./logo.svg";
import "./App.css";
import NumberFunctions from "./Utils/NumberFunctions";
function App() {
  return (
    <div className="App">
      <section className="instructions">
        <p className="intro">
          This evaluation consists of two sections. One is mandatory while the
          other is at your discretion given the time frame available.
        </p>
        <p>
          The mandatory section involves hydrating a function. This function is
          located inside the Utils/NumberFunctions.js file. Please follow the
          instructions there.  For the purpose of speeding your task up:<br/>
          Prime numbers from 1 to 24: 2,3,5,7,11,13,17,19,23  and therefore the non-prime numbers are: 1,4,6,8,9,10,12,14,15,16,18,20,21,22,24 in that same range.
        </p>
        <p>
          After the mandatory section is completed, please feel free to
          implement <em>any</em> of the following tasks which you believe you
          can complete in the time still available:
        </p>
        <ul>
          <li>
            Create a React component that will accept a comma-delimited string
            of numbers, parse this string and calculate the primality for each
            number in the string and display the results in a table, e.g.:
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Is It Prime?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <em>You may style it any way you wish.</em>
          </li>
          <li>
            The cost of recalculating primality can, be quite costly. Use the
            memoization pattern to reduce this time. Consider using a{" "}
            <code>Map</code> object or, perhaps, another collection to help out.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
