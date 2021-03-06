/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The subject alternate names of a X509 object.
 *
 */
class SubjectAlternativeNames {
  /**
   * Create a SubjectAlternativeNames.
   * @member {array} [emails] Email addresses.
   * @member {array} [dnsNames] Domain names.
   * @member {array} [upns] User principal names.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SubjectAlternativeNames
   *
   * @returns {object} metadata of SubjectAlternativeNames
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SubjectAlternativeNames',
      type: {
        name: 'Composite',
        className: 'SubjectAlternativeNames',
        modelProperties: {
          emails: {
            required: false,
            serializedName: 'emails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          dnsNames: {
            required: false,
            serializedName: 'dns_names',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          upns: {
            required: false,
            serializedName: 'upns',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SubjectAlternativeNames;
