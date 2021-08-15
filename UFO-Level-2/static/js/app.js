// from data.js
let tableData = data;


filterBtn = d3.select('#filter-btn')
filterBtn.on('click', filterData)

datetime = d3.select('#datetime')

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
        tbody.append('td').text(row.datetime)
        tbody.append('td').text(row.city)
        tbody.append('td').text(row.state)
        tbody.append('td').text(row.country)
        tbody.append('td').text(row.shape)
        tbody.append('td').text(row.durationMinutes)
        tbody.append('td').text(row.comments)
    });
}