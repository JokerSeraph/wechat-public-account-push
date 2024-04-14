/* eslint-disable */

/**
 */
const USER_CONFIG = {

  // 公众号测试的APP_ID
  APP_ID: 'wx49b28ff0340b0769',

  // 公众号测试的APP_SECRET
  APP_SECRET: '5e49dd85c81c3d33b7c4aeb3de2960c3',

  PROVINCE: '上海',
  CITY: '宝山',

  USERS: [
    {
      // 她
      name: '宝贝',
      // 她的id
      id: 'opx1s5pVQuOmNNZKehWpvspPiivU',
      // 推送的模板ID
      useTemplateId: 'cbEf24yQsQG-cdt3x86zglaF6kK-hnNtiZxLgqXE46c',
      // 新历格式：MM-DD
      horoscopeDate: '10-23',
      festivals: [
        // 阴历日期
        {
          type: '*生日', name: '宝贝儿', year: '1997', date: '09-22',
        },
        // 阳历日期
        {
          type: '生日', name: '我滴宝儿', year: '1997', date: '10-23',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '02-14',
        },
      ],
      // 我们在一起已经有xxxx天了
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-03-09' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2024-03-24' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Snjt_t5BFKfTGEbCouI5hP9TaxV99B0ziSQUhZaxqN0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opx1s5s1a6YMrIi3UuaQALpd7d_4',
    }
  ],

}

module.exports = USER_CONFIG

