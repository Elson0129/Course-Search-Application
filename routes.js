const express = require('express')
const router = express.Router();

const fs = require('fs')
let rawdata = fs.readFileSync('./courses.json');
let course = JSON.parse(rawdata)

router.get('/', (req, res) => {
    let output = {
        courses : course["courses"]
    }
    
    res.json(output);
})

router.get('/by_course_code/:qcode', (req,res) => {
    let query = req.params['qcode']
    let queryUpperCase = query.toUpperCase()
    
    filteredCourses = course["courses"].filter(q => (q.course_code.toLowerCase().includes(query.toLowerCase() || q.course_code.includes(queryUpperCase))));

    let output = {
        courses : filteredCourses
    }

    res.json(output);
});

router.get('/by_title/:qtitle', (req,res) => {
    let query = req.params['qtitle']

    filteredCourses = course["courses"].filter(q => q.title.toLowerCase().includes(query.toLowerCase()));

    let output = {
        courses : filteredCourses
    }

    res.json(output);
});

router.get('/by_instructor/:qname', (req,res) => {
    let query = req.params['qname']
    let queryLowerCase = query.toLowerCase();
    let queryCapitalized = String(queryLowerCase.charAt(0).toUpperCase() + queryLowerCase.slice(1))

    filteredCourses = course["courses"].filter(q => (q.instructor.includes(query) || q.instructor.includes(queryLowerCase) || q.instructor.includes(queryCapitalized)));
    
    let output = {
        courses : filteredCourses
    }

    res.json(output);
});

router.get('/by_level/:qlevel', (req,res) => {
    let query = req.params['qlevel']
    let queryLowerCase = query.toLowerCase();
    let queryCapitalized = String(queryLowerCase.charAt(0).toUpperCase() + queryLowerCase.slice(1))
    
    filteredCourses = course["courses"].filter(q => q.course_level.startsWith(queryCapitalized));
    
    let output = {
        courses : filteredCourses
    }

    res.json(output);
});

router.get('/combined_query/:qname/:qlevel', (req,res) => {
    let queryName = req.params['qname'].toLowerCase();
    let queryLevel = req.params['qlevel'].toLowerCase();

    let queryNameLowerCase = queryName.toLowerCase();
    let queryNameCapitalized = String(queryNameLowerCase.charAt(0).toUpperCase() + queryNameLowerCase.slice(1))

    let queryLevelLowerCase = queryLevel.toLowerCase();
    let queryLevelCapitalized = String(queryLevelLowerCase.charAt(0).toUpperCase() + queryLevelLowerCase.slice(1))
    let queryLevelSub = queryLevel.substring(1)
    
    filteredCourses = course["courses"].filter(q => ((q.instructor.includes(queryName) || q.instructor.includes(queryNameLowerCase) || q.instructor.includes(queryNameCapitalized)) && (q.course_level.startsWith(queryLevelCapitalized))))

    let output = {
        courses : filteredCourses
    }

    res.json(output);
});

module.exports = router;