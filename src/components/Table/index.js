export default function Table({ cols, rows }) {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          {cols.map((col) => (
            <th className="px-5 py-3 border-b-2 text-left border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {rows.map((row) => (
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 text-left whitespace-no-wrap">
                {row}
              </p>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
