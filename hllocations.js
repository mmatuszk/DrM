/*
 * File: hllocations.js
 * Author: Marcin Matuszkiewicz - marcin@jewelmirror.com
 *
 */

var HLLocations = (function () {
  var host;

  host = 'hlapp';

  function getPatientId() {
    // return '41057';
    return $('#current-patient-id').text().trim();
  }

  function getVisitId() {
    // return '266116';
    return $('#current-visit-id').text().trim();
  }

  function getHLRootURI() {
    var uri = 'http://'+'hlapp'+'/';
    uri += 'Healthlandweb/';
    return uri;
  }

  function getPatientChartURI(initialTab) {
    var uri;
    uri = getHLRootURI();
    uri += 'PatientChart/Chart';
    uri += '?patientId=';
    uri += getPatientId();
    uri += '&visitId=';
    uri += getVisitId();
    uri += '&initialTab=';
    uri += initialTab;
    return uri;
  }

  function getVitalSignsURI() {
    return getPatientChartURI('VitalSigns');
  }

  function getAssessmentsURI() {
    return getPatientChartURI('Assessments');
  }

  function getChartNotesURI() {
    return getPatientChartURI('ChartNotes');
  }

  function getLabResultsURI() {
    return getPatientChartURI('LabResults');
  }

  function getDocumentsURI() {
    return getPatientChartURI('Documents');
  }

  function getOrdersURI() {
    return getPatientChartURI('Orders');
  }

  function getMedicalHistoryURI(initialTab) {
    var uri;
    uri = getHLRootURI();
    uri += 'History/MedicalHistory';
    uri += '?patientId=';
    uri += getPatientId();
    uri += '&visitId=';
    uri += getVisitId();
    uri += '&initialTab=';
    uri += initialTab;
    return uri;
  }

  function getProblemURI() {
    return getMedicalHistoryURI('Problem');
  }

  function getSurgeryURI() {
    return getMedicalHistoryURI('Surgery');
  }

  function getHomeMedicationURI() {
    return getMedicalHistoryURI('HomeMedication');
  }

  function getAllergyURI() {
    return getMedicalHistoryURI('Allergy');
  }
  
  function getImmunizationURI() {
    return getMedicalHistoryURI('Immunization');
  }
  
    function getCPOEURI() {
    var uri;
    uri = getHLRootURI();
    uri += 'CPOE/WHOrders/Orders';
    uri += '?patientId=';
    uri += getPatientId();
    uri += '&visitId=';
    uri += getVisitId();
    return uri;
  }
  
  function getPhysicianWorkCenterURI() {
    var uri;
    uri = getHLRootURI();
    uri += 'WorkCenter/PhysicianWorkCenter';
    uri += '?patientId=';
    uri += getPatientId();
    uri += '&visitId=';
     uri += getVisitId();
    uri += '#FocusHere';
    return uri;    
  }
  
  function getClinicURI() {
    var uri;
    
    uri = getHLRootURI();
    uri += 'Clinic';
    return uri;
  }

  function getHospitalURI() {
    var uri;
    
    uri = getHLRootURI();
    uri += 'Hospital';
    return uri;
  }
  
  // Public interface
  var pub = {};

  pub.goVitalSigns = function () {
    var uri = getVitalSignsURI();
    window.location.href = uri;
  };

  pub.goAssessments = function () {
    var uri = getAssessmentsURI();
    window.location.href = uri;
  };
  pub.goChartNotes = function () {
    var uri = getChartNotesURI();
    window.location.href = uri;
  };
  pub.goLabResults = function () {
    var uri = getLabResultsURI();
    window.location.href = uri;
  };
  pub.goDocuments = function () {
    var uri = getDocumentsURI();
    window.location.href = uri;
  };
  pub.goOrders = function () {
    var uri = getOrdersURI();
    window.location.href = uri;
  };
  pub.goProblem = function() {
    var uri = getProblemURI();
    window.location.href = uri;
  };
  pub.goSurgery = function() {
    var uri = getSurgeryURI();
    window.location.href = uri;
  };
  pub.goHomeMedication = function() {
    var uri = getHomeMedicationURI();
    window.location.href = uri;
  };
  pub.goAllergy = function() {
    var uri = getAllergyURI();
    window.location.href = uri;
  };
  pub.goImmunization = function() {
    var uri = getImmunizationURI();
    window.location.href = uri;
  };
  pub.goCPOE = function() {
    var uri = getCPOEURI();
    window.location.href = uri;
  };
  pub.goPhysicianWorkCenter = function() {
    var uri = getPhysicianWorkCenterURI();
    window.location.href = uri;    
  };
  pub.goClinic = function() {
    var uri = getClinicURI();
    window.location.href = uri;    
  };
  pub.goHospital = function() {
    var uri = getHospitalURI();
    window.location.href = uri;    
  };
    
  pub.goGoogle = function() {
    window.location.href = 'http://google.com';
  };

  return pub;
})();
