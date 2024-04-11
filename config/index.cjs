/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx49b28ff0340b0769',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5e49dd85c81c3d33b7c4aeb3de2960c3',

  PROVINCE: '上海',
  CITY: '宝山',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'opx1s5pVQuOmNNZKehWpvspPiivU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'OpRoyLJWjnQm6586qL-L_MIbKiG865gg-H83VgzmNes',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1997', date: '09-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '穆苗', year: '1997', date: '10-23',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '02-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
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

