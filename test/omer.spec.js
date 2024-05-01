const test = require('ava');
const {omerSefira, omerTodayIs, omerEmoji} = require('../dist/cjs/omer');

test('sefira', (t) => {
  t.is(omerSefira(46, 'en'), 'Eternity within Majesty');
  t.is(omerSefira(46, 'he'), 'נֶּֽצַח שֶׁבְּמַּלְכוּת');
  t.is(omerSefira(46, 'translit'), 'Netzach sheb\'Malkhut');
});

test('omerTodayIsEn', (t) => {
  t.is(omerTodayIs(1, 'en'), 'Today is 1 day of the Omer');
  t.is(omerTodayIs(2, 'en'), 'Today is 2 days of the Omer');
  t.is(omerTodayIs(7, 'en'), 'Today is 7 days, which is 1 week of the Omer');
  t.is(omerTodayIs(8, 'en'), 'Today is 8 days, which is 1 week and 1 day of the Omer');
  t.is(omerTodayIs(13, 'en'), 'Today is 13 days, which is 1 week and 6 days of the Omer');
  t.is(omerTodayIs(14, 'en'), 'Today is 14 days, which is 2 weeks of the Omer');
  t.is(omerTodayIs(41, 'en'), 'Today is 41 days, which is 5 weeks and 6 days of the Omer');
  t.is(omerTodayIs(46, 'en'), 'Today is 46 days, which is 6 weeks and 4 days of the Omer');
});

test('throws-invalid-day', (t) => {
  const error = t.throws(() => {
    console.log(omerTodayIs(123, 'he'));
  }, {instanceOf: RangeError});
  t.is(error.message, 'Invalid Omer day 123');
});

