'use strict';

angular.module('lr.upload.formdata', [])

  // Convert all data properties to FormData,
  // if they are a jqLite element, extract the files from the input
  .factory('formDataTransform', function () {
    return function formDataTransform(data) {
      var formData = new FormData();

      // Extract file elements from within config.data
      angular.forEach(data, function (value, key) {

        // If it's an element that means we should extract the files
        if (angular.isElement(value)) {
          var files = [];
          // Extract all the Files from the element
          angular.forEach(value, function (el) {
            angular.forEach(el.files, function (file) {
              files.push(file);
            });
          });

          // Do we have any files?
          if (files.length !== 0) {

            // If we have multiple files we send them as a 0 based array of params
            // file=file1&file=file2... making life easier for Spring's @RequestParam
            if (files.length > 1) {
              angular.forEach(files, function (file, index) {
                formData.append(key, file);
              });
            } else {
              formData.append(key, files[0]);
            }
          }
        } else {
          // If it's not a element we append the data as normal
          formData.append(key, value);
        }
      });

      return formData;
    };
  })

  .factory('formDataUpload', function ($http, formDataTransform) {
    return function formDataUpload(config) {
      // Apply FormData transform to the request
      config.transformRequest = formDataTransform;

      // Extend the headers so that the browser will set the correct content type
      config.headers = angular.extend(config.headers || {}, {
        'Content-Type': undefined
      });

      return $http(config);
    };
  });
