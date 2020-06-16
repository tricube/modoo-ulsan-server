import { Model, DataTypes } from 'sequelize';

export default class Member extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        displayName: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          field: 'display_name',
        },
        point: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        location: {
          type: DataTypes.GEOMETRY('POINT', 4326),
          // allowNull: false,
        },
        profileImage: {
          type: 'BINARY(16)',
          allowNull: false,
          field: 'profile_image',
        },
        roleId: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'role_id',
        },
      },
      {
        sequelize,
        tableName: 'member',
        timestamps: true,
        paranoid: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Role, {
      foreignKey: 'roleId',
      targetKey: 'id',
    });
    this.hasOne(models.Account, {
      foreignKey: 'memberId',
      targetKey: 'id',
    });
  }
}