test('omerTodayIsHe', (t) => {
  const actual = [];
  for (let i = 1; i <= 49; i++) {
    actual.push(omerTodayIs(i, 'he'));
  }
  const expected = [
    'הַיּוֹם יוֹם אֶחָד לָעוֹמֶר',
    'הַיּוֹם שְׁנֵי יָמִים לָעוֹמֶר',
    'הַיּוֹם שְׁלוֹשָׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם אַרְבָּעָה יָמִים לָעוֹמֶר',
    'הַיּוֹם חֲמִשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם שִׁשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם שִׁבְעָה יָמִים, שְׁהֵם שָׁבוּעַ אֶחָד לָעוֹמֶר',
    'הַיּוֹם שְׁמוֹנָה יָמִים, שְׁהֵם שָׁבוּעַ אֶחָד וְיוֹם אֶחָד לָעוֹמֶר',
    'הַיּוֹם תִּשְׁעָה יָמִים, שְׁהֵם שָׁבוּעַ אֶחָד וְשְׁנֵי יָמִים לָעוֹמֶר',
    'הַיּוֹם עֲשָׂרָה יָמִים, שְׁהֵם שָׁבוּעַ אֶחָד וְשְׁלוֹשָׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם אֶחָד עָשָׂר יוֹם, שְׁהֵם שָׁבוּעַ אֶחָד וְאַרְבָּעָה יָמִים לָעוֹמֶר',
    'הַיּוֹם שְׁנַיִם עָשָׂר יוֹם, שְׁהֵם שָׁבוּעַ אֶחָד וְחֲמִשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם שְׁלוֹשָׁה עָשָׂר יוֹם, שְׁהֵם שָׁבוּעַ אֶחָד וְשִׁשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם אַרְבָּעָה עָשָׂר יוֹם, שְׁהֵם שְׁנֵי שָׁבוּעוֹת לָעוֹמֶר',
    'הַיּוֹם חֲמִשָּׁה עָשָׂר יוֹם, שְׁהֵם שְׁנֵי שָׁבוּעוֹת וְיוֹם אֶחָד לָעוֹמֶר',
    'הַיּוֹם שִׁשָּׁה עָשָׂר יוֹם, שְׁהֵם שְׁנֵי שָׁבוּעוֹת וְשְׁנֵי יָמִים לָעוֹמֶר',
    'הַיּוֹם שִׁבְעָה עָשָׂר יוֹם, שְׁהֵם שְׁנֵי שָׁבוּעוֹת וְשְׁלוֹשָׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם שְׁמוֹנָה עָשָׂר יוֹם, שְׁהֵם שְׁנֵי שָׁבוּעוֹת וְאַרְבָּעָה יָמִים לָעוֹמֶר',
    'הַיּוֹם תִּשְׁעָה עָשָׂר יוֹם, שְׁהֵם שְׁנֵי שָׁבוּעוֹת וְחֲמִשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם עֶשְׂרִים יוֹם, שְׁהֵם שְׁנֵי שָׁבוּעוֹת וְשִׁשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם אֶחָד וְעֶשְׂרִים יוֹם, שְׁהֵם שְׁלוֹשָׁה שָׁבוּעוֹת לָעוֹמֶר',
    'הַיּוֹם שְׁנַיִם וְעֶשְׂרִים יוֹם, שְׁהֵם שְׁלוֹשָׁה שָׁבוּעוֹת וְיוֹם אֶחָד לָעוֹמֶר',
    'הַיּוֹם שְׁלוֹשָׁה וְעֶשְׂרִים יוֹם, שְׁהֵם שְׁלוֹשָׁה שָׁבוּעוֹת וְשְׁנֵי יָמִים לָעוֹמֶר',
    'הַיּוֹם אַרְבָּעָה וְעֶשְׂרִים יוֹם, שְׁהֵם שְׁלוֹשָׁה שָׁבוּעוֹת וְשְׁלוֹשָׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם חֲמִשָּׁה וְעֶשְׂרִים יוֹם, שְׁהֵם שְׁלוֹשָׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים לָעוֹמֶר',
    'הַיּוֹם שִׁשָּׁה וְעֶשְׂרִים יוֹם, שְׁהֵם שְׁלוֹשָׁה שָׁבוּעוֹת וְחֲמִשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם שִׁבְעָה וְעֶשְׂרִים יוֹם, שְׁהֵם שְׁלוֹשָׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם שְׁמוֹנָה וְעֶשְׂרִים יוֹם, שְׁהֵם אַרְבָּעָה שָׁבוּעוֹת לָעוֹמֶר',
    'הַיּוֹם תִּשְׁעָה וְעֶשְׂרִים יוֹם, שְׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְיוֹם אֶחָד לָעוֹמֶר',
    'הַיּוֹם שְׁלוֹשִׁים יוֹם, שְׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְשְׁנֵי יָמִים לָעוֹמֶר',
    'הַיּוֹם אֶחָד וְשְׁלוֹשִׁים יוֹם, שְׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְשְׁלוֹשָׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם שְׁנַיִם וְשְׁלוֹשִׁים יוֹם, שְׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים לָעוֹמֶר',
    'הַיּוֹם שְׁלוֹשָׁה וְשְׁלוֹשִׁים יוֹם, שְׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְחֲמִשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם אַרְבָּעָה וְשְׁלוֹשִׁים יוֹם, שְׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם חֲמִשָּׁה וְשְׁלוֹשִׁים יוֹם, שְׁהֵם חֲמִשָּׁה שָׁבוּעוֹת לָעוֹמֶר',
    'הַיּוֹם שִׁשָּׁה וְשְׁלוֹשִׁים יוֹם, שְׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְיוֹם אֶחָד לָעוֹמֶר',
    'הַיּוֹם שִׁבְעָה וְשְׁלוֹשִׁים יוֹם, שְׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְשְׁנֵי יָמִים לָעוֹמֶר',
    'הַיּוֹם שְׁמוֹנָה וְשְׁלוֹשִׁים יוֹם, שְׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְשְׁלוֹשָׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם תִּשְׁעָה וְשְׁלוֹשִׁים יוֹם, שְׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים לָעוֹמֶר',
    'הַיּוֹם אַרְבָּעִים יוֹם, שְׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְחֲמִשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם אֶחָד וְאַרְבָּעִים יוֹם, שְׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם שְׁנַיִם וְאַרְבָּעִים יוֹם, שְׁהֵם שִׁשָּׁה שָׁבוּעוֹת לָעוֹמֶר',
    'הַיּוֹם שְׁלוֹשָׁה וְאַרְבָּעִים יוֹם, שְׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְיוֹם אֶחָד לָעוֹמֶר',
    'הַיּוֹם אַרְבָּעָה וְאַרְבָּעִים יוֹם, שְׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְשְׁנֵי יָמִים לָעוֹמֶר',
    'הַיּוֹם חֲמִשָּׁה וְאַרְבָּעִים יוֹם, שְׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְשְׁלוֹשָׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם שִׁשָּׁה וְאַרְבָּעִים יוֹם, שְׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים לָעוֹמֶר',
    'הַיּוֹם שִׁבְעָה וְאַרְבָּעִים יוֹם, שְׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְחֲמִשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם שְׁמוֹנָה וְאַרְבָּעִים יוֹם, שְׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים לָעוֹמֶר',
    'הַיּוֹם תִּשְׁעָה וְאַרְבָּעִים יוֹם, שְׁהֵם שִׁבְעָה שָׁבוּעוֹת לָעוֹמֶר',
  ];
  t.deepEqual(actual, expected);
});

test('emoji', (t) => {
  const actual = [];
  for (let i = 1; i <= 49; i++) {
    const str = omerEmoji(i);
    actual.push(str);
  }
  const expected = [
    '①', '②', '③', '④', '⑤', '⑥', '⑦',
    '⑧', '⑨', '⑩', '⑪', '⑫', '⑬', '⑭',
    '⑮', '⑯', '⑰', '⑱', '⑲', '⑳', '㉑',
    '㉒', '㉓', '㉔', '㉕', '㉖', '㉗', '㉘',
    '㉙', '㉚', '㉛', '㉜', '㉝', '㉞', '㉟',
    '㊱', '㊲', '㊳', '㊴', '㊵', '㊶', '㊷',
    '㊸', '㊹', '㊺', '㊻', '㊼', '㊽', '㊾',
  ];
  t.deepEqual(actual, expected);
});
