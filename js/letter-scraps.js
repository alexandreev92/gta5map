let letters_data = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            "id": "01",
            "name": "Letter Scrap #1",
            "img": "./../img/letters/1.jpeg",
            "imgBig": "./../img/letters/1.jpeg",
            "descr": "На крыше одного из синих контейнеров в Терминале."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-81.73579, 14.80957]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "id": "02",
            "name": "Letter Scrap #2",
            "img": "./../img/letters/2.jpeg",
            "imgBig": "./../img/letters/2.jpeg",
            "descr": "Находится внутри здания аэропорта, на полу, напротив синих сидений и ступенек."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-80.400915, -45.307617]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "id": "03",
            "name": "Letter Scrap #3",
            "img": "./../img/letters/3.jpeg",
            "imgBig": "./../img/letters/3.jpeg",
            "descr": "Можно найти на лодке Olifantus, вверху, возле рулевой рубки. Сама лодка находится в южном порту."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-80.430149, -17.314453]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "id": "04",
            "name": "Letter Scrap #4",
            "img": "./../img/letters/4.jpeg",
            "imgBig": "./../img/letters/4.jpeg",
            "descr": "Находится на крыше аэропорта, у подножья синей башни. Нужен парашют или вертолет, чтобы туда добраться."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-79.383729, -41.396484]
        }
      },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "05",
