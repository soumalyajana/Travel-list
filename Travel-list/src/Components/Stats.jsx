import React from 'react'

function Stats({ items }) {
    if (!items.length) {
      return (
        <p className="stats">
          <em>Start adding some items to the Packing List</em>
        </p>
      );
    }
  
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage =
      totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : `💼 You have ${totalItems} items in your list, and you have packed ${packedItems} (${percentage}%)`}
        </em>
      </footer>
    );
  }

export default Stats