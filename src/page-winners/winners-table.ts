import { winners } from "./winners";

const tableWinners = document.createElement('table');
winners.append(tableWinners)

const theadWinners = document.createElement('thead');
tableWinners.append(theadWinners)

const tbodyWinners = document.createElement('tbody');
tableWinners.append(tbodyWinners)

theadWinners.innerHTML = `
  <tr>
    <th>Number</th>
    <th>Car</th>
    <th>Name</th>
    <th>Wins</th>
    <th>Best time (seconds)</th>
  </tr>
`

tbodyWinners.innerHTML = `
  <tr>
    <td>1</td>
    <td>car with color</td>
    <td>Tesla</td>
    <td>1</td>
    <td>10</td>
  </tr>
`