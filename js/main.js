
// Отрисовка списка мест
// СПИСКИ ПРЕДМЕТОВ
// Мозаика обезьяны

function renderData(data) {
    // Создаём обёртку "drop" для данных
    let drop = document.createElement("div")
        drop.classList.add('list-item__dropdown');
    // Создаём элемент "кнопку" для Dropdown
    let placesName = document.createElement("div")
        placesName.classList.add('list-item-name');
        // placesName.classList.add('active');
    // Создаём обёртку ul для будущего списка li
    let placesList = document.createElement("ul")
        placesList.classList.add('list-item')       
        // Перебираем данные и отрисовываем их внутри обёртки "drop"
        data.features.forEach((element) => {
        let parent = document.querySelector('.list-item__main')
        // Получаем имя кнопки
        let headerPlace = element.properties.name
        headerPlace = headerPlace.slice(0, -3)
        // Добавляем кнопке полученное имя плюс "стрелочку"
        placesName.innerHTML = headerPlace + '<i class="fa fa-angle-down" aria-hidden="true"></i>'
        
        listHtml = `
        <li class="list-item__item">
        <a class="list-item__link" href="#" onclick='findPlace(${JSON.stringify(element.geometry.coordinates)})'>${element.properties.name} </a>
        </li>
        `
        // добавляем Кнопку "Dropdown" в начало обёртки drop
        drop.prepend(placesName);
        // Добавляем созданные "li" (отрисованную вёрстку списка) в "ul"
        placesList.insertAdjacentHTML('beforeend', listHtml)
        // добавляем ul со списком мест в обёртку drop
        drop.insertAdjacentElement('beforeend', placesList)
        // Добавляем "drop" в общую "родительскую" обёртку всех "выпадающих списков"
        parent.insertAdjacentElement('beforeend', drop)
    });

}

renderData(monkey_data)
renderData(letters_data)
renderData(gameCards_data)

const list_btn = document.querySelector('#listViewBtn');
const list_viewWrapper = document.querySelector('.list-item__main');
const list_viewDropdown = document.querySelector('.list-item-name');
const list_view = document.querySelectorAll('.list-item');
const listViewClose = document.querySelector('.listViewClose')

//Нажатие по кнопкам Dropdown общего списка локаций
list_viewWrapper.addEventListener('click', e => {
    let target = e.target;
    let arr = target.querySelector('i');
    let parent = target.parentNode
    let list = target.nextElementSibling
    let list2 = parent.nextElementSibling
    //Нажатие по кнопке Dropdown
    if (target && target.className === 'list-item-name') {
        list.classList.add('show');
        target.classList.add('active');
        // parent.classList.add('active');
        arr.classList.add('rotate');
    }
    else if (target && target.className === 'list-item-name active') {
        target.classList.remove('active');
        list.classList.remove('show');
        arr.classList.remove('rotate');
    }
    // Нажатие на стрелку
    if (target && target.className === 'fa fa-angle-down'){
        parent.classList.add('active');
        target.classList.add('rotate')
        list2.classList.add('show');
    } else if (target && target.className === 'fa fa-angle-down rotate'){
        parent.classList.remove('active');
        target.classList.remove('rotate')
        list2.classList.remove('show');
    }
});


list_btn.addEventListener('click', () => {
    // Кнопка СПИСОК Активна/Не активна
    list_btn.classList.toggle('active');
    // Показать/Скрыть Компонент СПИСКА МЕСТ
    list_viewWrapper.classList.toggle('show')
    // Показать/Скрыть кнопку ЗАКРЫТЬ
    listViewClose.classList.toggle('show')        
})

// list_viewDropdown.forEach(el => {
//     el.addEventListener('click', (e)=>{
//         let currentBtn = e.currentTarget;
//         let drop = currentBtn.nextElementSibling;
//         let arr = currentBtn.querySelector('i');
//         currentBtn.classList.toggle('active');
//         drop.classList.toggle('show');
//         arr.classList.toggle('rotate');
//     })
// })

listViewClose.addEventListener('click', () => {
    list_btn.classList.remove('active');
    list_viewWrapper.classList.remove('show')
    listViewClose.classList.remove('show')

})


// Переменные
const mapSW = [0, 8192],
    mapNE = [8192, 0];
//Иницивлизация карты
let map = L.map('map', {
    attributionControl: false
});
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
    map.unproject(mapSW, map.getMaxZoom()),
    map.unproject(mapNE, map.getMaxZoom()),
));




// let refmarker = L.marker(map.unproject([1500, 1500], map.getMaxZoom()),{
//     draggable: true,
// }).addTo(map)
// refmarker.bindPopup('Проводник')


