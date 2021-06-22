export class LoginUserDto {
  /** ID */
  id: number;
  /** 品名 */
  name: string;
  /** 入荷日 */
  arrivalAt: Date;
  /** 作成者ID */
  createUserId: number;
  /** 作成日 */
  createdAt: string;
  /** 更新者ID */
  updateUserId: number;
  /** 更新日 */
  updatedAt: string;
  /** 削除フラグ */
  isDeleted: boolean;
}
