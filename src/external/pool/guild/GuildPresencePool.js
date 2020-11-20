/*
 * Copyright (c) 2020. MeLike2D All Rights Reserved.
 * Neo is licensed under the MIT License.
 * See the LICENSE file in the project root for more details.
 */

import { ResourcePool } from "../../abstract/ResourcePool";
import { resources } from "../../resource/Resources";

export class GuildPresencePool extends ResourcePool {
  /**
   * @param {Guild} guild The guild instance.
   */
  constructor(guild) {
    super(guild.client, {
      limit: guild.client.caching.limitFor("presence"),
      class: resources.get("Presence")
    });

    /**
     * The guild that this presence pool belongs to.
     * @type {Guild}
     * @readonly
     */
    Object.defineProperty(this, "guild", {
      value: guild,
      configurable: false,
      writable: false
    });
  }
}