// refmarker.on('dragend', function(e){
//     // alert(marker.getLatLng().toString());
//     refmarker.getPopup().setContent('Координаты: ' + refmarker.getLatLng().toString() + '<br />'
//     + 'Пиксели: ' + map.project(refmarker.getLatLng(), map.getMaxZoom().toString()))
//     .openOn(map);
// });

// map.on('click', function (e) {
//     let massive = [];
//         newMarker = L.marker([e.latlng.lat, e.latlng.lng], {
//             draggable: true,
//         }).addTo(map);
//         newMarker.bindPopup('Координаты: ' + newMarker.getLatLng().toString()).openPopup()
//         // massive.push(newMarker.getLatLng());
//         // console.log(massive);
//         // console.log(newMarker);
//         newMarker.on('dragend', (e)=>{
//             newMarker.getPopup().setContent('Координаты: ' + newMarker.getLatLng().toString())
//             .openOn(map)
//         })
//         return newMarker.getLatLng()
// })

// LEAFLET.DRAW
drawnFeatures = new L.FeatureGroup()
map.addLayer(drawnFeatures)

let drawControl = new L.Control.Draw({
    draw: {
        polygon: false,
        circle: false,
        rectangle: false,
        polyline: false,
    },
    edit: {
        featureGroup: drawnFeatures,
        remove: false
    }
})
// Добавление панели на карту
// map.addControl(drawControl)



// Рисование на карте 
map.on("draw:created", function (e) {
    let type = e.layerType;
    let layer = e.layer;
    //  console.log(layer.toGeoJSON());
    layer.bindPopup(`<p>${JSON.stringify(layer.toGeoJSON())}</p>`)
    drawnFeatures.addLayer(layer)
    console.log(drawnFeatures.toGeoJSON());
    let places = drawnFeatures.toGeoJSON();
    let convertData = JSON.stringify(places)
    // Экспорт координат в файл
    var data = new Blob([convertData], {
        type: 'application/json'
    });
    var url = window.URL.createObjectURL(data);
    //  console.log(data); 
    document.getElementById('export').href = url;


})

// Добавляем Маркеры и Попапы


// Иконки-Маркеров
let barbershop = L.icon({
    iconUrl: './../img/barber-shop.png',
    iconSize: [30, 30],
    // iconAncor: [50, 50]
})

let triathlon = L.icon({
    iconUrl: './../img/Triathlon-Icon.webp',
    iconSize: [30, 30]
})

let customShop = L.icon({
    iconUrl: './../img/custom-shop.png',
    iconSize: [30, 30]
})


