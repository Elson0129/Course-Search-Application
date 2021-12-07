var updateView = async (button) => {
    var base = 'http://localhost:5000'

    var queryCounter = 0
    
    var filter_code = document.querySelector("#code-filter").value
    var filter_title = document.querySelector("#title-filter").value
    var filter_level = document.querySelector("#level-filter").value
    var filter_name = document.querySelector("#name-filter").value

    var filter_combined_level = document.querySelector("#combined-level-filter").value
    var filter_combined_name = document.querySelector("#combined-name-filter").value


    if (button.dataset.filter == "by_course_code") {
        if (filter_code.length == 0) {
            alert("Error: Filter Field is blank!")
        }
       
        let param = filter_code
        api = `${base}/api/by_course_code/${param}`
    } 
    else if (button.dataset.filter == "by_title") {
        if (filter_title.length == 0) {
            alert("Error: Filter Field is blank!")
        }

        let param = filter_title
        api = `${base}/api/by_title/${param}`
    }
    else if (button.dataset.filter == "by_level") {

        let param = filter_level
        api = `${base}/api/by_level/${param}`
    }
    else if (button.dataset.filter == "by_instructor") {
        if(filter_name.length == 0) {
            alert("Error: Filter Field is blank!")
        }

        let param = filter_name
        api = `${base}/api/by_instructor/${param}`
    }
    else if (button.dataset.filter == "combined_query") { 
        if(((filter_combined_level.length > 0) && (filter_combined_name.length == 0)) || ((filter_combined_name.length > 0) && (filter_combined_level.length == 0)) ) {
            alert("Error: Combined Query Unsuccessful! Please make sure both fields in the combined filter is filled out.")
        }

        let param1 = filter_combined_name
        let param2 = filter_combined_level
        api = `${base}/api/combined_query/${param1}/${param2}`
    }

    const data = await fetch(api)
    const model = await data.json()

    render_view(model);
}

var render_view = (model) => {
    var source = document.querySelector('#results_view').innerHTML;
    var template = Handlebars.compile(source)
    var html = template(model)

    document.querySelector('#results').innerHTML = html;
}