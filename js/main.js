
// Переменные
const mapSW = [0, 8192],
    mapNE = [8192, 0] ;
//Иницивлизация карты
let map = L.map('map', {attributionControl: false});
// Её стартовые координаты и уровень Зума
    map.setView([0, 0], 1);



// Добавляем тайлы на карту
// L.tileLayer('https://s.rsg.sc/sc/images/games/GTAV/map/print/{z}/{x}/{y}.jpg', {
    L.tileLayer('./img/GTAV-HD-MAP-atlas/{z}-{x}-{y}.jpg', {
        minZoom: 1,
        maxZoom: 5,
        continuousWorld: false,
        noWrap: true,
        crs: L.CRS.Simple,
        attribution: 'Rockstar Games'
    }).addTo(map);

// Карта всегда будет в области просмотра
map.setMaxBounds(new L.LatLngBounds(
     map.unproject(mapSW,  map.getMaxZoom()),
     map.unproject(mapNE,  map.getMaxZoom()),
));




let refmarker = L.marker(map.unproject([1500, 1500], map.getMaxZoom()),{
    draggable: true,
}).addTo(map)
refmarker.bindPopup('Проводник')



refmarker.on('dragend', function(e){
    // alert(marker.getLatLng().toString());
    refmarker.getPopup().setContent('Координаты: ' + refmarker.getLatLng().toString() + '<br />'
    + 'Пиксели: ' + map.project(refmarker.getLatLng(), map.getMaxZoom().toString()))
    .openOn(map);
});

// При нажатии на карту popup выводит координаты
// let popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent('Координаты: ' + map.project(popup.getLatLng(), map.getMaxZoom().toString()))
//         .openOn(map);
// }

// map.on('click', onMapClick);

// Добавляем Маркеры и Попапы


// Иконки-Маркеров
let barbershop = L.icon({
    iconUrl:'./../img/barber-shop.png',
    iconSize: [30, 30],
    // iconAncor: [50, 50]
})

let triathlon = L.icon({
    iconUrl:'./../img/Triathlon-Icon.webp',
    iconSize: [30, 30]
})

let customShop = L.icon({
    iconUrl:'./../img/custom-shop.png',
    iconSize: [30, 30]
})




// let monkeyMosaic = L.icon({
//     iconUrl:'./../img/icons/monkey-mosaic.svg',
//     iconSize: [30, 30]
// })


