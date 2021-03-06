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
 * Definition of the activity output type.
 *
 */
class ActivityOutputType {
  /**
   * Create a ActivityOutputType.
   * @member {string} [name] Gets or sets the name of the activity output type.
   * @member {string} [type] Gets or sets the type of the activity output type.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ActivityOutputType
   *
   * @returns {object} metadata of ActivityOutputType
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ActivityOutputType',
      type: {
        name: 'Composite',
        className: 'ActivityOutputType',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ActivityOutputType;
