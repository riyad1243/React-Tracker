/* eslint-disable react/prop-types */
function ExpenseFilter({ onSelecteCategory }) {
  const categories = ["Utility", "Groceries", "Tour"];
  return (
    <>
      <select
        className="select select-primary w-full max-w-xs my-4"
        onChange={(e) => onSelecteCategory(e.target.value)}
      >
        <option value="">Show-All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}

export default ExpenseFilter;
