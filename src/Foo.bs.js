// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


const school = require('school');

const defaultId = 10;

function queryResult(usePayload, payload) {
  if (usePayload) {
    return payload.student;
  } else {
    return school.getStudentById(defaultId);
  }
}
;

/*  Not a pure module */