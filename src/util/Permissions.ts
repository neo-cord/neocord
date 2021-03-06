/*
 * Copyright (c) 2020. MeLike2D All Rights Reserved.
 * Neo is licensed under the MIT License.
 * See the LICENSE file in the project root for more details.
 */

import { BitField, BitFieldObject } from "@neocord/utils";

export enum Permission {
  CreateInstantInvite = 1 << 0,
  KickMembers = 1 << 1,
  BanMembers = 1 << 2,
  Administrator = 1 << 3,
  ManageChannels = 1 << 4,
  ManageGuild = 1 << 5,
  AddReactions = 1 << 6,
  ViewAuditLog = 1 << 7,
  PrioritySpeaker = 1 << 8,
  Stream = 1 << 9,
  ViewChannel = 1 << 10,
  SendMessages = 1 << 11,
  SendTTSMessage = 1 << 12,
  ManageMessages = 1 << 13,
  EmbedLinks = 1 << 14,
  AttachFiles = 1 << 15,
  ReadMessageHistory = 1 << 16,
  MentionEveryone = 1 << 17,
  UseExternalEmojis = 1 << 18,
  ViewGuildInsights = 1 << 19,
  Connect = 1 << 20,
  Speak = 1 << 21,
  MuteMembers = 1 << 22,
  DeafenMembers = 1 << 23,
  MoveMembers = 1 << 24,
  UseVAD = 1 << 25,
  ChangeNickname = 1 << 26,
  ManageNicknames = 1 << 27,
  ManageRoles = 1 << 28,
  ManageWebhooks = 1 << 29,
  ManageEmojis = 1 << 30,
}

export class Permissions extends BitField<PermissionResolvable> {
  /**
   * All Permission Flags.
   * @type {Permission}
   */
  public static FLAGS = Permission;

  /**
   * The default permissions for a role.
   * @type {number}
   */
  public static DEFAULT = 104320577;

  /**
   * Permissions that can't be influenced by channel overwrites, even if explicitly set.
   * @type {number}
   */
  public static GUILD_SCOPE_PERMISSIONS = 1275592878;

  /**
   * Makes a permission name more readable.
   * @param {Permission} permission The permission
   */
  public static humanize(permission: Permission): string {
    if (permission === Permission.UseVAD) return "Use Voice Activity";
    if (permission === Permission.SendTTSMessage) return "Send TTS Messages";
    return Permission[permission].replace(/([a-z])([A-Z])/, "$1 $2");
  }

  /**
   * Checks whether the bitfield has a permission, or any of multiple permissions.
   * @param {PermissionResolvable} permission Permission(s) to check for
   * @param {boolean} [checkAdmin] Whether to allow the administrator permission to override
   */
  public any(permission: PermissionResolvable, checkAdmin = true): boolean {
    return (
      (checkAdmin && super.has(Permission.Administrator)) ||
      super.any(permission)
    );
  }

  /**
   * Checks whether the bitfield has a permission, or multiple permissions.
   * @param {PermissionResolvable} permission Permission(s) to check for
   * @param {boolean} [checkAdmin] Whether to allow the administrator permission to override
   */
  public has(permission: PermissionResolvable, checkAdmin = true): boolean {
    return (
      (checkAdmin && super.has(Permission.Administrator)) ||
      super.has(permission)
    );
  }
}

export type PermissionResolvable =
  | keyof typeof Permission
  | Permission
  | number
  | BitFieldObject
  | (keyof typeof Permission | number | BitFieldObject)[];

Permissions.humanize(Permission.SendTTSMessage);
