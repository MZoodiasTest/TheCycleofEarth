document.addEventListener('DOMContentLoaded', function() {
    const modalBackground = document.querySelector('.modal-background');
    const headers = Array.from(document.querySelectorAll('section h2'));

    // Alcímek rendezése hossz szerint
    headers.sort((a, b) => {
        return a.innerText.length - b.innerText.length;
    });

    // Alcímek elhelyezése rendezett sorrendben
    headers.forEach(header => {
        document.querySelector('index').appendChild(header.parentElement);
    });

    // Nyelvváltó eseménykezelő
    document.getElementById("language").addEventListener('change', changeLanguage);

    // Nyelvváltás függvény
    function changeLanguage() {
        var language = document.getElementById("language").value;
        switch (language) {
            case "en":
                document.documentElement.lang = "en";
                updateContentToEnglish();
                break;
            case "hu":
                document.documentElement.lang = "hu";
                updateContentToHungarian();
                break;
            default:
                document.documentElement.lang = "en"; // Alapértelmezett nyelv beállítása
                updateContentToEnglish();
        }
    }

    // Angol nyelvű tartalmak frissítése
    function updateContentToEnglish() {
        document.title = "The cycle of Earth";
        document.getElementById("engine").querySelector('h2').textContent = "The Engine";
        document.getElementById("engine").querySelector('p').textContent = "The Unreal Engine 5.1 (UE5.1) version will be used for various options, better lighting, significant graphics, and optimization.";
        document.getElementById("implementation").querySelector('h2').textContent = "The Implementation";
        document.getElementById("implementation").querySelector('p').textContent = "For better implementation, MetaHuman characters are used for better characters. Use of synchronized voices to immerse yourself in the game. Use of Nanite and Lumen for better graphics experience and better optimization.";
        document.getElementById("lessons").querySelector('h2').textContent = "The Game's Lesson";
        document.getElementById("lessons").querySelector('p').textContent = "The lesson of the game is that life is hard, and it can be even harder if you are bullied during your school days. This emphasizes that bullying is a bad thing and should not be tolerated, as it can be crucial in a person's life how they were treated.";
        document.getElementById("base").querySelector('h2').textContent = "The Base";
        document.getElementById("base").querySelector('p').textContent = "The cycle of life, what school bullying does to a person's life. Presentation of various life stages. Important decisions, friendship. Voting options. Presentation of significant problems in life.";
        document.getElementById("locations").querySelector('h2').textContent = "The Locations";
        document.getElementById("locations").querySelector('p').textContent = "Locations are very important in a game, how they are depicted. Most locations are somewhat dark, gloomy. : School, Home, Street, smaller spaces.";
        document.getElementById("main-character").querySelector('h2').textContent = "The Main Character";
        document.getElementById("main-character").querySelector('p').textContent = "The main character is a 15-year-old girl (Zoe) who suffers from slight overweight. She has few friends, not much of a social life, often withdraws from the world due to bullying at school. She lives her life gloomily, deprived of enthusiasm. Most of the time, she stays at home and chats online with random strangers.";
        document.getElementById("features").querySelector('h2').textContent = "Main Features";
        document.getElementById("features").querySelector('p').textContent = "It has only one function, the phone. With the phone, we can talk to people. Maintain contact, and interact with multiple things.";
    }

    // Magyar nyelvű tartalmak frissítése
    function updateContentToHungarian() {
        document.title = "The cycle of Earth";
        document.getElementById("engine").querySelector('h2').textContent = "Az Engine";
        document.getElementById("engine").querySelector('p').textContent = "Az Unreal Engine 5.1 (UE5.1) verziót fogjuk használni különböző lehetőségekhez, jobb világításhoz, jelentős grafikához és optimalizáláshoz.";
        document.getElementById("implementation").querySelector('h2').textContent = "A Megvalósítás";
        document.getElementById("implementation").querySelector('p').textContent = "A jobb megvalósítás érdekében MetaHuman karaktereket használunk a jobb karakter miatt. Szinkronizált hangok használata a játékba való jobb beleélés érdekében. Nanite és Lumen használata a jobb grafikai élmény és optimalizáció érdekében.";
        document.getElementById("lessons").querySelector('h2').textContent = "A Játék Tanulsága";
        document.getElementById("lessons").querySelector('p').textContent = "A játék tanulsága az, hogy az élet nehéz, és még nehezebb lehet, ha az iskolai napok alatt zaklatják. Ez hangsúlyozza, hogy a zaklatás rossz dolog, és nem szabad tolerálni, mivel sorsdöntő lehet az ember életébe, hogy hogyan bántak vele.";
        document.getElementById("base").querySelector('h2').textContent = "Az Alap";
        document.getElementById("base").querySelector('p').textContent = "Az élet körforgása, hogy az iskolai bántalmazás mit tesz az ember életével. Többféle életszakasz bemutatása. Fontos döntések, barátság. Szavazási lehetőségek. Az élet jelentős problémáinak bemutatása.";
        document.getElementById("locations").querySelector('h2').textContent = "A Helyszínek";
        document.getElementById("locations").querySelector('p').textContent = "A helyszínek nagyon fontosak egy játékban, ahogy ábrázolódnak. A legtöbb helyszín valamivel sötét, komor. : Iskola, Otthon, Utca, kisebb terek.";
        document.getElementById("main-character").querySelector('h2').textContent = "A Főkarakter";
        document.getElementById("main-character").querySelector('p').textContent = "A főkarakter egy 15 év körüli lány (Zoe), aki kisebb túlsúllyal küzd. Kevés barátja van, nem túl aktív társasági élete van, gyakran vonul vissza a világtól az iskolai zaklatások miatt. Komor életet él, lelkesedéstől mentesen. Legtöbbször otthon marad és online beszélget ismeretlenekkel.";
        document.getElementById("features").querySelector('h2').textContent = "Fő Funkciók";
        document.getElementById("features").querySelector('p').textContent = "Egyetlen funkciója van, a telefon. A telefon segítségével tudunk beszélni emberekkel. Kapcsolatot tartani, és interakcióba lépni több dologgal.";
    }

    // Modal ablak megnyitása alcímre kattintáskor
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const sectionId = header.parentElement.id;
            const content = document.getElementById(sectionId).querySelector('p').innerText;
            const modalContent = document.querySelector('.modal-content');
            modalContent.innerHTML = `<h2>${header.innerText}</h2><p>${content}</p>`;
            modalBackground.style.display = 'block';
        });
    });

    // Modal ablak bezárása, ha a háttérre kattintanak
    modalBackground.addEventListener('click', function(e) {
        if (e.target === modalBackground) {
            modalBackground.style.display = 'none';
        }
    });

});
