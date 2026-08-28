document.addEventListener('DOMContentLoaded', () => {
    const actividades = {
        "CENTRO DE CONVENCIONES MONSEÑOR ANGELELLI": {
            "Lun": ["MUSCULACIÓN: 07:00-13:00", "AEROBICA: 08:00-09:00", "FUNCIONAL: 09:00-10:00", "ATLETISMO: 08:00-13:00", "YOGA: 10:00-11:00", "YOGA: 11:00-12:00", "MUSCULACIÓN: 14:00-22:00", "FUNCIONAL - ZUMBA TONING + STEP: 15:00-16:00", "FUNCIONAL: 16:00-17:00", "AEROBOX: 18:00-19:00", "KARATE DO: 20:00-21:00", "SALSA-BACHATA: 20:00-21:00", "KARATE DO: 21:00-22:00"],
            "Mar": ["MUSCULACIÓN: 07:00-13:00", "PILATES: 08:00-09:00", "STEP DE COMPETICIÓN: 09:00-10:00", "ATLETISMO: 10:00-16:00", "PILATES MATT: 10:00-11:00", "MUSCULACIÓN: 14:00-22:00", "ZUMBA: 15:00-16:00", "FOLCLORE: 17:00-18:00","STRONG: 18:00-19:00", "ZUMBA KIDS 8 A 11 AÑOS - ESGRIMA KIDS 8 A 12 AÑOS - FOLCLORE: 18:00-19:00", "FUNCIONAL: 19:00-20:00", "ZUMBA GOLD: 20:00-21:00", "DEFENSA PERSONAL: 20:00-21:00", "DEFENSA PERSONAL: 21:00-22:00"],
            "Mié": ["MUSCULACIÓN: 07:00-13:00", "STEP: 08:00-09:00", "FUNCIONAL: 09:00-10:00", "ATLETISMO: 08:00-13:00", "PILATES MATT: 10:00-11:00", "MUSCULACIÓN: 14:00-22:00", "FUNCIONAL - ZUMBA TONING + STEP: 15:00-16:00", "FUNCIONAL: 16:00-17:00", "AEROBOX: 18:00-19:00", "FUNCIONAL: 19:00-20:00", "KARATE DO: 20:00-21:00", "SALSA-BACHATA: 20:00-21:00", "KARATE DO: 21:00-22:00"],
            "Jue": ["MUSCULACIÓN: 07:00-13:00", "PILATES: 08:00-09:00", "STEP DE COMPETICIÓN: 09:00-10:00", "YOGA HOLÌSTICA: 10:00-11:15","ATLETISMO: 10:00-16:00", "PILATES MATT: 10:00-11:00", "MUSCULACIÓN: 14:00-22:00", "ZUMBA: 15:00-16:00", "FOLCLORE: 17:00-18:00","STRONG: 18:00-19:00", "AEROBOX: 18:00-19:00", "ZUMBA KIDS 8 A 11 AÑOS - ESGRIMA KIDS 8 A 12 AÑOS - FOLCLORE: 18:00-19:00", "FUNCIONAL: 19:00-20:00", "ZUMBA GOLD: 20:00-21:00", "DEFENSA PERSONAL: 20:00-21:00", "DEFENSA PERSONAL: 21:00-22:00"],
            "Vie": ["MUSCULACIÓN: 07:00-13:00", "STEP: 08:00-09:00", "17:00-18:00: Zumba", "FUNCIONAL: 09:00-10:00", "PILATES MATT: 10:00-11:00", "YOGA DEPORTIVA: 10:00-11:00", "YOGA LEDA: 11:15-12:15", "MUSCULACIÓN: 14:00-22:00", "FUNCIONAL - ZUMBA TONING + STEP: 15:00-16:00", "FUNCIONAL: 16:00-17:00", "AEROBOX: 18:00-19:00", "ZUMBA: 19:00-20:00", "KARATE DO: 20:00-21:00", "KARATE DO: 21:00-22:00"],
            "Sáb": [],
            "Dom": []
        },
        "POLIDEPORTIVO": {
            "Lun": ["FUNCIONAL POLIDEPORTIVO: 08:30","ZUMBA AGHATA: 09:30-10:30","FUNCIONAL POLIDEPORTIVO: 10:30", "NEWCOM TARDE: 14:00-16:00","TEJO INICIAL: 15:00","TEJO COMPETITIVO: 15:00-18:00",  "BASQUET JUVENIL: 16:00-17:30", "YOGA POLIDEPORTIVO: 17:00-18:00", "BASQUET MINI: 17:30-19:00", "BASQUET FORMATIVAS: 17:30-19:00", "ZUMBA CARINA: 19:00-20:00", "HOCKEY ADOLESCENTES: 18:30-20:00", "HOCKEY ADULTOS: 20:00-21:30", "NEWCOM: 20:00-22:00"],
            "Mar": ["FUNCIONAL KIDS: 09:30-10:30", "FUNCIONAL POLIDEPORTIVO: 08:30","TEJO COMPETITIVO: 15:00-18:00",  "RITMOS Y GIMNACIA: 15:00", "GIMNACIA ARTÍSTICA 4 A 6 AÑOS: 16:30-17:30", "GIMNACIA ARTÍSTICA 7 A 11 AÑOS:17:30-18:30", "FUTSAL: 17:00-18:30", "HOCKEY FORMATIVAS: 18:30-20:00","VOLEY: 18:30-20:00", "MAXI VOLEY: 20:00-21:30", "HOCKEY MAMIS: 20:00-21:30", "MAXI BASQUET FEM: 20:00-21:30"],
            "Mié": ["FUNCIONAL POLIDEPORTIVO: 08:30","ZUMBA AGHATA: 09:30-10:30","FUNCIONAL POLIDEPORTIVO: 10:30","NEWCOM TARDE: 14:00-16:00", "BASQUET JUVENIL: 16:00-17:30", "BASQUET MINI: 17:30-19:00", "BASQUET FORMATIVAS: 17:30-19:00", "ZUMBA CARINA: 19:00-20:00", "HOCKEY ADOLESCENTES: 18:30-20:00", "HOCKEY ADULTOS: 20:00-21:30", "NEWCOM: 20:00-22:00"],
            "Jue": ["FUNCIONAL KIDS: 09:30-10:30", "FUNCIONAL POLIDEPORTIVO: 08:30", "FUNCIONAL POLIDEPORTIVO: 10:30", "RITMOS Y GIMNACIA: 15:00", "GIMNACIA ARTÍSTICA 4 A 6 AÑOS: 17:00-18:00", "GIMNACIA ARTÍSTICA 7 A 11 AÑOS: 18:00-19:00", "FUTSAL: 17:00-18:30", "HOCKEY FORMATIVAS: 18:30-20:00","VOLEY: 18:30-20:00", "MAXI VOLEY: 20:00-21:30", "HOCKEY MAMIS: 20:00-21:30", "MAXI BASQUET FEM: 20:00-21:30"],
            "Vie": ["FUNCIONAL POLIDEPORTIVO: 08:30","ZUMBA AGHATA: 09:30-10:30", "FUNCIONAL KIDS: 09:30-10:30", "FUNCIONAL ADAPTADO: 10:30", "NEWCOM TARDE: 14:00-16:00","TEJO INICIAL: 15:00","TEJO COMPETITIVO: 15:00-18:00",  "JUEGOS DE MESA: 15:00","YOGA INTEGRAL: 16:15", "BASQUET JUVENIL: 16:00-17:30", "BASQUET MINI: 17:30-19:00", "BASQUET FORMATIVAS: 17:30-19:00", "HOCKEY ADOLESCENTES: 18:30-20:00", "HOCKEY ADULTOS: 20:00-21:30", "NEWCOM: 20:00-22:00"],
            "Sáb": [],
            "Dom": []
        },
        "Cav Felix Bogado": {
            "Lun": ["PILATES MAT: 9:30","BOX-STEP: 15:00-16:00", "FUNCIONAL FELIX BOGADO: 19:00-20:00"],
            "Mar": ["PILATES MAT: 9:30","DEFENSA PERSONAL FEMENINA: 18:00-19:00","LUCHA OLIMPICA: 19:00-21:00"],
            "Mié": ["PILATES MAT: 9:30","BOX-STEP: 15:00-16:00", "FUNCIONAL FELIX BOGADO: 19:00-20:00"],
            "Jue": ["PILATES MAT: 9:30","LUCHA OLIMPICA NIÑOS-NIÑAS:16:30-18:00"],
            "Vie": ["PILATES MAT: 9:30","DEFENSA PERSONAL FEMENINA: 18:00-19:00","LUCHA OLIMPICA: 19:00-21:00"],
            "Sáb": [],
            "Dom": []
        },
        "Cav Jardin San Luis": {
            "Lun": ["FUNCIONAL JARDIN: 08:30-11:30"],
            "Mar": ["ACTIVIDAD ADAPTADA ADULTOS MAYORES: 9:00-11:30"],
            "Mié": ["FUNCIONAL JARDIN: 08:30-11:30"],
            "Jue": ["ACTIVIDAD ADAPTADA ADULTOS MAYORES: 9:00-11:30"],
            "Vie": ["FUNCIONAL JARDIN: 08:30-11:30"],
            "Sáb": [],
            "Dom": []
        }
        ,
        "Cav Tercera Rotonda": {
            "Lun": ["DEFENSA PERSONAL FEMENINA 3: 15:00-16:30","LUCHA OLIMPICA 3: 17:00-20:30"],
            "Mar": ["FUNCIONAL MELINA: 8:30-9:30"],
            "Mié": ["DEFENSA PERSONAL FEMENINA 3: 15:00-16:30","LUCHA OLIMPICA 3: 17:00-20:30"],
            "Jue": ["FUNCIONAL MELINA: 10:00-11:00"],
            "Vie": [],
            "Sáb": [],
            "Dom": []
        },
        "Cav Pueblo Nuevo": {
            "Lun": [],
            "Mar": ["ACTV. FISICA ADULTOS MAYORES: 15:00-16:00", "FUNCIONAL PUEBLO NUEVO: 16:00-17:00"],
            "Mié": ["YOGA LEDA: 10:30-11:30"],
            "Jue": ["ACTV. FISICA ADULTOS MAYORES: 15:00-16:00", "FUNCIONAL PUEBLO NUEVO: 16:00-17:00"],
            "Vie": [],
            "Sáb": [],
            "Dom": []
        },
        "Cav Eva Peron": {
            "Lun": ["FUNCIONAL EVA PERON: 14:00-15:00", "ACT. FÍSICA ADULTOS MAYORES:15:00-16:00"],
            "Mar": ["FUNCIONAL SOL: 8:30","FUNCIONAL SOL: 9:30","PILATES SOL: 10:30","RITMO, MOVIMIENTO Y BIENESTAR:10:30"],
            "Mié": ["FUNCIONAL EVA PERON: 14:00-15:00", "ACT. FÍSICA ADULTOS MAYORES:15:00-16:00"],
            "Jue": ["FUNCIONAL SOL: 8:30","FUNCIONAL SOL: 9:30","PILATES SOL: 10:30","YOGA LEDA: 10:30-11:30"],
            "Vie": ["FUNCIONAL EVA PERON: 14:00-15:00", "ACT. FÍSICA ADULTOS MAYORES:15:00-16:00"],
            "Sáb": [],
            "Dom": []
        },
        "Cav Rawson": {
            "Lun": ["FUTBOL: 17:00-18:30"],
            "Mar": [],
            "Mié": [],
            "Jue": [],
            "Vie": ["FUTBOL: 17:00-18:30"],
            "Sáb": [],
            "Dom": []
        },
         "BARRIO 500 VIVIENDAS": {
            "Lun": ["FÚTBOL 500: 16:00-18:00"],
            "Mar": [],
            "Mié": ["FÚTBOL 500: 16:00-18:00"],
            "Jue": [],
            "Vie": ["FÚTBOL 500: 16:00-18:00"],
            "Sáb": [],
            "Dom": []
        }
    };

    const actividadesInfo = {
        "ACTIVIDAD ADAPTADA ADULTOS MAYORES": {
            images: ["fotos/aadulmay/1.jpeg"],
            video: "",
            description: ""
        },
        "FÚTBOL 500": {
            images: ["fotos/futbol500/1.jpeg"],
            video: "",
            description: ""
        },
        "FUNCIONAL": {
            images: ["fotos/funcional/1.jpeg"],
            video: "",
            description: ""
        },
        "TEJO INICIAL": {
            images: ["fotos/tejo/1.jpeg"],
            video: "",
            description: ""
        },
        "RITMO, MOVIMIENTO Y BIENESTAR": {
            images: ["fotos/tejo/10.jpeg"],
            video: "",
            description: ""
        },
        "PILATES MAT": {
            images: ["fotos/pilatesmat/1.jpeg"],
            video: "",
            description: ""
        },
        "TEJO COMPETITIVO": {
            images: ["fotos/tejo/2.jpeg"],
            video: "",
            description: ""
        },
        "FUNCIONAL SOL": {
            images: ["fotos/fsol/1.jpeg"],
            video: "",
            description: ""
        },
        "PILATES SOL": {
            images: ["fotos/fsol/1.jpeg"],
            video: "",
            description: ""
        },
        "RITMOS Y GIMNACIA": {
            images: ["fotos/ritmogim/1.jpeg"],
            video: "",
            description: ""
        },
        "YOGA INTEGRAL": {
            images: ["fotos/ritmogim/2.jpeg"],
            video: "",
            description: ""
        },
         "JUEGOS DE MESA": {
            images: ["fotos/ritmogim/3.jpeg"],
            video: "",
            description: ""
        },
        "ATLETISMO": {
            images: ["fotos/atletismo/1.jpeg"],
            video: "",
            description: ""
        }, 
        "AEROBICA": {
            images: ["fotos/aerobica/1.jpeg"],
            video: "",
            description: ""
        },
        "FUNCIONAL ADAPTADO": {
            images: ["fotos/funcionaladaptado/1.jpeg"],
            video: "",
            description: ""
        },
        "FUNCIONAL MELINA": {
            images: ["fotos/funcionalmelina/1.jpeg"],
            video: "",
            description: ""
        },
        "NEWCOM TARDE": {
            images: ["fotos/newcomtarde/1.png"],
            video: "",
            description: ""
        },
        "FUNCIONAL KIDS": {
            images: ["fotos/funcionalkids/1.png"],
            video: "",
            description: ""
        },
        "FUNCIONAL POLIDEPORTIVO": {
            images: ["fotos/funcionalpolideportivomañana/2.jpeg","fotos/funcionalpolideportivomañana/3.jpeg"],
            video: "",
            description: ""
        },
        "HOCKEY ADOLESCENTES": {
            images: ["fotos/hockey/1.png"],
            video: "",
            description: ""
        },
        "HOCKEY ADULTOS": {
            images: ["fotos/hockey/1.png"],
            video: "",
            description: ""
        },
        "HOCKEY MAMIS": {
            images: ["fotos/hockey/1.png"],
            video: "",
            description: ""
        },
        "HOCKEY FORMATIVAS": {
            images: ["fotos/hockey/1.png"],
            video: "",
            description: ""
        },
        "FUTSAL": {
            images: ["fotos/futsal/1.jpeg","fotos/futsal/2.png"],
            video: "",
            description: ""
        },
        "STRONG": {
            images: ["fotos/strong/1.jpeg"],
            video: "",
            description: ""
        },
        "FUNCIONAL - ZUMBA TONING + STEP": {
            images: ["fotos/strong/1.jpeg"],
            video: "",
            description: ""
        },
        "ZUMBA": {
            images: ["fotos/strong/1.jpeg"],
            video: "",
            description: ""
        },
        "FUTSAL MIXTO 7-9 AÑOS": {
            images: ["fotos/futsal500/1.jpeg"],
            video: "",
            description: ""
        },
        "FUTSAL MIXTO 10-12 AÑOS": {
            images: ["fotos/futsal500/1.jpeg"],
            video: "",
            description: ""
        },
        "BASQUET JUVENIL": {
            images: ["fotos/basquetjuveniles/1.jpeg","fotos/basquetjuveniles/2.jpg"],
            video: "",
            description: ""
        },
        "BASQUET FORMATIVAS": {
            images: [, "fotos/basquetf/1.jpeg","fotos/basquetf/2.png"],
            video: "",
            description: ""
        },
        "BASQUET MINI": {
            images: ["fotos/basquetm/1.jpeg", "fotos/basquetm/2.jpeg", "fotos/basquetm/4.jpeg"],
            video: "",
            description: ""
        },
        "NEWCOM": {
            images: ["fotos/newcom/2.png","fotos/newcom/1.jpeg"],
            video: "",
            description: ""
        },
        "ZUMBA AGHATA": {
            images: ["fotos/zumbaaghata/1.png","fotos/zumbaaghata/2.jpeg"],
            video: "",
            description: ""
        },
        "ZUMBA CARINA": {
            images: ["fotos/zumbacarina/1.png","fotos/zumbacarina/2.jpeg"],
            video: "",
            description: ""
        },
        "VOLEY": {
            images: ["fotos/volley/1.jpeg"],
            video: "",
            description: ""
        },
        "MAXI VOLEY": {
            images: ["fotos/volley/1.jpeg"],
            video: "",
            description: ""
        },
        "YOGA LEDA": {
            images: ["fotos/yogaleda/1.jpeg"],
            video: "",
            description: ""
        },
        "YOGA DEPORTIVA": {
            images: ["fotos/yogaleda/1.jpeg"],
            video: "",
            description: ""
        },
        "LUCHA OLIMPICA NIÑOS-NIÑAS": {
            images: ["fotos/luchafelix/1.png"],
            video: "",
            description: ""
        },
        "DEFENSA PERSONAL FEMENINA": {
            images: ["fotos/luchafelix/lo.jpeg"],
            video: "",
            description: ""
        },
        "LUCHA OLIMPICA": {
            images: ["fotos/luchafelix/lo.jpeg"],
            video: "",
            description: ""
        },
        "FUNCIONAL GABY": {
            images: ["fotos/funcgaby/1.png"],
            video: "",
            description: ""
        },
        "BOX-STEP": {
            images: ["fotos/boxstepfelix/1.png"],
            video: "",
            description: ""
        },
        "STEP": {
            images: ["fotos/step/1.jpeg"],
            video: "",
            description: ""
        },
        "FUNCIONAL FELIX BOGADO": {
            images: ["fotos/boxstepfelix/1.png"],
            video: "",
            description: ""
        },
        "FUNCIONAL JARDIN": {
            images: ["fotos/funcionaljardin/1.jpeg"],
            video: "",
            description: ""
        }
        ,
        "FUNCIONAL JARDIN PRINCIPIANTE": {
            images: ["fotos/funcionaljardin/1.png"],
            video: "",
            description: ""
        },
        "MUSCULACIÓN": {
            images: ["fotos/musculacion/1.jpeg","fotos/musculacion/2.jpeg"],
            video: "",
            description: ""
        },
        "PILATES JARDIN": {
            images: ["fotos/funcionaljardin/1.png"],
            video: "",
            description: ""
        },
        "PILATES MATT": {
            images: ["fotos/pilatesmatt/1.jpeg","fotos/pilatesmatt/2.jpeg"],
            video: "",
            description: ""
        },
        "GAP": {
            images: ["fotos/gap/1.png"],
            video: "",
            description: ""
        },
        "PILATES": {
            images: ["fotos/pilates/1.png"],
            video: "",
            description: ""
        },
        "SALSA-BACHATA": {
            images: ["fotos/bachata/1.jpeg","fotos/bachata/3.jpeg","fotos/bachata/4.jpeg","fotos/bachata/5.jpeg"],
            video: "https://youtube.com/shorts/iHL9Eu_OE1Y",
            description: "Nuestra clase de bachata está diseñada para que cualquier persona pueda disfrutar, desde principiantes hasta quienes ya tienen experiencia. Aprenderás los pasos básicos, giros y combinaciones de manera progresiva, siempre acompañados de música envolvente y un ambiente divertido y relajado. No necesitas venir con pareja ni tener conocimientos previos—solo ganas de moverte, reírte y dejarte llevar por el ritmo. Además, la bachata no solo es un baile: es una forma de expresarte, conocer gente nueva y desconectarte de la rutina. Anímate a probar algo diferente, mejorar tu confianza en la pista y sentir la magia de la música en cada paso. ¡Te esperamos para bailar juntos!"
        },
        "LUCHA OLIMPICA 3": {
            images: ["fotos/luchatercera/1.jpeg"],
            video: "",
            description: ""
        },
        "DEFENSA PERSONAL FEMENINA 3": {
            images: ["fotos/luchatercera/1.jpeg"],
            video: "",
            description: ""
        },
        "ACTV. FISICA ADULTOS MAYORES": {
            images: ["fotos/actvadultos/1.png"],
            video: "",
            description: ""
        },
        "FUNCIONAL PUEBLO NUEVO": {
            images: ["fotos/actvadultos/1.png"],
            video: "",
            description: ""
        },
        "FUNCIONAL EVA PERON": {
            images: ["fotos/funcionaleva/1.png"],
            video: "",
            description: ""
        },
        "ACT. FÍSICA ADULTOS MAYORES": {
            images: ["fotos/funcionaleva/2.jpeg"],
            video: "",
            description: ""
        },
        "FUTBOL": {
            images: ["fotos/futbol/1.png"],
            video: "",
            description: ""
        },
        "GIMNACIA ARTÍSTICA 7 A 11 AÑOS": {
            images: ["fotos/gymart/1.jpeg"],
            video: "",
            description: ""
        },
        "GIMNACIA ARTÍSTICA 4 A 6 AÑOS": {
            images: ["fotos/gymart/1.jpeg"],
            video: "",
            description: ""
        },
        "ZUMBA GOLD": {
            images: ["fotos/zumbagold/1.jpeg", "fotos/zumbagold/2.jpeg"],
            video: "",
            description: ""
        },
        "YOGA HOLÌSTICA": {
            images: ["fotos/yogaleda/yh.jpeg"],
            video: "",
            description: ""
        },
    };

    const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie"];

    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');

    function openModal(actividad) {
        const info = actividadesInfo[actividad];
        if (info) {
            let carouselItems = '';
            info.images.forEach(image => {
                carouselItems += `<div class="carousel-item"><img src="${image}" alt="${actividad}"></div>`;
            });

            modalContent.innerHTML = `
                <span class="close">&times;</span>
                <h2>${actividad}</h2>
                <p>${info.description}</p>
                <div class="carousel-container">
                    <div class="carousel">
                        ${carouselItems}
                    </div>
                    <button class="carousel-control prev" onclick="prevSlide()">&#10094;</button>
                    <button class="carousel-control next" onclick="nextSlide()">&#10095;</button>
                </div>
                <iframe width="100%" height="315" src="${info.video}" frameborder="0" allowfullscreen></iframe>
            `;
            modal.style.display = 'block';

            const closeButton = modalContent.querySelector('.close');
            closeButton.addEventListener('click', closeModal);

            // Initialize carousel
            let currentSlide = 0;
            function showSlide(n) {
                let slides = modalContent.querySelectorAll('.carousel-item'); // Select slides within the modal
                if (slides.length === 0) return; // Exit if no slides

                if (n >= slides.length) {
                    currentSlide = 0;
                }
                if (n < 0) {
                    currentSlide = slides.length - 1;
                }

                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }

                slides[currentSlide].style.display = "block";
            }

            window.nextSlide = function () {
                currentSlide++;
                showSlide(currentSlide);
            };

            window.prevSlide = function () {
                currentSlide--;
                showSlide(currentSlide);
            };

            showSlide(currentSlide);
        }
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    document.querySelectorAll('.ubicacion').forEach(ubicacionElement => {
        ubicacionElement.querySelector('h2').addEventListener('click', () => {
            ubicacionElement.classList.toggle('activo');
        });

        const lugar = ubicacionElement.dataset.lugar;
        const calendarioElement = ubicacionElement.querySelector('.calendario');

        const tabla = document.createElement('table');
        tabla.classList.add('tabla-calendario');
        const tbody = document.createElement('tbody');

        diasSemana.forEach(dia => {
            let cuerpoRow = document.createElement('tr');
            let th = document.createElement('th');
            th.textContent = dia;
            cuerpoRow.appendChild(th);

            let td = document.createElement('td');
            const actividadesDia = actividades[lugar][dia];
            if (actividadesDia && actividadesDia.length > 0) {
                actividadesDia.forEach(actividad => {
                    let actividadDiv = document.createElement('div');
                    actividadDiv.classList.add('actividad');
                    actividadDiv.textContent = actividad;
                    td.appendChild(actividadDiv);

                    actividadDiv.addEventListener('click', () => {
                        const actividadName = actividad.split(':')[0].trim();
                        openModal(actividadName);
                    });
                });
            }
            cuerpoRow.appendChild(td);
            tbody.appendChild(cuerpoRow);
        });

        tabla.appendChild(tbody);
        calendarioElement.appendChild(tabla);
    });
});