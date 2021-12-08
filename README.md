# CUS1172_FinalProject
**Running the application**
1. Ensure all the prerequisites are met: 
  - Node.js is installed in your local machine: https://nodejs.org/en/download/
  - Express library is installed: run 'npm install express' in terminal 
 
2. To run the application in a terminal, use this command: 'node app_api.js'

**API Routes of the application** 
- ‘api/by_course_code/:qcode’
  - The route is expected to query courses by course code or code pre-fix and return a formatted JSON response. For example, 'CUS' should return all CUS courses, while 'CUS1172'   must return only the session for the CUS1172 course.

- ‘api/by_title /:qtitle’
  - The route is expected to query courses by title and return a formatted JSON response. The query should return all courses whose title includes a given query sting. For example, the query string 'Software' should return all course sessions for both "Software Engineering" and "Software Design Methods" courses

- ‘api/by_instructor /:qname’
  - the route is expected to query courses by instructor's name, and should return the list of courses taught by that instructor as JSON response. The query should support partial name queries; for example, a query with the string “Chr” should return courses offered by any instructor whose name include “chr” as part of their first name or last name.

- ‘api/by_level/:qlevel'
  - The route should filter the courses by their level (i.e. ‘graduate’ or ‘undergraduate’ level course) and return courses that match the query as a JSON object.

- ‘api/combined_query/:qname/:qlevel'
  - The route is expected to query courses based on a combination of two criteria (i.e. instructor's name and whether the course is an undergraduate or graduate course) and return the results as a JSON object.
