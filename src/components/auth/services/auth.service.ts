/**
 * @since March 2022
 * @author Ankit patidar
 * @desc Generic class for auth service
 * 
*/


class AuthService {
  private TOKEN_KEY = 'userdata';
  private ROLE_TYPE = 'role';
  private DESIGNATION = 'DESIGNATION';

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) || '';
  }
  setRole(role: string): void {
    if (role) {
      localStorage.setItem(this.ROLE_TYPE, role);
    }
  }
  getRole(): string {
    return localStorage.getItem(this.ROLE_TYPE) || '';
  }
  setDesignation(designation: string): void {
    if (designation) {
      localStorage.setItem(this.DESIGNATION, designation);
    }
  }
  getDesignation(): string {
    return localStorage.getItem(this.DESIGNATION) || '';
  }
 

  login(payload: any): any {

    return Promise.resolve({});
  }


  getTimelineData(payload: any):any{
    return Promise.resolve({
      "success": "Successful",
      "data": {
        "$__": {
          "activePaths": {
            "paths": {
              "roadmap": "init",
              "_id": "init",
              "userId": "init",
              "createdAt": "init",
              "updatedAt": "init",
              "__v": "init"
            },
            "states": {
              "ignore": {},
              "default": {},
              "init": {
                "_id": true,
                "userId": true,
                "roadmap": true,
                "createdAt": true,
                "updatedAt": true,
                "__v": true
              },
              "modify": {},
              "require": {}
            },
            "stateNames": [
              "require",
              "modify",
              "init",
              "default",
              "ignore"
            ]
          },
          "skipId": true,
          "strictMode": true,
          "selected": {},
          "fields": {},
          "exclude": null
        },
        "$isNew": false,
        "_doc": {
          "_id": "63199534128635674d2e4b9a",
          "userId": "6316ea58401faabbefedd618",
          "roadmap": [
            {
              "tech_name": "JAVASCRIPT",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "Javascript",
              "category": "JAVASCRIPT",
              "priority": 1,
              "domain": "FRONTEND",
              "categoryPriority": 1,
              "topics": "Introduction of Js, Datatypes, Functions in JS, Hoisting, Closures, Objects, Document Object Model (DOM),  Browser Object Model( BOM), ES6 Features, Promise in Js",
              "description": ""
            },
            {
              "tech_name": "ANGULAR",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "Angular",
              "category": "ANGULAR",
              "priority": 2,
              "domain": "FRONTEND",
              "categoryPriority": 1,
              "topics": "Introduction, Components, Databinding, Directives, Services, Observables, Handling Forms in Angular, Making Http Requests, Lifecycle Methods in Angualr, Routing, Error Handling in Angular",
              "description": ""
            },
            {
              "tech_name": "ANGULAR_UNIT_TESTING",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "Angular Unit Testing",
              "category": "ANGULAR",
              "priority": 2,
              "domain": "FRONTEND",
              "categoryPriority": 3,
              "topics": "Introduction of Jasmine and Karma",
              "description": ""
            },
            {
              "tech_name": "ANGULAR_STATE_MANAGEMENT",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "Angular State Management",
              "category": "ANGULAR",
              "priority": 2,
              "domain": "FRONTEND",
              "categoryPriority": 2,
              "topics": "Introduction of NgRx, Action and Reducers, Selectors and Effects, NgRx Development Tools, NgRx Data",
              "description": ""
            },
            {
              "tech_name": "REACT",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "React",
              "category": "REACT",
              "priority": 3,
              "domain": "FRONTEND",
              "categoryPriority": 1,
              "topics": "Introduction to React JS, React JS Basics, Component in React, React State and Props, Form Handling in React, Lifecycle Methods in React, React Hooks, Routing in React, Error Handling in React",
              "description": ""
            },
            {
              "tech_name": "REDUX_STATE_MANAGEMENT",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "Redux State Management",
              "category": "REACT",
              "priority": 3,
              "domain": "FRONTEND",
              "categoryPriority": 2,
              "topics": "Introduction to Redux, Redux Core Concepts, Redux Architecture",
              "description": ""
            },
            {
              "tech_name": "REACT_UNIT_TESTING",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "React Unit Testing",
              "category": "REACT",
              "priority": 3,
              "domain": "FRONTEND",
              "categoryPriority": 3,
              "topics": "Introduction to Jest and Enzyme, Jest Setup, Enzyme Setup, DOM Unit testing, Simulate & Dive, Match Snapshot, Mount Vs Shallow, Functional Component Testing",
              "description": ""
            },
            {
              "tech_name": "HTML_CSS_BOOTSTRAP",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "HTML CSS BOOTSTRAP",
              "category": "HTML_CSS_BOOTSTRAP",
              "priority": 5,
              "domain": "FRONTEND",
              "categoryPriority": 1,
              "topics": "Basics Of HTML, HTML Forms, HTML Graphics, HTMl Media, HTML APIs, Basics of CSS, Advanced CSS, CSS Responsive, CSS Grid, Basics Of Bootstrap, Bootstrap Forms, Bootsrap Grid",
              "description": ""
            },
            {
              "tech_name": "NODE",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "Node JS",
              "category": "NODE",
              "priority": 6,
              "domain": "FRONTEND",
              "categoryPriority": 1,
              "topics": "Introduction to Node JS, Basics of Node JS, Modules In Node JS, Working with http, url and request, REPL, Authentication with Node JS",
              "description": ""
            },
            {
              "tech_name": "VUE",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "Vue JS",
              "category": "VUE",
              "priority": 4,
              "domain": "FRONTEND",
              "categoryPriority": 1,
              "topics": "Introduction to Vue Js, Basics Of Vue Js, Components in Vue Js, Forms in Vue JS, Sending Http Requests, Routing",
              "description": ""
            },
            {
              "tech_name": "VUE_STATE_MANAGEMENT",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "Vue State Management",
              "category": "VUE",
              "priority": 4,
              "domain": "FRONTEND",
              "categoryPriority": 2,
              "topics": "Introduction to Vuex, Core Concepts of Vuex, Advanced Concept of Vuex",
              "description": ""
            },
            {
              "tech_name": "VUE_UNIT_TESTING",
              "startDate": null,
              "endDate": null,
              "status": "",
              "githubLink": "",
              "title": "Vue Unit Testing",
              "category": "VUE",
              "priority": 4,
              "domain": "FRONTEND",
              "categoryPriority": 3,
              "topics": "",
              "description": ""
            }
          ],
          "createdAt": "2022-09-08T07:09:40.276Z",
          "updatedAt": "2022-09-08T07:09:40.276Z",
          "__v": 0
        },
        "roadmap": [
          {
            "tech_name": "JAVASCRIPT",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "Javascript",
            "category": "JAVASCRIPT",
            "priority": 1,
            "domain": "FRONTEND",
            "categoryPriority": 1,
            "topics": "Introduction of Js, Datatypes, Functions in JS, Hoisting, Closures, Objects, Document Object Model (DOM),  Browser Object Model( BOM), ES6 Features, Promise in Js",
            "description": ""
          },
          {
            "tech_name": "REACT",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "React",
            "category": "REACT",
            "priority": 2,
            "domain": "FRONTEND",
            "categoryPriority": 1,
            "topics": "Introduction to React JS, React JS Basics, Component in React, React State and Props, Form Handling in React, Lifecycle Methods in React, React Hooks, Routing in React, Error Handling in React",
            "description": ""
          },
          {
            "tech_name": "REDUX_STATE_MANAGEMENT",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "Redux State Management",
            "category": "REACT",
            "priority": 2,
            "domain": "FRONTEND",
            "categoryPriority": 2,
            "topics": "Introduction to Redux, Redux Core Concepts, Redux Architecture",
            "description": ""
          },
          {
            "tech_name": "REACT_UNIT_TESTING",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "React Unit Testing",
            "category": "REACT",
            "priority": 2,
            "domain": "FRONTEND",
            "categoryPriority": 3,
            "topics": "Introduction to Jest and Enzyme, Jest Setup, Enzyme Setup, DOM Unit testing, Simulate & Dive, Match Snapshot, Mount Vs Shallow, Functional Component Testing",
            "description": ""
          },
          {
            "tech_name": "ANGULAR",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "Angular",
            "category": "ANGULAR",
            "priority": 3,
            "domain": "FRONTEND",
            "categoryPriority": 1,
            "topics": "Introduction, Components, Databinding, Directives, Services, Observables, Handling Forms in Angular, Making Http Requests, Lifecycle Methods in Angualr, Routing, Error Handling in Angular",
            "description": ""
          },
          {
            "tech_name": "ANGULAR_STATE_MANAGEMENT",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "Angular State Management",
            "category": "ANGULAR",
            "priority": 3,
            "domain": "FRONTEND",
            "categoryPriority": 2,
            "topics": "Introduction of NgRx, Action and Reducers, Selectors and Effects, NgRx Development Tools, NgRx Data",
            "description": ""
          },
          {
            "tech_name": "ANGULAR_UNIT_TESTING",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "Angular Unit Testing",
            "category": "ANGULAR",
            "priority": 3,
            "domain": "FRONTEND",
            "categoryPriority": 3,
            "topics": "Introduction of Jasmine and Karma",
            "description": ""
          },
          {
            "tech_name": "VUE",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "Vue JS",
            "category": "VUE",
            "priority": 4,
            "domain": "FRONTEND",
            "categoryPriority": 1,
            "topics": "Introduction to Vue Js, Basics Of Vue Js, Components in Vue Js, Forms in Vue JS, Sending Http Requests, Routing",
            "description": ""
          },
          {
            "tech_name": "VUE_STATE_MANAGEMENT",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "Vue State Management",
            "category": "VUE",
            "priority": 4,
            "domain": "FRONTEND",
            "categoryPriority": 2,
            "topics": "Introduction to Vuex, Core Concepts of Vuex, Advanced Concept of Vuex",
            "description": ""
          },
          {
            "tech_name": "VUE_UNIT_TESTING",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "Vue Unit Testing",
            "category": "VUE",
            "priority": 4,
            "domain": "FRONTEND",
            "categoryPriority": 3,
            "topics": "",
            "description": ""
          },
          {
            "tech_name": "HTML_CSS_BOOTSTRAP",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "HTML CSS BOOTSTRAP",
            "category": "HTML_CSS_BOOTSTRAP",
            "priority": 5,
            "domain": "FRONTEND",
            "categoryPriority": 1,
            "topics": "Basics Of HTML, HTML Forms, HTML Graphics, HTMl Media, HTML APIs, Basics of CSS, Advanced CSS, CSS Responsive, CSS Grid, Basics Of Bootstrap, Bootstrap Forms, Bootsrap Grid",
            "description": ""
          },
          {
            "tech_name": "NODE",
            "startDate": null,
            "endDate": null,
            "status": "",
            "githubLink": "",
            "title": "Node JS",
            "category": "NODE",
            "priority": 6,
            "domain": "FRONTEND",
            "categoryPriority": 1,
            "topics": "Introduction to Node JS, Basics of Node JS, Modules In Node JS, Working with http, url and request, REPL, Authentication with Node JS",
            "description": ""
          }
        ]
      }
    })
  }

  getProfile(payload: any): any {
    return Promise.resolve({
      "message": "Successfully get",
      "data": {
          "_id": "6316ea59401faabbefedd6be",
          "userId": "6316ea58401faabbefedd618",
          "empId": "1011217",
          "firstName": "Lokesh ",
          "lastName": "Daiya",
          "email": "lokesh.daiya@yash.com",
          "designation": "Sr UI Lead",
          "baseLocation": "Pune-Hinjewadi III-DC",
          "skills": [
              {
                  "skillType": "react",
                  "priority": "Primary",
                  "proficiency": "expert",
                  "expYears": 9,
                  "expMonths": 0
              }
          ],
          "projects": [
              {
                  "projectTitle": "CoE-BG5-BU14-UI-UX-Core Team",
                  "startDate": "2022-08-02T00:00:00.000Z",
                  "endDate": "2022-09-17T00:00:00.000Z",
                  "technology": [
                      {
                          "value": "react",
                          "label": "React JS",
                          "name": "react"
                      },
                      {
                          "value": "angular",
                          "label": "Angular",
                          "name": "angular"
                      },
                      {
                          "value": "node",
                          "label": "Node JS",
                          "name": "node"
                      },
                      {
                          "value": "Javascript",
                          "label": "JavaScript",
                          "name": "Javascript"
                      },
                      {
                          "value": "HTML",
                          "label": "HTML",
                          "name": "HTML"
                      },
                      {
                          "value": "CSS",
                          "label": "CSS",
                          "name": "CSS"
                      },
                      {
                          "value": "Bootstrap",
                          "label": "Bootstrap",
                          "name": "Bootstrap"
                      },
                      {
                          "value": "VueJs",
                          "label": "Vue Js",
                          "name": "VueJs"
                      }
                  ],
                  "description": "Core Team"
              }
          ],
          "years": 12,
          "months": 1,
          "dateOfJoining": "2022-08-23T00:00:00.000Z",
          "phoneNumber": "8839620730",
          "title": "Mr."
      }
  });

  }
}

export const authClass = new AuthService();
