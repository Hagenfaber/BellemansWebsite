/**
 * Generated by @openapi-codegen
 *
 * @version 1.0.0
 */
import type * as Schemas from "./bellemansSchemas";

export type UsersPermissionsRoleRequest = {
  name?: string;
  description?: string;
  type?: string;
  permissions?: Schemas.UsersPermissionsPermissionsTree;
};
