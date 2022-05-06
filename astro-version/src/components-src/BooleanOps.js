import { booleanOps } from '../styles/BooleanOps.module.scss'

export default () => (
  <table className={booleanOps}>
    <thead>
      <tr>
        <th className="table-member"></th>
        <th className="table-member">A</th>
        <th className="table-member">B</th>
        <th className="table-member">A &amp; B (AND)</th>
        <th className="table-member">A || B (OR)</th>
        <th className="table-member">NOT A</th>
        <th className="table-member">NOT B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="table-member">#1</td>
        <td className="table-member">true</td>
        <td className="table-member">true</td>
        <td className="table-member">true</td>
        <td className="table-member">true</td>
        <td className="table-member">false</td>
        <td className="table-member">false</td>
      </tr>
      <tr>
        <td className="table-member">#2</td>
        <td className="table-member">false</td>
        <td className="table-member">false</td>
        <td className="table-member">false</td>
        <td className="table-member">false</td>
        <td className="table-member">true</td>
        <td className="table-member">true</td>
      </tr>
      <tr>
        <td className="table-member">#3</td>
        <td className="table-member">true</td>
        <td className="table-member">false</td>
        <td className="table-member">false</td>
        <td className="table-member">true</td>
        <td className="table-member">false</td>
        <td className="table-member">true</td>
      </tr>
      <tr>
        <td className="table-member">#4</td>
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