function addMonkeyIcon (feature, latlng) {
    let monkeyMosaic = L.icon({
      iconUrl: './../img/icons/monkey-mosaic.svg',
      iconSize: [30, 30], // width and height of the image in pixels
    //   shadowUrl: 'my-icon.png',
    //   shadowSize:   [35, 20], // width, height of optional shadow image
    //   iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
    //   shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
    //   popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    })
    return L.marker(latlng, { icon: monkeyMosaic })
  }

 function addLetterIcon (feature, latlng) {
     let lettersScrap = new L.Icon({
         iconSize: [30, 30],
         iconUrl: './../img/icons/letter-scrap.svg',    
     })
     return L.marker(latlng, {icon: lettersScrap})
 }
 
 // Отображаем маркеры geoJSON
 
 // Обезьяна Мозаика
 let monkeyMarkers = L.geoJSON(monkey_data,{
     //Заменяем иконку маркера
     pointToLayer: addMonkeyIcon,
     //Добавляем функцию для всплывающего окнаs
     onEachFeature: yourOnEachFeatureFunction,
     //Меняем местами X Y (если это требуется)
     coordsToLatLng: function (coords) {
         //                    latitude , longitude
         //return new L.LatLng(coords[1], coords[0]); //Normal behavior
         return new L.LatLng(coords[0], coords[1]);
        },
    })
// Обрывки письма
let letterMarkers = L.geoJSON(letters_data,{
    //Заменяем иконку маркера
    pointToLayer: addLetterIcon,
    //Добавляем функцию для всплывающего окнаs
    onEachFeature: yourOnEachFeatureFunction,
    //Меняем местами X Y (если это требуется)
    coordsToLatLng: function (coords) {
        //                    latitude , longitude
        //return new L.LatLng(coords[1], coords[0]); //Normal behavior
        return new L.LatLng(coords[0], coords[1]);
    },
})
    
    function yourOnEachFeatureFunction(feature, layer){
        let { id, name, img, imgBig, descr} = feature.properties
        if (name) {
            layer.bindPopup(`<a href="${imgBig}" target="_blank">
                                <img style="width: 301px" src=${img}></br>
                                    ${name}
                             </a></br>
                                ${descr}
                            </br>
            `)
            // <div class="button-wrapper">
            //     <button class="button-wrapper__btn" data-id="${id}" onclick="complete(${id})">Посетить</button>
            // </div>
            // ${feature.geometry.coordinates}
        }
    }
    
    // Маркеры
    //Барбершоп
    let marker1 = L.marker(map.unproject([5031, 3071], map.getMaxZoom()),{icon:barbershop})
    .bindPopup('Парикмахерская в "Sandy Shores"')
    let marker2 = L.marker(map.unproject([3572, 1419], map.getMaxZoom()),{icon:barbershop})
    .bindPopup('Парикмахерская в "Paleto Bay"')
    let marker3 = L.marker(map.unproject([3214, 5643], map.getMaxZoom()),{icon:barbershop})
    .bindPopup('Парикмахерская в "Rockford Hills"')
    let marker4 = L.marker(map.unproject([3728, 5626], map.getMaxZoom()),{icon:barbershop})
    .bindPopup('Парикмахерская в "Vinewood"')
    let marker5 = L.marker(map.unproject([2912, 6260], map.getMaxZoom()),{icon:barbershop})
    .bindPopup('Парикмахерская в "Vespucci Beach"')
    let marker6 = L.marker(map.unproject([4552, 5851], map.getMaxZoom()),{icon:barbershop})
    .bindPopup('Парикмахерская в районе "Mirror Park"')
    let marker7 = L.marker(map.unproject([3847, 6654], map.getMaxZoom()),{icon:barbershop})
    .bindPopup('Парикмахерская в "South Los Santos"')
    
    //Триатлон
    let marker8 = L.marker(map.unproject([2964, 6903], map.getMaxZoom()),{icon:triathlon})
    let marker9 = L.marker(map.unproject([4810, 3008], map.getMaxZoom()),{icon:triathlon})
    let marker10 = L.marker(map.unproject([5362, 2671], map.getMaxZoom()),{icon:triathlon})
    let marker16 = L.marker(map.unproject([2486, 2506], map.getMaxZoom()),{icon:triathlon})
    
    //Автомастерские
    let marker11 = L.marker(map.unproject([3799, 1147], map.getMaxZoom()),{icon:customShop})
    let marker12 = L.marker(map.unproject([4535, 3787], map.getMaxZoom()),{icon:customShop})
    let marker13 = L.marker(map.unproject([3524, 5612], map.getMaxZoom()),{icon:customShop})
    let marker14 = L.marker(map.unproject([4238, 6238], map.getMaxZoom()),{icon:customShop})
    let marker15 = L.marker(map.unproject([3000, 6844], map.getMaxZoom()),{icon:customShop})
    
    // Группы слоев 
    let lg_units = L.layerGroup([marker1, marker2, marker3, marker4, marker5, marker6, marker7])
    let tr_places = L.layerGroup([marker8, marker9, marker10, marker16])
    let cs_places = L.layerGroup([marker11, marker12, marker13, marker14, marker15])
    let monkeys = L.layerGroup([monkeyMarkers])
    let letters = L.layerGroup([letterMarkers]).addTo(map)

    let other = L.layerGroup([lg_units, tr_places, cs_places])
    
    
    // let Basemaps = {
        //     "OSM": osm
        // }
        
        let overlays = {
            // "Парикмахерские" : lg_units,
            // "Автомастерские": cs_places,
            "Обрывки письма": letters,
            "Monkey Mosaic": monkeys,
            "Прочее" : other,
        }
        
        // Добавление Контроль слоев
L.control.layers(null, overlays).addTo(map);