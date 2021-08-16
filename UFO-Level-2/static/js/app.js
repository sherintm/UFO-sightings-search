// from data.js
let tableData = data;

// Add the event listener to filter data
let filterBtn = d3.select('#filter-btn')
filterBtn.on('click', filterData)

// Datetime selector
let datetime = d3.select('#datetime')

// Dropdown selectors
let citySelect = d3.select('#city')
let stateSelect = d3.select('#state')
let countrySelect = d3.select('#country')
let shapeSelect = d3.select('#shape')

// Find unique entries for each field
let cities = [...new Set(tableData.map((row) => row.city))]
let states = [...new Set(tableData.map((row) => row.state))]
let countries = [...new Set(tableData.map((row) => row.country))]
let shapes = [...new Set(tableData.map((row) => row.shape))]

// Add options for each dropdown
cities.forEach((city) => {
    addOptions(citySelect, city)
})

states.forEach((state) => {
    addOptions(stateSelect, state)
})

countries.forEach((country) => {
    addOptions(countrySelect, country)
})

shapes.forEach((shape) => {
    addOptions(shapeSelect, shape)
})

// Function to add options to dropdown
function addOptions(dropDown, option)
{
    var options = dropDown.append("option");
    options.text(option)
    options.attr("value",option)
}

// Event listener callback
function filterData()
{
    // Prevent the page from refreshing
    d3.event.preventDefault();

    let date = datetime.property("value")
    let city = citySelect.property("value")
    let state = stateSelect.property("value")
    let country = countrySelect.property("value")
    let shape = shapeSelect.property("value")

    filteredData = tableData.filter( row => row.datetime === date && 
                                            row.city === city &&
                                            row.state === state &&
                                            row.country === country &&
                                            row.shape === shape)

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