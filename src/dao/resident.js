import request from '@/utils/request';

export default {
  /**
   * 利用者を登録する
   * @param {string} name
   * @param {string} birthday
   * @param {string} gender
   * @param {Number} height
   * @param {Number} weight
   * @param {string} allergies
   * @param {string} medicalHistory
   * @param {string} preference
   * @param {string} lifeHistory
   * @param {string} remarks
   * @returns {Promise<void>}
   */
  async registerResident({
    name,
    birthday,
    gender,
    height,
    weight,
    allergies,
    medicalHistory,
    preference,
    lifeHistory,
    remarks,
  }) {
    const data = {
      name,
      birthday,
      gender,
      height,
      weight,
      allergies,
      medicalHistory,
      preference,
      lifeHistory,
      remarks,
    };
    const response = await request.post(`residents`, data).catch((error) => {
      throw error;
    });

    return response.data;
  },
};
