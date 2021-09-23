// from data.js
let tableData = data;

// Add the event listener to filter data
filterBtn = d3.select('#filter-btn')
filterBtn.on('click', filterData)

// Datetime selector
datetime = d3.select('#datetime')

// Event listener callback
function filterData()
{
    // Prevent the page from refreshing
    d3.event.preventDefault();
    date = datetime.property("value")

    console.log(date);

    filteredData = tableData.filter( row => row.datetime === date)
    console.log(filterData);

    let tbody = d3.select('tbody')
    tbody.html('&nbsp;')
    filteredData.forEach(row => {
        tbody.append('tr')
        Object.values(row).forEach((value) =>
        {
            tbody.append('td').text(value)
        })
    });
}

function init()
{
    let tbody = d3.select('tbody')
    tbody.html('&nbsp;')
    tableData.forEach(row => {
        tbody.append('tr')
        Object.values(row).forEach((value) =>
        {
            tbody.append('td').text(value)
        })
    });    
}

init();