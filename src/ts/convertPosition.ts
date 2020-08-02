interface Data {
  lat: string,
  lon: string,
  name: string,
}

function positionDistlic(code: string): Data{

  const positionData: {[key: string]: Data}  = {
    '100': {lat: '141.49525560707', lon: '43.4151931842515', name: '石狩地方北部',},
    '101': {lat: '141.291800149006', lon: '43.010872239411', name: '石狩地方中部',},
    '102': {lat: '141.496898327669', lon: '42.8401853638524', name: '石狩地方南部',},
    '105': {lat: '140.227924212031', lon: '42.2715261571357', name: '渡島地方北部',},
    '106': {lat: '140.730104639953', lon: '41.9171303977866', name: '渡島地方東部',},
    '107': {lat: '140.250720331631', lon: '41.5890677088811', name: '渡島地方西部',},
    '110': {lat: '140.117224870458', lon: '42.1200892176946', name: '檜山地方',},
    '115': {lat: '140.766313140274', lon: '43.1570832606841', name: '後志地方北部',},
    '116': {lat: '140.848074079286', lon: '42.8279967803352', name: '後志地方東部',},
    '117': {lat: '140.381809567057', lon: '42.8212795958583', name: '後志地方西部',},
    '119': {lat: '139.473175204362', lon: '42.1553384492168', name: '北海道奥尻島',},
    '120': {lat: '142.003884974433', lon: '43.8088241231416', name: '空知地方北部',},
    '121': {lat: '141.982748253998', lon: '43.510911886567', name: '空知地方中部',},
    '122': {lat: '141.912806597305', lon: '43.1340267466936', name: '空知地方南部',},
    '125': {lat: '142.392451316326', lon: '44.3385114570841', name: '上川地方北部',},
    '126': {lat: '142.644551805745', lon: '43.735583365414', name: '上川地方中部',},
    '127': {lat: '142.504343797753', lon: '43.2002642741056', name: '上川地方南部',},
    '130': {lat: '141.878134955653', lon: '44.4989700095592', name: '留萌地方中北部',},
    '131': {lat: '141.733774434506', lon: '43.9417545962386', name: '留萌地方南部',},
    '135': {lat: '141.918210986196', lon: '45.1894445178067', name: '宗谷地方北部',},
    '136': {lat: '142.43855171702', lon: '44.8665568352299', name: '宗谷地方南部',},
    '139': {lat: '141.166627699514', lon: '45.2387861660525', name: '北海道利尻礼文',},
    '140': {lat: '144.382103894481', lon: '43.8152965753998', name: '網走地方',},
    '141': {lat: '143.673887997429', lon: '43.8226200374306', name: '北見地方',},
    '142': {lat: '143.183999955972', lon: '44.1637059557543', name: '紋別地方',},
    '145': {lat: '140.894124905183', lon: '42.613359798762', name: '胆振地方西部',},
    '146': {lat: '141.697396642325', lon: '42.6805610965227', name: '胆振地方中東部',},
    '150': {lat: '142.406748749235', lon: '42.7170038822428', name: '日高地方西部',},
    '151': {lat: '142.58710610633', lon: '42.4684979347206', name: '日高地方中部',},
    '152': {lat: '142.999868946709', lon: '42.2081311544082', name: '日高地方東部',},
    '155': {lat: '143.2988585723', lon: '43.3665628834425', name: '十勝地方北部',},
    '156': {lat: '143.296318802107', lon: '42.9092933852102', name: '十勝地方中部',},
    '157': {lat: '143.153859068292', lon: '42.4845011298408', name: '十勝地方南部',},
    '160': {lat: '144.399883448184', lon: '43.5472480898255', name: '釧路地方北部',},
    '161': {lat: '144.390527256347', lon: '43.180280482733', name: '釧路地方中南部',},
    '165': {lat: '144.960978939025', lon: '43.7457962290942', name: '根室地方北部',},
    '166': {lat: '145.017145856032', lon: '43.3921494419389', name: '根室地方中部',},
    '167': {lat: '145.585475423304', lon: '43.3154699204573', name: '根室地方南部',},
    '200': {lat: '140.602759340444', lon: '40.9012879819584', name: '青森県津軽北部',},
    '201': {lat: '140.355676664483', lon: '40.5837111506307', name: '青森県津軽南部',},
    '202': {lat: '141.217603896412', lon: '40.6162098596363', name: '青森県三八上北',},
    '203': {lat: '141.077901041411', lon: '41.3095280542848', name: '青森県下北',},
    '210': {lat: '141.720190761799', lon: '39.8488708107972', name: '岩手県沿岸北部',},
    '211': {lat: '141.702753491058', lon: '39.2071220069916', name: '岩手県沿岸南部',},
    '212': {lat: '141.183482398172', lon: '39.931554542287', name: '岩手県内陸北部',},
    '213': {lat: '141.160891785618', lon: '39.2215346022004', name: '岩手県内陸南部',},
    '220': {lat: '141.022771333641', lon: '38.7081798510326', name: '宮城県北部',},
    '221': {lat: '140.661089277841', lon: '38.0409381021126', name: '宮城県南部',},
    '222': {lat: '141.004064365124', lon: '38.3899877375334', name: '宮城県中部',},
    '230': {lat: '140.096455999147', lon: '40.1200513403522', name: '秋田県沿岸北部',},
    '231': {lat: '140.171307132117', lon: '39.4444677774327', name: '秋田県沿岸南部',},
    '232': {lat: '140.578371768009', lon: '40.169818598738', name: '秋田県内陸北部',},
    '233': {lat: '140.555936110668', lon: '39.4107479536497', name: '秋田県内陸南部',},
    '240': {lat: '139.885451803039', lon: '38.7268035929364', name: '山形県庄内',},
    '241': {lat: '140.295120305627', lon: '38.7924891508531', name: '山形県最上',},
    '242': {lat: '140.279056046712', lon: '38.3859722184277', name: '山形県村山',},
    '243': {lat: '139.976229298984', lon: '37.9990598165106', name: '山形県置賜',},
    '250': {lat: '140.412029876442', lon: '37.3914691547508', name: '福島県中通り',},
    '251': {lat: '140.838009636233', lon: '37.3509163241567', name: '福島県浜通り',},
    '252': {lat: '139.696186888682', lon: '37.3884896876914', name: '福島県会津',},
    '300': {lat: '140.4501572932', lon: '36.5650203041214', name: '茨城県北部',},
    '301': {lat: '140.201946458283', lon: '36.0932846746818', name: '茨城県南部',},
    '310': {lat: '139.796845705343', lon: '36.8824768612142', name: '栃木県北部',},
    '311': {lat: '139.834443306022', lon: '36.512030461272', name: '栃木県南部',},
    '320': {lat: '138.928782969845', lon: '36.6945826617991', name: '群馬県北部',},
    '321': {lat: '139.031683822158', lon: '36.3350541464469', name: '群馬県南部',},
    '330': {lat: '139.362415936756', lon: '36.120612876943', name: '埼玉県北部',},
    '331': {lat: '139.545329395159', lon: '35.9073583025148', name: '埼玉県南部',},
    '332': {lat: '138.960967734764', lon: '35.9859328237761', name: '埼玉県秩父',},
    '340': {lat: '140.471172440167', lon: '35.651395253314', name: '千葉県北東部',},
    '341': {lat: '140.134108404433', lon: '35.6937245250665', name: '千葉県北西部',},
    '342': {lat: '140.046035650559', lon: '35.203428130897', name: '千葉県南部',},
    '350': {lat: '139.735181991436', lon: '35.6910145729301', name: '東京都２３区',},
    '351': {lat: '139.404014712941', lon: '35.676657079624', name: '東京都多摩東部',},
    '352': {lat: '139.133267741272', lon: '35.7841008782466', name: '東京都多摩西部',},
    '354': {lat: '139.14756016141', lon: '34.2141240116488', name: '神津島',},
    '355': {lat: '139.398860680118', lon: '34.737504801755', name: '伊豆大島',},
    '356': {lat: '139.261953719004', lon: '34.3908705243122', name: '新島',},
    '357': {lat: '139.543209588378', lon: '34.0281970490155', name: '三宅島',},
    '358': {lat: '139.791238765374', lon: '33.0582036184704', name: '八丈島',},
    '359': {lat: '142.005446132563', lon: '26.4684789419563', name: '小笠原',},
    '360': {lat: '139.541830262692', lon: '35.4158798516042', name: '神奈川県東部',},
    '361': {lat: '139.170065099832', lon: '35.4187572372285', name: '神奈川県西部',},
    '370': {lat: '138.153987349162', lon: '37.028577309026', name: '新潟県上越',},
    '371': {lat: '138.885591560404', lon: '37.2523218878926', name: '新潟県中越',},
    '372': {lat: '139.396426040876', lon: '37.9351085765371', name: '新潟県下越',},
    '375': {lat: '138.389834987216', lon: '38.0443952706501', name: '新潟県佐渡',},
    '380': {lat: '137.437080599991', lon: '36.6540191718457', name: '富山県東部',},
    '381': {lat: '136.942745221795', lon: '36.6116154042673', name: '富山県西部',},
    '390': {lat: '136.948180718148', lon: '37.2064867460047', name: '石川県能登',},
    '391': {lat: '136.609662359906', lon: '36.3778009761394', name: '石川県加賀',},
    '400': {lat: '136.361479635618', lon: '35.9656984036161', name: '福井県嶺北',},
    '401': {lat: '135.839517060097', lon: '35.5232068049401', name: '福井県嶺南',},
    '411': {lat: '138.493498877733', lon: '35.6343864344763', name: '山梨県中・西部',},
    '412': {lat: '138.883889021463', lon: '35.5700482506783', name: '山梨県東部・富士五湖',},
    '420': {lat: '138.150078155994', lon: '36.6881921251618', name: '長野県北部',},
    '421': {lat: '138.169651115476', lon: '36.1891456600816', name: '長野県中部',},
    '422': {lat: '137.82736831621', lon: '35.654790923255', name: '長野県南部',},
    '430': {lat: '137.226141814707', lon: '36.1187019703343', name: '岐阜県飛騨',},
    '431': {lat: '137.316761509708', lon: '35.4816794817731', name: '岐阜県美濃東部',},
    '432': {lat: '136.719663959301', lon: '35.6069261648036', name: '岐阜県美濃中西部',},
    '440': {lat: '138.938865846631', lon: '34.8745640375043', name: '静岡県伊豆',},
    '441': {lat: '138.771488626138', lon: '35.2402420829625', name: '静岡県東部',},
    '442': {lat: '138.238197712947', lon: '35.1039139770262', name: '静岡県中部',},
    '443': {lat: '137.853989125771', lon: '34.8836462400842', name: '静岡県西部',},
    '450': {lat: '137.485860953082', lon: '34.9312735856154', name: '愛知県東部',},
    '451': {lat: '137.073328534043', lon: '35.0894580120775', name: '愛知県西部',},
    '460': {lat: '136.526626961888', lon: '35.0047600275823', name: '三重県北部',},
    '461': {lat: '136.313318480575', lon: '34.6191734898224', name: '三重県中部',},
    '462': {lat: '136.371820296006', lon: '34.213724255505', name: '三重県南部',},
    '500': {lat: '136.165278079797', lon: '35.3900869659917', name: '滋賀県北部',},
    '501': {lat: '136.104847445449', lon: '35.0456639623281', name: '滋賀県南部',},
    '510': {lat: '135.184751464577', lon: '35.46787882351', name: '京都府北部',},
    '511': {lat: '135.65562115477', lon: '35.0789732223378', name: '京都府南部',},
    '520': {lat: '135.548853115561', lon: '34.783462719498', name: '大阪府北部',},
    '521': {lat: '135.455666991985', lon: '34.4415819650787', name: '大阪府南部',},
    '530': {lat: '134.71872293536', lon: '35.4408410901881', name: '兵庫県北部',},
    '531': {lat: '135.099406804436', lon: '34.9317329074819', name: '兵庫県南東部',},
    '532': {lat: '134.553780088888', lon: '34.9963324958315', name: '兵庫県南西部',},
    '535': {lat: '134.838411125225', lon: '34.3621637869522', name: '兵庫県淡路島',},
    '540': {lat: '135.868735482575', lon: '34.3192656265881', name: '奈良県',},
    '550': {lat: '135.3608210494', lon: '34.1028777946241', name: '和歌山県北部',},
    '551': {lat: '135.656947155252', lon: '33.726110390324', name: '和歌山県南部',},
    '560': {lat: '134.24926000843', lon: '35.3918635375182', name: '鳥取県東部',},
    '562': {lat: '133.789229650776', lon: '35.4044079729083', name: '鳥取県中部',},
    '563': {lat: '133.386845026069', lon: '35.2994577316796', name: '鳥取県西部',},
    '570': {lat: '132.951146669834', lon: '35.2992242948002', name: '島根県東部',},
    '571': {lat: '132.192509559817', lon: '34.7928361651109', name: '島根県西部',},
    '575': {lat: '133.208945191763', lon: '36.2013585892796', name: '島根県隠岐',},
    '580': {lat: '133.823930457215', lon: '35.0926200808239', name: '岡山県北部',},
    '581': {lat: '133.802434935664', lon: '34.7162121935879', name: '岡山県南部',},
    '590': {lat: '132.765038747369', lon: '34.7991919297154', name: '広島県北部',},
    '591': {lat: '133.169466482037', lon: '34.5591852337011', name: '広島県南東部',},
    '592': {lat: '132.518452780871', lon: '34.3973239449629', name: '広島県南西部',},
    '600': {lat: '134.155924755563', lon: '34.0127123218254', name: '徳島県北部',},
    '601': {lat: '134.365503868782', lon: '33.786975641433', name: '徳島県南部',},
    '610': {lat: '134.167233844802', lon: '34.3007139401047', name: '香川県東部',},
    '611': {lat: '133.817468763363', lon: '34.1906564629378', name: '香川県西部',},
    '620': {lat: '133.220443392779', lon: '33.9500060023073', name: '愛媛県東予',},
    '621': {lat: '132.869283566924', lon: '33.7395076842639', name: '愛媛県中予',},
    '622': {lat: '132.610302944072', lon: '33.3472717034619', name: '愛媛県南予',},
    '630': {lat: '134.065073389848', lon: '33.5201666208914', name: '高知県東部',},
    '631': {lat: '133.501258893035', lon: '33.6512155360333', name: '高知県中部',},
    '632': {lat: '132.935115295384', lon: '33.133110128076', name: '高知県西部',},
    '700': {lat: '131.359776226827', lon: '34.3572476995743', name: '山口県北部',},
    '702': {lat: '131.082290946589', lon: '34.1223591161337', name: '山口県西部',},
    '703': {lat: '132.089922630929', lon: '34.1095644130935', name: '山口県東部',},
    '704': {lat: '131.673551454039', lon: '34.1800151405053', name: '山口県中部',},
    '710': {lat: '130.403935574232', lon: '33.5952497614343', name: '福岡県福岡',},
    '711': {lat: '130.908182834785', lon: '33.741810156755', name: '福岡県北九州',},
    '712': {lat: '130.73968769485', lon: '33.6260119930602', name: '福岡県筑豊',},
    '713': {lat: '130.636383954678', lon: '33.2675430810854', name: '福岡県筑後',},
    '720': {lat: '129.948976438451', lon: '33.3679017829721', name: '佐賀県北部',},
    '721': {lat: '130.202283894043', lon: '33.2461579827258', name: '佐賀県南部',},
    '730': {lat: '129.696488221909', lon: '33.2292689757298', name: '長崎県北部',},
    '731': {lat: '129.881495729514', lon: '32.8706410511579', name: '長崎県南西部',},
    '732': {lat: '130.257068659466', lon: '32.745846722548', name: '長崎県島原半島',},
    '735': {lat: '129.32597991825', lon: '34.4084515600988', name: '長崎県対馬',},
    '736': {lat: '129.716691163743', lon: '33.7855297970237', name: '長崎県壱岐',},
    '737': {lat: '128.886870310454', lon: '32.818834297997', name: '長崎県五島',},
    '740': {lat: '131.108361031715', lon: '32.9619259755635', name: '熊本県阿蘇',},
    '741': {lat: '130.784193436199', lon: '32.7626764454036', name: '熊本県熊本',},
    '742': {lat: '130.847453124349', lon: '32.2823561048014', name: '熊本県球磨',},
    '743': {lat: '130.287882170458', lon: '32.3538263913408', name: '熊本県天草・芦北',},
    '750': {lat: '131.359900066464', lon: '33.4988415016572', name: '大分県北部',},
    '751': {lat: '131.583987201979', lon: '33.2228447448591', name: '大分県中部',},
    '752': {lat: '131.670221607535', lon: '32.9206720136167', name: '大分県南部',},
    '753': {lat: '131.133437868809', lon: '33.1772178549274', name: '大分県西部',},
    '760': {lat: '131.521245562521', lon: '32.4260541648634', name: '宮崎県北部平野部',},
    '761': {lat: '131.26564109005', lon: '32.5122652343594', name: '宮崎県北部山沿い',},
    '762': {lat: '131.319831819666', lon: '31.7648845865247', name: '宮崎県南部平野部',},
    '763': {lat: '131.029034121253', lon: '31.924251908024', name: '宮崎県南部山沿い',},
    '770': {lat: '130.484942719855', lon: '31.7496641914499', name: '鹿児島県薩摩',},
    '771': {lat: '130.924936450357', lon: '31.4208972338992', name: '鹿児島県大隅',},
    '774': {lat: '129.712994312664', lon: '29.6888031620734', name: '鹿児島県十島村',},
    '775': {lat: '129.786634664733', lon: '31.755201316317', name: '鹿児島県甑島',},
    '776': {lat: '130.918494282116', lon: '30.5980929866606', name: '鹿児島県種子島',},
    '777': {lat: '130.501382304569', lon: '30.346878132117', name: '鹿児島県屋久島',},
    '778': {lat: '129.439179108493', lon: '28.2881614692973', name: '鹿児島県奄美北部',},
    '779': {lat: '128.829035604575', lon: '27.6311862243228', name: '鹿児島県奄美南部',},
    '800': {lat: '128.058172038374', lon: '26.6554705574845', name: '沖縄県本島北部',},
    '801': {lat: '127.732601148849', lon: '26.2609127490052', name: '沖縄県本島中南部',},
    '802': {lat: '126.83288263237', lon: '26.4106427459504', name: '沖縄県久米島',},
    '803': {lat: '131.258912306859', lon: '25.834855523386', name: '沖縄県大東島',},
    '804': {lat: '125.242722844898', lon: '24.7741858594093', name: '沖縄県宮古島',},
    '805': {lat: '124.188763379481', lon: '24.4656012809041', name: '沖縄県石垣島',},
    '806': {lat: '122.988996964954', lon: '24.4553666704242', name: '沖縄県与那国島',},
    '807': {lat: '123.82817843395', lon: '24.3219449294693', name: '沖縄県西表島',},
  };

  return positionData[code];
}

// 細分区域のコードから緯度経度を返す
export function distlic(code: string): number[] {
    const metaData: Data = positionDistlic(code);
    if (typeof metaData != 'undefined'){
      const lon = parseFloat(metaData.lon);
      const lat = parseFloat(metaData.lat);
      if (typeof lat != 'undefined' && typeof lon != 'undefined'){
        return [lon, lat];
      }
    }
    return [];
}
