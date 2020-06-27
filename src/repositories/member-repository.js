import { Member } from '@models';

export default class MemberRepository {
  static create(member, transaction) {
    return Member.create(member, { transaction });
  }
}
