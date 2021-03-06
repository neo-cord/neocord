/*
 * Copyright (c) 2020. MeLike2D All Rights Reserved.
 * Neo is licensed under the MIT License.
 * See the LICENSE file in the project root for more details.
 */

import { ChannelType } from "discord-api-types/default";
import { GuildChannel } from "./GuildChannel";

import type { Collection } from "@neocord/utils";

export class CategoryChannel extends GuildChannel {
  /**
   * The type of channel this is.
   * @type {ChannelType.GUILD_CATEGORY}
   */
  public readonly type = ChannelType.GUILD_CATEGORY;

  /**
   * All channels that are a child of this category.
   * @returns {Collection<string, GuildChannel>}
   */
  public get children(): Collection<string, GuildChannel> {
    return this.guild.channels.filter((c) => c.parentId === this.id);
  }
}
