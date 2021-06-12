import './BooleanOps.scss'

export default () => (
  <table className="boolean-ops">
    <thead>
      <tr>
        <th className="table-member">States</th>
        <th className="table-member">A</th>
        <th className="table-member">B</th>
        <th className="table-member">A &amp; B</th>
        <th className="table-member">A || B</th>
        <th className="table-member">NOT A</th>
        <th className="table-member">NOT B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="table-member">Case 1</td>
        <td className="table-member">true</td>
        <td className="table-member">true</td>
        <td className="table-member">true</td>
        <td className="table-member">true</td>
        <td className="table-member">false</td>
        <td className="table-member">false</td>
      </tr>
      <tr>
        <td className="table-member">Case 2</td>
        <td className="table-member">false</td>
        <td className="table-member">false</td>
        <td className="table-member">false</td>
        <td className="table-member">false</td>
        <td className="table-member">true</td>
        <td className="table-member">true</td>
      </tr>
      <tr>
        <td className="table-member">Case 3</td>
        <td className="table-member">true</td>
        <td className="table-member">false</td>
        <td className="table-member">false</td>
        <td className="table-member">true</td>
        <td className="table-member">false</td>
        <td className="table-member">true</td>
      </tr>
      <tr>
        <td className="table-member">Case 4</td>
        <td className="table-member">false</td>
        <td className="table-member">true</td>
        <td className="table-member">false</td>
        <td className="table-member">true</td>
        <td className="table-member">true</td>
        <td className="table-member">false</td>
      </tr>
    </tbody>
  </table>
)
