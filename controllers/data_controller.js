const fs = require('fs')


const get_latest_data = () => {
    
    let data_files = []
    let current_dir = fs.readdirSync(__dirname + "/../data")

    // Get all the data files
    current_dir.forEach((value) => {
        if (value.includes("social-injustice-index-data")) {
            // Only include the files with actual data
            data_files.push(value)
        }
    })


    // Sort by latest first
    data_files = data_files.sort((a, b) => {
        a_d = Date.parse(a.split("social-injustice-index-data-")[1].split(".json")[0])
        b_d = Date.parse(b.split("social-injustice-index-data-")[1].split(".json")[0])
        return (b_d - a_d)
    })

    // Read the latest_data
    latest_data = fs.readFileSync(__dirname + "/../data/" + data_files[0], "utf-8")
    return latest_data
}

module.exports = { get_latest_data }