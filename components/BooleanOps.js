import './BooleanOps.scss'

export default () => (
  <table class="boolean-ops">
    <thead>
      <tr>
        <th class="tg-73oq">States</th>
        <th class="tg-73oq">A</th>
        <th class="tg-73oq">B</th>
        <th class="tg-73oq">A &amp; B</th>
        <th class="tg-73oq">A || B</th>
        <th class="tg-73oq">NOT A</th>
        <th class="tg-73oq">NOT B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-73oq">Case 1</td>
        <td class="tg-73oq">true</td>
        <td class="tg-73oq">true</td>
        <td class="tg-73oq">true</td>
        <td class="tg-73oq">true</td>
        <td class="tg-73oq">false</td>
        <td class="tg-73oq">false</td>
      </tr>
      <tr>
        <td class="tg-73oq">Case 2</td>
        <td class="tg-73oq">false</td>
        <td class="tg-73oq">false</td>
        <td class="tg-73oq">false</td>
        <td class="tg-73oq">false</td>
        <td class="tg-73oq">true</td>
        <td class="tg-73oq">true</td>
      </tr>
      <tr>
        <td class="tg-73oq">Case 3</td>
        <td class="tg-73oq">true</td>
        <td class="tg-73oq">false</td>
        <td class="tg-73oq">false</td>
        <td class="tg-73oq">true</td>
        <td class="tg-73oq">false</td>
        <td class="tg-73oq">true</td>
      </tr>
      <tr>
        <td class="tg-73oq">Case 4</td>
        <td class="tg-73oq">false</td>
        <td class="tg-73oq">true</td>
        <td class="tg-73oq">false</td>
        <td class="tg-73oq">true</td>
        <td class="tg-73oq">true</td>
        <td class="tg-73oq">false</td>
      </tr>
    </tbody>
  </table>
)