// Добавление Маркера - Мозаика обезьяны
function addMonkeyIcon(feature, latlng) {
    let monkeyMosaic = L.icon({
        iconUrl: './../img/icons/monkey-mosaic.svg',
        iconSize: [30, 30], // width and height of the image in pixels
        //   shadowUrl: 'my-icon.png',
        //   shadowSize:   [35, 20], // width, height of optional shadow image
        //   iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
        //   shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
        //   popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    })
    return L.marker(latlng, {
        icon: monkeyMosaic
    })
}
// Добавление Маркера - Обрывки письма
function addLetterIcon(feature, latlng) {
    let lettersScrap = new L.Icon({
        iconSize: [30, 30],
        iconUrl: './../img/icons/letter-scrap.svg',
    })
    return L.marker(latlng, {
        icon: lettersScrap
    })
}
// Добавление Маркера - Игральные карты
function addGameCardsIcon(feature, latlng) {
    let gameCard = new L.Icon({
        iconSize: [30, 30],
        iconUrl: './../img/icons/game-card.svg',
    })
    return L.marker(latlng, {
        icon: gameCard
    })
}

// Отображаем маркеры geoJSON

// Мозаика обезьяны
let monkeyMarkers = L.geoJSON(monkey_data, {
    //Заменяем иконку маркера
    pointToLayer: addMonkeyIcon,
    //Добавляем функцию для всплывающего окна
    onEachFeature: yourOnEachFeatureFunction,
    //Меняем местами X Y (если это требуется)
    //  coordsToLatLng: function (coords) {
    //      //                    latitude , longitude
    //      //return new L.LatLng(coords[1], coords[0]); //Normal behavior
    //      return new L.LatLng(coords[1], coords[0]);
    //     },

})
// Обрывки письма
let letterMarkers = L.geoJSON(letters_data, {
    //Заменяем иконку маркера
    pointToLayer: addLetterIcon,
    //Добавляем функцию для всплывающего окна
    onEachFeature: yourOnEachFeatureFunction,
    //Меняем местами X Y (если это требуется)
    // coordsToLatLng: function (coords) {
    //     //                    latitude , longitude
    //     //return new L.LatLng(coords[1], coords[0]); //Normal behavior
    //     return new L.LatLng(coords[0], coords[1]);
    // },
})
// Игральные карты
let gamecardsMarkers = L.geoJSON(gameCards_data, {
    //Заменяем иконку маркера
    pointToLayer: addGameCardsIcon,
    //Добавляем функцию для всплывающего окна
    onEachFeature: yourOnEachFeatureFunction,
    //Меняем местами X Y (если это требуется)
    // coordsToLatLng: function (coords) {
    //     //                    latitude , longitude
    //     //return new L.LatLng(coords[1], coords[0]); //Normal behavior
    //     return new L.LatLng(coords[0], coords[1]);
    // },
})

function yourOnEachFeatureFunction(feature, layer) {
    let {
        id,
        name,
        img,
        imgBig,
        descr
    } = feature.properties
    // console.log(layer);
    if (!descr) {
        descr = name
        // descr = (descr.slice(0, -3))
        descr = "<i>Коллекционные предметы</i> - <strong>GTA5</strong>"
        // console.log(descr);

    }
    // console.log(feature);
    if (name) {
        layer.bindPopup(`<a href="${imgBig}" target="_blank">
                                <img style="width: 301px" src=${img}></br>
                                    ${name}
                             </a></br>
                                ${descr}
                            </br>
                            <div class="button-wrapper">
                                <button class="button-wrapper__btn" data-id="${id}" onclick='complete(${JSON.stringify(feature.properties)})'>Посетить</button>
                            </div>
                            
            `)
        // ${feature.geometry.coordinates}
    }
    // let jsonLayer = JSON.stringify(layer);

    // Отрисовка списка мест
    // let listHtml = document.querySelector('.list-item')

    // listHtml.innerHTML += `
    //     <div class="list-item__wrapper">
    //         <a class="list-item__item" href="#" onclick='findPlace(${JSON.stringify(feature.geometry.coordinates)})'>${feature.properties.name}</a>

    //     </div>
    // `
    // <input class="list-item__checkbox" type="checkbox" id="done" name="done">
    // console.log(feature.geometry.coordinates.length); 
}

function complete(item) {
    let {
        id,
        name,
        img,
        imgBig,
        descr
    } = item
    console.log('Исследовано ' + name);
    const btnComplete = document.querySelector('.button-wrapper__btn')
    // btnComplete.innerHTML = 'Исследовано'
    btnComplete.classList.toggle('active')
    btnComplete.innerHTML == 'Посетить' ? btnComplete.textContent = 'Исследовано' : btnComplete.textContent = 'Посетить'

}




function findPlace(coords) {
    const listItem = document.querySelectorAll('.list-item__item')

    // Применяем стиль АКТИВНОГО нажатого элемента 
    listItem.forEach(el => {
        el.addEventListener('click', (e) => {
            let currentBtn = e.currentTarget;
            listItem.forEach(el => {
                if (el !== currentBtn) {
                    el.classList.remove('active-list')
                }
            });
            currentBtn.classList.add('active-list')
        })
    });
    map.setView([coords[1], coords[0]], 5);
};


// Маркеры
//Барбершоп
let marker1 = L.marker(map.unproject([5031, 3071], map.getMaxZoom()), {
        icon: barbershop
    })
    .bindPopup('Парикмахерская в "Sandy Shores"')
let marker2 = L.marker(map.unproject([3572, 1419], map.getMaxZoom()), {
        icon: barbershop
    })
    .bindPopup('Парикмахерская в "Paleto Bay"')
let marker3 = L.marker(map.unproject([3214, 5643], map.getMaxZoom()), {
        icon: barbershop
    })
    .bindPopup('Парикмахерская в "Rockford Hills"')
let marker4 = L.marker(map.unproject([3728, 5626], map.getMaxZoom()), {
        icon: barbershop
    })
    .bindPopup('Парикмахерская в "Vinewood"')
let marker5 = L.marker(map.unproject([2912, 6260], map.getMaxZoom()), {
        icon: barbershop
    })
    .bindPopup('Парикмахерская в "Vespucci Beach"')
let marker6 = L.marker(map.unproject([4552, 5851], map.getMaxZoom()), {
        icon: barbershop
    })
    .bindPopup('Парикмахерская в районе "Mirror Park"')
let marker7 = L.marker(map.unproject([3847, 6654], map.getMaxZoom()), {
        icon: barbershop
    })
    .bindPopup('Парикмахерская в "South Los Santos"')

//Триатлон
let marker8 = L.marker(map.unproject([2964, 6903], map.getMaxZoom()), {
    icon: triathlon
})
let marker9 = L.marker(map.unproject([4810, 3008], map.getMaxZoom()), {
    icon: triathlon
})
let marker10 = L.marker(map.unproject([5362, 2671], map.getMaxZoom()), {
    icon: triathlon
})
let marker16 = L.marker(map.unproject([2486, 2506], map.getMaxZoom()), {
    icon: triathlon
})

//Автомастерские
let marker11 = L.marker(map.unproject([3826, 1163], map.getMaxZoom()), {
    icon: customShop
})
let marker12 = L.marker(map.unproject([4535, 3787], map.getMaxZoom()), {
    icon: customShop
})
let marker13 = L.marker(map.unproject([3524, 5612], map.getMaxZoom()), {
    icon: customShop
})
let marker14 = L.marker(map.unproject([4238, 6238], map.getMaxZoom()), {
    icon: customShop
})
let marker15 = L.marker(map.unproject([3000, 6844], map.getMaxZoom()), {
    icon: customShop
})

// Группы слоев 
let lg_units = L.layerGroup([marker1, marker2, marker3, marker4, marker5, marker6, marker7])
let tr_places = L.layerGroup([marker8, marker9, marker10, marker16])
let cs_places = L.layerGroup([marker11, marker12, marker13, marker14, marker15])
let monkeys = L.layerGroup([monkeyMarkers]).addTo(map)
let letters = L.layerGroup([letterMarkers]).addTo(map)
let gamecards = L.layerGroup([gamecardsMarkers]).addTo(map)

let other = L.layerGroup([lg_units, tr_places, cs_places]).addTo(map)

// let Basemaps = {
//     "OSM": osm
// }

let overlays = {
    // "Парикмахерские" : lg_units,
    // "Автомастерские": cs_places,
    "Мозаика обезьяны": monkeys,
    "Обрывки письма": letters,
    "Игральные карты (Online)": gamecards,
    "Прочее": other,
}

// Добавление Контроль слоев
L.control.layers(null, overlays).addTo(map);


// Проверка Панели со слоями ЧЕКБОКСЫ
const formToggle = document.querySelector('.leaflet-control-layers leaflet-control')
const formLayers = document.querySelector('.leaflet-control-layers-overlays')

// const label = formLayers.querySelectorAll('input').nextSibling


checkboxesLS = {}
const form = document.querySelector('.leaflet-control-layers-list')
const LS = localStorage
let checked;    


const formCheckbox = document.querySelectorAll('.leaflet-control-layers-selector')
formLayers.setAttribute('id', `formLayers`)

formCheckbox.forEach((el, i)=>{
    const label = el.nextElementSibling.textContent
    el.setAttribute('id', i+1)
    el.setAttribute('name', label)
    const id = el.getAttribute('id')
    el.setAttribute('onclick', `saveLS(this, ${id})`)
    // console.log(id);
    loadLS(el, id)
    // saveLS(el, id)
})


function saveLS(el, id){
    // console.log(el);
    // LS.setItem(`${id}`, el.checked)
        if (el.checked){
            LS.setItem(`${id}`, true);
            // console.log('Тут происходит запись в ЛС');
        } else {
            LS.setItem(`${id}`, false);
        }
    }
function loadLS(el, id) {
    checked = JSON.parse(LS.getItem(`${id}`))
    if (checked == false){
        el.click()
        el.checked = checked
    }
    // console.log(checked);
    // el.checked = checked
    
}


// Сохранение значений чекбоксов
// form.addEventListener('input', (event)=>{
//     const id = event.target.id 
//     // const name = event.target.name
//     const title = id
//     const checked = event.target.checked
//     checkboxesLS[title] = checked
//     console.log(checkboxesLS)
//     // console.log(checkboxesLS);
//     LS.setItem('checkboxesLS', JSON.stringify(checkboxesLS) )
//     // console.log(event);
// })
// Восстановление значений чекбоксов



// if (LS.getItem('checkboxesLS')) {
//     checkboxesLS = JSON.parse(LS.getItem('checkboxesLS'))
//     let Lslength = Object.keys(checkboxesLS).length
    // for (i = 0; i < Lslength; i++) {
    //     // formCheckbox[i+1].trigger('click')
    //     formCheckbox[i].checked = LS.getItem(checkboxesLS[i] === 'true' ? true : false)
    // }
    
    // console.log(formCheckbox)
    // for (let key in checkboxesLS) {
    //     console.log(key);
    //     if(checkboxesLS.hasOwnProperty(key)){
    //         formCheckbox.forEach((el, i)=>{
    //             el.checked = checkboxesLS[key]
    //             // console.log(el.checked);
    //         })
        //   console.log(`${checkboxesLS[key]}`)
        //   console.log(formCheckbox.checked)
//         }
//       }    
// }

// formCheckbox.forEach((el, i)=>{
//     const label = el.nextElementSibling.textContent

//     // console.log(el);
//     el.setAttribute('name', 'checkbox')
//     console.log(el);

//     el.addEventListener('input', (e)=>{
//         checked = e.target.checked
//         // el.checked = true;
//         // console.log(checkboxesLS);
//         console.log(checked);
//         // const id = Number(checkbox.id)
//     })
// })

