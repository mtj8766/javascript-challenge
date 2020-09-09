// from data.js
var tableData = data;

// Get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  
  tbody.html("");

  // Loop through each object
  data.forEach((dataRow) => {
    // Add a row for each UFO sighting
    var row = tbody.append("tr");

    // Loop through each row and add the value as a cell
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// Create the event handler
function handleClick() {

  // Get the datetime value
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // If a date was entered, filter the data accordingly and display the new table - nothing will be displayed if there is no matching date
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  buildTable(filteredData);
}

// Clicking the Filter Table button will trigger it - hitting enter won't work
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table 
buildTable(tableData);
