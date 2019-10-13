import Sequelize, { Model } from 'sequelize';

class Brand extends Model {
  static init(sequelize) {
    super.init(
      {
        shortName: Sequelize.STRING,
        fullName: Sequelize.STRING,
      },
      { sequelize }
    );
  }
}

export default Brand;
