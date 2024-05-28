import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {

    function capitalizeFirstLetter(word) {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    return <table className={css.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map((item) => (
                <tr key= {item.id}>
                    <td>{capitalizeFirstLetter(item.type)}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
            </tr>
            ))}
  </tbody>
</table>
}