/* eslint-disable react/prop-types */

import ResultsGridItem from "./ResultsGridItem";

const ResultsGrid = ({ results }) => {
  const itemsPerColumn = 5;

  // Calculate the number of columns needed based on the number of items and the max items per column
  const columns = Math.ceil(results.length / itemsPerColumn);

  // Function to get items for a specific column index
  const getColumnItems = (columnIndex) => {
    const startIndex = columnIndex * itemsPerColumn;
    return results.slice(startIndex, startIndex + itemsPerColumn);
  };

  return (
    <div
      className="grid gap-6"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`, // Dynamically adjust columns based on the number of items
      }}
    >
      {/* Loop over each column */}
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div key={columnIndex} className="space-y-3">
          {/* Render items for this column */}
          {getColumnItems(columnIndex).map((result, index) => (
            <ResultsGridItem
              key={result.DriverName}
              result={result}
              position={columnIndex * itemsPerColumn + index + 1}
              index={index}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;
