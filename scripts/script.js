var botao = document.getElementById("botao");
botao.addEventListener("click", clicou);
function clicou() {
    var bandeiras = document.getElementById("bandeiras");
    var res = document.getElementById("res");
    var exp = document.getElementById("exp");
    var nome = document.getElementById("nome").value;
    var generoMasculino = document.getElementById("masculino").checked;
    var generoFeminino = document.getElementById("feminino").checked;
    var paisorigem = document.getElementById("paisorigem").value;
    var nameerro = document.getElementById("name-erro");
    var paiserro = document.getElementById("pais-erro");
    var nomeContemNumeros = !/^[a-zA-Z\s]*$/.test(nome);
    var paisOrigemContemNumeros = !/^[a-zA-Z\s]*$/.test(paisorigem);

    if (nome == "" && paisorigem == "") {
        nameerro.style.display = "block";
        paiserro.style.display = "block";

        setTimeout(function () {
            nameerro.style.display = "none";
            paiserro.style.display = "none";
        }, 3000);
        return;
    }

    if (nome == "") {
        nameerro.style.display = "block";

        setTimeout(function () {
            nameerro.style.display = "none";
        }, 3000);
        return;
    }

    if (paisorigem == "") {
        paiserro.style.display = "block";

        setTimeout(function () {
            paiserro.style.display = "none";
        }, 3000);
        return;
    }

    if (nomeContemNumeros && paisOrigemContemNumeros) {
        nameerro.textContent = "Please enter a valid name.";
        nameerro.style.display = "block";
        paiserro.textContent = "Please enter a valid country.";
        paiserro.style.display = "block";
        setTimeout(function () {
            nameerro.style.display = "none";
            paiserro.style.display = "none";
        }, 3000);
        return;
    }

    // Verifique individualmente e exiba mensagens de erro apropriadas
    if (nomeContemNumeros) {
        nameerro.textContent = "Please enter a valid name.";
        nameerro.style.display = "block";
        setTimeout(function () {
            nameerro.style.display = "none";
        }, 3000);
        return;
    }

    if (paisOrigemContemNumeros) {
        paiserro.textContent = "Please enter a valid country.";
        paiserro.style.display = "block";
        setTimeout(function () {
            paiserro.style.display = "none";
        }, 3000);
        return;
    }

    if (paisorigem.length < 2) {
        paiserro.textContent = "The country must be at least 2 characters long.";
        paiserro.style.display = "block";

        setTimeout(function () {
            paiserro.style.display = "none";
        }, 3000);
        return;
    }

    if (nome.length < 3 || nome.length > 20) {
        nameerro.textContent = "The name must be between 3 and 20 characters long.";
        nameerro.style.display = "block";

        setTimeout(function () {
            nameerro.style.display = "none";
        }, 3000);
        return;
    }

    var paisValidos = [
        "EUA",
        "USA",
        "Estados Unidos",
        "United States",
        "United States of America",
        "US",
        "Brasil",
        "BR",
        "Brazil",
        "Espanha",
        "Spain",
        "ES",
        "Inglaterra",
        "England",
        "GB",
        "França",
        "FR",
        "France",
        "Itália",
        "Italy",
        "IT",
        "Portugal",
        "PT",
        "Índia",
        "India",
        "IN",
        "China",
        "CN",
        "Rússia",
        "Russia",
        "RU",
        "Canadá",
        "Canada",
        "CA",
        "DE",
        "Alemanha",
        "Germany",
        "Japão",
        "Japan",
        "JP",
        "Austrália",
        "Australia",
        "AU",
        "México",
        "MX",
        "Egito",
        "Egypt",
        "EG",
        "Argentina",
        "AR",
        "África do Sul",
        "South Africa",
        "ZA",
        "Suécia",
        "Sweden",
        "SE",
        "Grécia",
        "Greece",
        "GR",
        "Turquia",
        "Turkey",
        "TR",
        "Noruega", "Norway",
        "NO",
        "Denmark",
        "DK",
        "Holanda",
        "Netherlands",
        "NL",
        "Nova Zelândia",
        "New Zealand",
        "NZ",
        "Singapura",
        "Singapore",
        "SG",
        "Suíça",
        "Switzerland",
        "CH",
        "Bélgica",
        "Belgium",
        "BE",
        "Áustria",
        "Austria",
        "AT",
        "Irlanda",
        "Ireland",
        "IE",
        "Chile",
        "Chile",
        "CL",
        "Coreia do Sul",
        "South Korea",
        "KR",
        "Malásia",
        "Malaysia",
        "MY",
        "Tailândia",
        "Thailand",
        "TH",
        "Finlândia",
        "Finland",
        "FI",
        "Polônia",
        "Poland",
        "PL"


        // Adicione países permitidos aqui
    ];

    if (!paisValidos.includes(paisorigem)) {
        paiserro.textContent = "Please enter a valid country.";
        paiserro.style.display = "block";

        setTimeout(function () {
            paiserro.style.display = "none";
        }, 3000);
        return;
    }


    bandeiras.style.display = "none";

    if (
        paisorigem == "USA" ||
        paisorigem == "United States" ||
        paisorigem == "United States of America" ||
        paisorigem == "US" ||
        paisorigem == "USA"
    ) {
        res.innerHTML = nome + ", You are American! 🇺🇸";
        exp.innerHTML =
            "The United States of America, often called the USA, is a diverse and influential nation located in North America. With a population of over 330 million people, the USA is known for its rich and varied culture, composed of a blend of traditions from around the world.";
    }

    if (
        paisorigem == "Ireland" ||
        paisorigem == "IE"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Irish! ☘️";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Irish! ☘️";
        }
        exp.innerHTML =
            "Ireland is known for its Celtic culture, green landscapes, and lively pubs. It is famous for its musical traditions and festivals, such as St. Patrick's Day.";
    }

    if (
        paisorigem == "Chile" ||
        paisorigem == "CL"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Chilean! 🇨🇱";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Chilean! 🇨🇱";
        }
        exp.innerHTML =
            "Chile is a South American country known for its diverse geography, including deserts, forests, and mountains. It is famous for its wine production and unique natural beauty.";
    }

    if (
        paisorigem == "South Korea" ||
        paisorigem == "KR"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are South Korean! 🇰🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are South Korean! 🇰🇷";
        }
        exp.innerHTML =
            "South Korea is an Asian nation known for its advanced technology, pop culture like K-pop, and delicious cuisine, including kimchi and bulgogi.";
    }

    if (
        paisorigem == "Malaysia" ||
        paisorigem == "MY"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Malaysian! 🇲🇾";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Malaysian! 🇲🇾";
        }
        exp.innerHTML =
            "Malaysia is a Southeast Asian country known for its ethnic diversity, beautiful beaches, and tropical forests. It is also famous for its street food, such as nasi lemak and satay.";
    }

    if (
        paisorigem == "Thailand" ||
        paisorigem == "TH"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Thai! 🇹🇭";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Thai! 🇹🇭";
        }
        exp.innerHTML =
            "Thailand is a nation in Southeast Asia known for its tropical beaches, Buddhist temples, and spicy cuisine. It is a popular destination for tourists from around the world.";
    }


    if (
        paisorigem == "Finland" ||
        paisorigem == "FI"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Finnish! 🇫🇮";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Finnish! 🇫🇮";
        }
        exp.innerHTML =
            "Finland is a Nordic country known for its high-quality education, innovative design, and beautiful natural landscapes, including lakes and forests.";
    }

    if (
        paisorigem == "Poland" ||
        paisorigem == "PL"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Polish! 🇵🇱";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Polish! 🇵🇱";
        }
        exp.innerHTML =
            "Poland is a Central European country known for its rich history, medieval architecture, and cultural contributions, such as Chopin and Marie Curie.";
    }

    if (
        paisorigem == "Switzerland" ||
        paisorigem == "CH"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Swiss! 🇨🇭";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Swiss! 🇨🇭";
        }
        exp.innerHTML =
            "Switzerland is a European country known for its stunning natural beauty, including the Swiss Alps. It is famous for its precision and quality, especially in watchmaking and chocolates.";
    }

    if (
        paisorigem == "Belgium" ||
        paisorigem == "BE"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Belgian! 🇧🇪";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Belgian! 🇧🇪";
        }
        exp.innerHTML =
            "Belgium is a European country known for its delicious cuisine, including Belgian chocolates and waffles. It is also famous for its beers and rich history.";
    }

    if (
        paisorigem == "Austria" ||
        paisorigem == "AT"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Austrian! 🇦🇹";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Austrian! 🇦🇹";
        }
        exp.innerHTML =
            "Austria is a European country known for its classical music, especially composers like Mozart and Beethoven. It is also famous for its Alpine landscapes.";
    }

    if (
        paisorigem == "Norway" ||
        paisorigem == "NO"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Norwegian! 🇳🇴";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Norwegian! 🇳🇴";
        }
        exp.innerHTML =
            "Norway is a Scandinavian country in Europe known for its stunning landscapes, majestic fjords, and high quality of life. It's also famous for being one of the happiest countries in the world.";
    }

    if (
        paisorigem == "Denmark" ||
        paisorigem == "DK"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Danish! 🇩🇰";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Danish! 🇩🇰";
        }
        exp.innerHTML =
            "Denmark is a Nordic country in Europe known for its modern design, relaxed lifestyle, and rich cultural heritage. It is the home of many fairy tales and famous stories, including the works of Hans Christian Andersen.";
    }

    if (
        paisorigem == "Netherlands" ||
        paisorigem == "NL"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Dutch! 🇳🇱";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Dutch! 🇳🇱";
        }
        exp.innerHTML =
            "The Netherlands, also known as the Netherlands, is a European country famous for its windmills, picturesque canals, and flowers, especially tulips. It is a nation with a rich history and culture.";
    }

    if (
        paisorigem == "New Zealand" ||
        paisorigem == "NZ"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are New Zealander! 🇳🇿";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are New Zealander! 🇳🇿";
        }
        exp.innerHTML =
            "New Zealand is an island country in the southwest Pacific Ocean, known for its stunning natural beauty, including mountains, beaches, and fjords. It is also a popular destination for extreme sports like bungee jumping.";
    }

    if (
        paisorigem == "Singapore" ||
        paisorigem == "SG"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Singaporean! 🇸🇬";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Singaporean! 🇸🇬";
        }
        exp.innerHTML =
            "Singapore is a city-state in Southeast Asia known for its modernity, cleanliness, and cultural diversity. It is a financial and technological hub and offers a rich blend of cultures and cuisines.";
    }

    if (
        paisorigem == "South Africa" ||
        paisorigem == "ZA"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are South African! 🇿🇦";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are South African! 🇿🇦";
        }
        exp.innerHTML =
            "South Africa is a diverse country located at the southern tip of Africa. It is known for its varied landscape, including savannas, mountains, beaches, and deserts. The nation also has a rich cultural diversity with African, European, and Asian influences.";
    }

    if (
        paisorigem == "Sweden" ||
        paisorigem == "SE"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Swedish! 🇸🇪";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Swedish! 🇸🇪";
        }
        exp.innerHTML =
            "Sweden is a Scandinavian nation in northern Europe, known for its high quality of life, stunning natural landscapes, and innovative design. It is a modern country with a rich historical and cultural heritage.";
    }

    if (
        paisorigem == "Greece" ||
        paisorigem == "GR"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Greek! 🇬🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Greek! 🇬🇷";
        }
        exp.innerHTML =
            "Greece is a country in southeastern Europe known for its rich historical heritage, including ancient civilization and the famous gods of Olympus. Additionally, Greece offers beautiful islands, beaches, and delicious Mediterranean cuisine.";
    }

    if (
        paisorigem == "Turkey" ||
        paisorigem == "TR"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Turkish! 🇹🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Turkish! 🇹🇷";
        }
        exp.innerHTML =
            "Turkey is a transcontinental country situated between Europe and Asia. It is known for its rich history, including the Ottoman Empire, and has a diverse landscape that includes mountains, beaches, and deserts. Turkish cuisine is also famous worldwide.";
    }

    if (
        paisorigem == "Australia" ||
        paisorigem == "AU"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Australian! 🇦🇺";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Australian! 🇦🇺";
        }
        exp.innerHTML =
            "Australia is an incredibly diverse and vast country, known for its stunning nature, breathtaking beaches, and unique wildlife. It is home to the Great Barrier Reef, kangaroos, and world-class surfing. Australia also has a rich Indigenous culture and a welcoming population.";
    }

    if (
        paisorigem == "Mexico" ||
        paisorigem == "MX"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Mexican! 🇲🇽";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Mexican! 🇲🇽";
        }
        exp.innerHTML =
            "Mexico is a vibrant country in North America, famous for its delicious cuisine, colorful culture, and ancient ruins like Chichen Itza. It is the birthplace of mariachi and tequila and has a fascinating blend of indigenous traditions and Spanish influences.";
    }

    if (
        paisorigem == "Egypt" ||
        paisorigem == "EG"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Egyptian! 🇪🇬";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Egyptian! 🇪🇬";
        }
        exp.innerHTML =
            "Egypt is a country in northeastern Africa known for its ancient civilization, with iconic monuments like the pyramids of Giza and the Sphinx. In addition to its rich historical heritage, Egypt also has a stunning Red Sea coastline and a diverse culture.";
    }

    if (
        paisorigem == "Argentina" ||
        paisorigem == "AR"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Argentine! 🇦🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Argentine! 🇦🇷";
        }
        exp.innerHTML =
            "Argentina is a South American nation known for its passion for soccer, tango, and delicious meats. It boasts stunning landscapes, such as Patagonia and Iguazu Falls, and is a popular destination for nature and culture enthusiasts.";
    }

    if (
        paisorigem == "Germany" ||
        paisorigem == "DE"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are German! 🇩🇪";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are German! 🇩🇪";
        }
        exp.innerHTML =
            "Germany is a European nation known for its efficiency, cutting-edge technology, and rich cultural heritage. It's famous for its beers, sausages, and as the birthplace of the Bauhaus, an influential art movement. Germany has played a significant role in the history of philosophy, literature, music, science, and the automotive industry.";
    }

    if (
        paisorigem == "Japan" ||
        paisorigem == "JP"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Japanese! 🇯🇵";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Japanese! 🇯🇵";
        }
        exp.innerHTML =
            "Japan is an island nation in East Asia known for its unique culture, advanced technology, and stunning landscapes. It's home to sushi, sumo wrestling, and beautiful historic temples. Japan is also famous for its contributions to the video game industry and the kindness of its people.";
    }

    if (
        paisorigem == "Brazil" ||
        paisorigem == "BR"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Brazilian! 🇧🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Brazilian! 🇧🇷";
        }
        exp.innerHTML =
            "Brazil is the largest country in South America and one of the most culturally diverse and rich countries in the world. With a geography that spans tropical forests, stunning beaches, vast plains, and high mountains, Brazil is known for its breathtaking natural beauty.";
    }

    if (
        paisorigem == "Spain" ||
        paisorigem == "ES"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Spanish! 🇪🇸";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Spanish! 🇪🇸";
        }
        exp.innerHTML =
            "Spain is a country located in southwestern Europe, known for its rich history, vibrant culture, and diverse landscapes. Spain is home to a variety of geographic regions, from the sunny beaches of the Costa del Sol to the majestic Pyrenees mountains.";
    }

    if (
        paisorigem == "England" ||
        paisorigem == "GB"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are British! 🇬🇧";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are British! 🇬🇧";
        }
        exp.innerHTML =
            "England is a historically rich and culturally diverse nation that is part of the United Kingdom, comprising four nations, including Scotland, Wales, and Northern Ireland. Located on the island of Great Britain, England has a distinct identity and a fascinating history.";
    }

    if (
        paisorigem == "France" ||
        paisorigem == "FR" ||
        paisorigem == "France"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are French! 🇫🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are French! 🇫🇷";
        }
        exp.innerHTML =
            'France, located in the heart of Western Europe, is a nation known for its rich culture, history, and significant contributions to arts, cuisine, and fashion. It is known as "the land of liberty, equality, and fraternity" and is famous for its revolution that inspired democratic values worldwide.';
    }

    if (
        paisorigem == "Italy" ||
        paisorigem == "Italy" ||
        paisorigem == "IT"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Italian! 🇮🇹";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Italian! 🇮🇹";
        }
        exp.innerHTML =
            "Italy is an iconic nation located in Southern Europe, known for its rich history, vibrant culture, delicious cuisine, and significant contributions to art and science. With a heritage dating back to the Roman Empire, Italy has played a fundamental role in shaping Western civilization.";
    }

    if (paisorigem == "Portugal" || paisorigem == "PT") {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Portuguese! 🇵🇹";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Portuguese! 🇵🇹";
        }
        exp.innerHTML =
            "Portugal, situated on the Iberian Peninsula, is a charming and historically rich nation known for its beautiful landscapes, captivating culture, and global influences dating back to the times of great explorers.";
    }

    if (
        paisorigem == "India" ||
        paisorigem == "India" ||
        paisorigem == "IN"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Indian! 🇮🇳";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Indian! 🇮🇳";
        }
        exp.innerHTML =
            "India, located in South Asia, is a diverse and fascinating nation known for its vast history, rich culture, and an extraordinarily large and diverse population.";
    }

    if (paisorigem == "China" || paisorigem == "CN") {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Chinese! 🇨🇳";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Chinese! 🇨🇳";
        }
        exp.innerHTML =
            "China, located in East Asia, is a vast and diverse nation known for its long history, rich culture, and growing global influence. With a population of over 1.4 billion people, it is the most populous country in the world.";
    }

    if (
        paisorigem == "Russia" ||
        paisorigem == "Russia" ||
        paisorigem == "RU"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", You are Russian! 🇷🇺";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", You are Russian! 🇷🇺";
        }
        exp.innerHTML =
            "Russia, the largest country in the world in terms of geographical area, is a vast and diverse nation located in northern Eurasia. It is known for its rich and complex history, unique culture, and stunning landscapes.";
    }

    if (
        paisorigem == "Canada" ||
        paisorigem == "Canada" ||
        paisorigem == "CA"
    ) {
        res.innerHTML = nome + ", You are Canadian! 🇨🇦";
        exp.innerHTML =
            "Canada, located in North America, is a vast and diverse nation known for its stunning landscapes, high quality of life, and cultural diversity.";
    }


}