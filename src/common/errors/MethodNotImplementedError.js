/*
 * Copyright (c) 2020. MeLike2D All Rights Reserved.
 * Neo is licensed under the MIT License.
 * See the LICENSE file in the project root for more details.
 */

export class MethodNotImplementedError extends Error {
  constructor() {
    super("This method hasn't been implemented.");

    this.name = "MethodNotImplementedError";
  }
}