//             "name": "Letter Scrap #5",
//             "img": "./../img/letters/5.jpeg",
//             "imgBig": "./../img/letters/5.jpeg",
//             "descr": "Внутри тоннеля, на площадке для обслуживания (которая возле стены), под значком молнии («Высокое напряжение»)"
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-75.072266, 7.294922]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "06",
//             "name": "Letter Scrap #6",
//             "img": "./../img/letters/6.jpeg",
//             "imgBig": "./../img/letters/6.jpeg",
//             "descr": "Находится внутри остатков от автобуса, на свалке в El Burro Heights Murrieta Oil Fields."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-77.012047, 30.541992]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "07",
//             "name": "Letter Scrap #7",
//             "img": "./../img/letters/7.jpeg",
//             "imgBig": "./../img/letters/7.jpeg",
//             "descr": "На заднем крыльце дома на Гроув-Стрит, в Дэвисе."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-82.858844, 21.005859]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "08",
//             "name": "Letter Scrap #8",
//             "img": "./../img/letters/8.jpeg",
//             "imgBig": "./../img/letters/8.jpeg",
//             "descr": "Внутри мусорного бака, стоящего на парковке."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-82.84785, -7.77832]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "09",
//             "name": "Letter Scrap #9",
//             "img": "./../img/letters/9.jpeg",
//             "imgBig": "./../img/letters/9.jpeg",
//             "descr": "Письмо валяется на дне высохшего бассейна, в Веспуччи-Бич."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-77.924794, -25.092773]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "10",
//             "name": "Letter Scrap #10",
//             "img": "./../img/letters/10.jpeg",
//             "imgBig": "./../img/letters/10.jpeg",
//             "descr": "Прячется за кустами, на острове, у восточного побережья Лос-Сантоса."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-80.481418, -38.364258]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "11",
//             "name": "Letter Scrap #11",
//             "img": "./../img/letters/11.jpeg",
//             "imgBig": "./../img/letters/11.jpeg",
//             "descr": "Иконку с обезьяной найдёте в левом верхнем углу контейнера возле Los Santos Customs рядом с Аэропортом."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-76.465486, -48.911133]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "12",
//             "name": "Letter Scrap #12",
//             "img": "./../img/letters/12.jpeg",
//             "imgBig": "./../img/letters/12.jpeg",
//             "descr": "Район La Puerta. В кустах под рекламным щитом Maze Bank Arena."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-71.746097, -28.344727]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "13",
//             "name": "Letter Scrap #13",
//             "img": "./../img/letters/13.jpeg",
//             "imgBig": "./../img/letters/13.jpeg",
//             "descr": "Лезем опять в кусты за стеной недалеко от Puerta Del Sol Marina."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-70.005382, -38.671875]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "14",
//             "name": "Letter Scrap #14",
//             "img": "./../img/letters/14.jpeg",
//             "imgBig": "./../img/letters/14.jpeg",
//             "descr": "На пляже Веспуччи Бич на плите возле спортивной площадки."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-73.201397, -52.075195]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "15",
//             "name": "Letter Scrap #15",
//             "img": "./../img/letters/15.jpeg",
//             "imgBig": "./../img/letters/15.jpeg",
//             "descr": "Осмотрите самую маленькую рампу в скейт-парке Vespucci Canals."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-64.528697, -42.670898]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "16",
//             "name": "Letter Scrap #16",
//             "img": "./../img/letters/16.jpeg",
//             "imgBig": "./../img/letters/16.jpeg",
//             "descr": "За кустом на стене Arcadia Center. Чтобы сделать снимок, подъедьте на авто и заберитесь на крышу."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-64.187117, -17.358398]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "17",
//             "name": "Letter Scrap #17",
//             "img": "./../img/letters/17.jpeg",
//             "imgBig": "./../img/letters/17.jpeg",
//             "descr": "За палаткой бомжа на на северной стороне подземного перехода."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-60.584842, -6.679688]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "18",
//             "name": "Letter Scrap #18",
//             "img": "./../img/letters/18.jpeg",
//             "imgBig": "./../img/letters/18.jpeg",
//             "descr": "Помните миссию Чопа с Франклином и Ламаром? Район La Mesa. Мозаика на вагоне."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-61.543245, 1.625977]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "19",
//             "name": "Letter Scrap #19",
//             "img": "./../img/letters/19.jpeg",
//             "imgBig": "./../img/letters/19.jpeg",
//             "descr": "Взгляните на туалет в Mirror Park."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-63.11521, 18.237305]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "20",
//             "name": "Letter Scrap #20",
//             "img": "./../img/letters/20.jpeg",
//             "imgBig": "./../img/letters/20.jpeg",
//             "descr": "Воспользуйтесь съездом с шоссе в Murrieta Heights и взгляните на стену с граффити."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-70.125479, 17.270508]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "21",
//             "name": "Letter Scrap #21",
//             "img": "./../img/letters/21.jpeg",
//             "imgBig": "./../img/letters/21.jpeg",
//             "descr": "Мозаика прячется под козырьком крыши здания 24-7 в Tataviam Mountains. Знакомое место по одной из миссий за Франклина."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-45.767357, 58.842773]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "22",
//             "name": "Letter Scrap #22",
//             "img": "./../img/letters/22.jpeg",
//             "imgBig": "./../img/letters/22.jpeg",
//             "descr": "На крыше Vinewood Plaza Hotel. Используйте лестницу позади и перепрыгните через вентиляционную трубу."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-50.567791, 1.933594]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "23",
//             "name": "Letter Scrap #23",
//             "img": "./../img/letters/23.jpeg",
//             "imgBig": "./../img/letters/23.jpeg",
//             "descr": "В переулке на углу здания, недалеко от предыдущей мозаики."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-46.618192, -4.833984]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "24",
//             "name": "Letter Scrap #24",
//             "img": "./../img/letters/24.jpeg",
//             "imgBig": "./../img/letters/24.jpeg",
//             "descr": "На крыше между Pink Sandwich и здания WTF! через дорогу от автобусных туров Vinewood Tours."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-49.117442, -12.348633]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "25",
//             "name": "Letter Scrap #25",
//             "img": "./../img/letters/25.jpeg",
//             "imgBig": "./../img/letters/25.jpeg",
//             "descr": "Сверху справа над входом в магазин Hardcore Comic Store."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-48.806003, -19.248047]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "26",
//             "name": "Letter Scrap #26",
//             "img": "./../img/letters/26.jpeg",
//             "imgBig": "./../img/letters/26.jpeg",
//             "descr": "На крыше через дорогу от здания SAGMA. Поднимитесь по лестнице позади магазина кофе."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-53.696129, -28.78418]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "27",
//             "name": "Letter Scrap #27",
//             "img": "./../img/letters/27.jpeg",
//             "imgBig": "./../img/letters/27.jpeg",
//             "descr": "На стене недалеко от выезда с автострады в Rockford Hills."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-60.305035, -29.53125]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "28",
//             "name": "Letter Scrap #28",
//             "img": "./../img/letters/28.jpeg",
//             "imgBig": "./../img/letters/28.jpeg",
//             "descr": "На бетонной скамейке возле большого фонтана."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-55.753037, -44.692383]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "29",
//             "name": "Letter Scrap #29",
//             "img": "./../img/letters/29.jpeg",
//             "imgBig": "./../img/letters/29.jpeg",
//             "descr": "На крыше здания Woody's Autos в Morningwood, что напротив Амму-нации."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-58.882072, -54.84375]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "30",
//             "name": "Letter Scrap #30",
//             "img": "./../img/letters/30.jpeg",
//             "imgBig": "./../img/letters/30.jpeg",
//             "descr": "На лестнице в метро перед банком Maze Bank."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-61.396605, -54.755859]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "31",
//             "name": "Letter Scrap #31",
//             "img": "./../img/letters/31.jpeg",
//             "imgBig": "./../img/letters/31.jpeg",
//             "descr": "Позади ресторана Al Dente в Vespucci Beach."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-66.089439, -54.975586]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "32",
//             "name": "Letter Scrap #32",
//             "img": "./../img/letters/32.jpeg",
//             "imgBig": "./../img/letters/32.jpeg",
//             "descr": "На пирсе внизу левой стороны скамейки."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-69.930255, -67.895508]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "33",
//             "name": "Letter Scrap #33",
//             "img": "./../img/letters/33.jpeg",
//             "imgBig": "./../img/letters/33.jpeg",
//             "descr": "На большой лестнице, которая ведёт к пляжу. Помните фитнес-соревнование Майкла и Мэри-Энн?"
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-59.75492, -70.883789]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "34",
//             "name": "Letter Scrap #34",
//             "img": "./../img/letters/34.jpeg",
//             "imgBig": "./../img/letters/34.jpeg",
//             "descr": "На кладбище позади церкви Hill Valley Church."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-57.328124, -64.423828]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "35",
//             "name": "Letter Scrap #35",
//             "img": "./../img/letters/35.jpeg",
//             "imgBig": "./../img/letters/35.jpeg",
//             "descr": "Осмотрите стену университетского здания рядом с лестницей."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-49.837404, -63.325195]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "36",
//             "name": "Letter Scrap #36",
//             "img": "./../img/letters/36.jpeg",
//             "imgBig": "./../img/letters/36.jpeg",
//             "descr": "Картинка на стене одно из коттеджей в Rockford Hills."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-46.86066, -42.1875]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "37",
//             "name": "Letter Scrap #37",
//             "img": "./../img/letters/37.jpeg",
//             "imgBig": "./../img/letters/37.jpeg",
//             "descr": "В центральной части крыши обсерватории Галилео. Лестницы располагаются по бокам здания."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [-29.916829, -27.46582]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "38",
//             "name": "Letter Scrap #38",
//             "img": "./../img/letters/38.jpeg",
//             "imgBig": "./../img/letters/38.jpeg",
//             "descr": "Спускайтесь под мост Chumash."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [55.924748, -72.421875]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "39",
//             "name": "Letter Scrap #39",
//             "img": "./../img/letters/39.jpeg",
//             "imgBig": "./../img/letters/39.jpeg",
//             "descr": "За магазином Discount Store."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [14.902462, -47.373047]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "40",
//             "name": "Letter Scrap #40",
//             "img": "./../img/letters/40.jpeg",
//             "imgBig": "./../img/letters/40.jpeg",
//             "descr": "Позади здания Animal Ark в пустыне Grand Senora Desert."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [18.147757, 1.186523]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "41",
//             "name": "Letter Scrap #41",
//             "img": "./../img/letters/41.jpeg",
//             "imgBig": "./../img/letters/41.jpeg",
//             "descr": "За зданием, где Тревор встречался с Minute Men."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [33.577927, -4.87793]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "42",
//             "name": "Letter Scrap #42",
//             "img": "./../img/letters/42.jpeg",
//             "imgBig": "./../img/letters/42.jpeg",
//             "descr": "Эта мозаика находится внутри сгоревшего дома через дорогу от «24-7» (где у Тревора была первая Rampage-миссия). Забирайтесь на крышу по полкам, а обратно по фанере возле картинки обезьяны."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [38.513861, 10.986328]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "43",
//             "name": "Letter Scrap #43",
//             "img": "./../img/letters/43.jpeg",
//             "imgBig": "./../img/letters/43.jpeg",
//             "descr": "На втором этаже мотеля Sandy Shores Motel рядом с открытой дверью, за которой ютятся бомжи."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [37.579538, 28.916016]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "44",
//             "name": "Letter Scrap #44",
//             "img": "./../img/letters/44.jpeg",
//             "imgBig": "./../img/letters/44.jpeg",
//             "descr": "На стене гаража за парикмахерской в Sandy Shores."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [41.311002, 40.605469]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "45",
//             "name": "Letter Scrap #45",
//             "img": "./../img/letters/45.jpeg",
//             "imgBig": "./../img/letters/45.jpeg",
//             "descr": "Двигайтесь на кладбище самолётов к центру утилизации. Мозаика на стене рядом с офисом. (Остерегайтесь злую собаку и вооруженных охранников!)"
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [27.098547, 54.580078]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "46",
//             "name": "Letter Scrap #46",
//             "img": "./../img/letters/46.jpeg",
//             "imgBig": "./../img/letters/46.jpeg",
//             "descr": "Картинка с мартышкой на столбе у входа в Humane Labs."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [41.902277, 84.375]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "47",
//             "name": "Letter Scrap #47",
//             "img": "./../img/letters/47.jpeg",
//             "imgBig": "./../img/letters/47.jpeg",
//             "descr": "Обойдите здание супермаркета в Grapeseed."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [60.108828, 35.15625]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "48",
//             "name": "Letter Scrap #48",
//             "img": "./../img/letters/48.jpeg",
//             "imgBig": "./../img/letters/48.jpeg",
//             "descr": "Двигайте дальше по улице от супермаркета к заправке. Мозаику фоткайте за заброшенным домом, который находится через дорогу."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [62.755596, 33.662109]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "49",
//             "name": "Letter Scrap #49",
//             "img": "./../img/letters/49.jpeg",
//             "imgBig": "./../img/letters/49.jpeg",
//             "descr": "В Paleto Bay обойдите магазин Pop's Pills, который стоит сразу за Pay N Spray."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [78.260305, -13.051758]
//         }
//       },
//       {
//         "type": "Feature",
//         "properties": {
//             "id": "50",
//             "name": "Letter Scrap #50",
//             "img": "./../img/letters/50.jpeg",
//             "imgBig": "./../img/letters/50.jpeg",
//             "descr": "Эта мозаика находится за парикмахерской в бухте Палето, через дорогу от курятника."
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [75.431182, -22.192383]
//         }
//       },
]}