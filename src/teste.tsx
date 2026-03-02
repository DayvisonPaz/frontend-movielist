import Header from "./header"
const data = [
    [
        {
            "adult": false,
            "backdrop_path": "/6YjnTRBz704LF1uJ3ZC4wsS9T8r.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 1290821,
            "original_language": "en",
            "original_title": "Shelter",
            "overview": "A man living in self-imposed exile on a remote island rescues a young girl from a violent storm, setting off a chain of events that forces him out of seclusion to protect her from enemies tied to his past.",
            "popularity": 456.5931,
            "poster_path": "/buPFnHZ3xQy6vZEHxbHgL1Pc6CR.jpg",
            "release_date": "2026-01-28",
            "title": "Shelter",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 140
        },
        {
            "adult": false,
            "backdrop_path": "/hYgUkH7TusddHRtelj53I6gFOWR.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 799882,
            "original_language": "en",
            "original_title": "The Bluff",
            "overview": "When her tranquil life on a remote island is shattered by the return of her vengeful former captain, a skilled ex-pirate must confront her bloody past and unleash her deadly talents to save her family from a ruthless siege.",
            "popularity": 353.5452,
            "poster_path": "/sojEzvfxR2DBcDSJyAisX8TWjov.jpg",
            "release_date": "2026-02-17",
            "title": "The Bluff",
            "video": false,
            "vote_average": 5.959,
            "vote_count": 74
        },
        {
            "adult": false,
            "backdrop_path": "/7HKpc11uQfxnw0Y8tRUYn1fsKqE.jpg",
            "genre_ids": [
                878,
                28,
                53
            ],
            "id": 1236153,
            "original_language": "en",
            "original_title": "Mercy",
            "overview": "In the near future, a detective stands on trial accused of murdering his wife. He has ninety minutes to prove his innocence to the advanced AI Judge he once championed, before it determines his fate.",
            "popularity": 308.7706,
            "poster_path": "/pyok1kZJCfyuFapYXzHcy7BLlQa.jpg",
            "release_date": "2026-01-20",
            "title": "Mercy",
            "video": false,
            "vote_average": 7.129,
            "vote_count": 558
        },
        {
            "adult": false,
            "backdrop_path": "/1gLFGrxHqQebqLWpISmoFR6XWtJ.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 1088434,
            "original_language": "en",
            "original_title": "Hellfire",
            "overview": "A drifter with a mysterious past arrives in a small town and finds the residents in the grip of a ruthless crime boss and realizes he has to help them.",
            "popularity": 210.9411,
            "poster_path": "/tQti9QTf13MfzNpXguijgNh7ojE.jpg",
            "release_date": "2026-02-05",
            "title": "Hellfire",
            "video": false,
            "vote_average": 7.057,
            "vote_count": 35
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                10749,
                18
            ],
            "id": 1523145,
            "original_language": "ru",
            "original_title": "Твое сердце будет разбито",
            "overview": "High school student Polina is saved from bullying at her new school and makes a deal with the main bully Bars: he must pretend to be her boyfriend and protect her, and she must do everything he says. During this game, the couple develops real feelings, but her family and classmates have reasons to separate the lovers.",
            "popularity": 188.376,
            "poster_path": "/iGpMm603GUKH2SiXB2S5m4sZ17t.jpg",
            "release_date": "2026-03-26",
            "title": "Your Heart Will Be Broken",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/z4hZZQ1GRuNGdeeWfKZIt8PXrmX.jpg",
            "genre_ids": [
                28
            ],
            "id": 1244975,
            "original_language": "fr",
            "original_title": "Les Orphelins",
            "overview": "Gab and Driss, childhood friends on bad terms since they left the orphanage, now have opposite lives - one is a cop with the IGPN, the other a fixer for thugs. When their first love dies in a suspicious accident, her 17-year-old daughter, Leïla, takes Gab's gun and sets off on the trail of a powerful organization willing to do anything to cover the case up. Forced to team up, the orphans must stop her before she crosses a line she can't return from...",
            "popularity": 187.8834,
            "poster_path": "/hP7mjZr2SVfjAorlRHTdV1XZmHY.jpg",
            "release_date": "2025-08-20",
            "title": "The Orphans",
            "video": false,
            "vote_average": 6.164,
            "vote_count": 58
        },
        {
            "adult": false,
            "backdrop_path": "/nTbO6UF944b0VZrgypMK5rFYRSW.jpg",
            "genre_ids": [
                9648,
                18,
                27
            ],
            "id": 680493,
            "original_language": "en",
            "original_title": "Return to Silent Hill",
            "overview": "When James receives a mysterious letter from his lost love Mary, he is drawn to Silent Hill—a once-familiar town now consumed by darkness. As he searches for her, James faces monstrous creatures and unravels a terrifying truth that will push him to the edge of his sanity.",
            "popularity": 182.089,
            "poster_path": "/dOpnJnhABTw85CG80BhBdBH9Teh.jpg",
            "release_date": "2026-01-21",
            "title": "Return to Silent Hill",
            "video": false,
            "vote_average": 5.1,
            "vote_count": 207
        },
        {
            "adult": false,
            "backdrop_path": "/vOV4Qy3g791OTzEndiSGoJwuI2M.jpg",
            "genre_ids": [
                53,
                28,
                12,
                18,
                14
            ],
            "id": 1401778,
            "original_language": "en",
            "original_title": "Turbulence",
            "overview": "Young married couple Zach and Emmy decide to take a hot air balloon trip across the Italian Dolomites to rekindle their relationship. When they and pilot Harry are joined by a third passenger, Julia, events unfold in ways they could never imagine five thousand meters in the air.",
            "popularity": 175.9658,
            "poster_path": "/jRuiKL4S9UpLma2ZlM47xIu2gbe.jpg",
            "release_date": "2025-11-26",
            "title": "Turbulence",
            "video": false,
            "vote_average": 5.451,
            "vote_count": 51
        },
        {
            "adult": false,
            "backdrop_path": "/uzZ7LUx4Bb3nZXjvBx5PiqTE7rk.jpg",
            "genre_ids": [
                28
            ],
            "id": 1301306,
            "original_language": "en",
            "original_title": "A Woman Scorned",
            "overview": "Jas and her sister Laura are interrupted on their family weekend break in the country side by a group of local men intent on terrorising them. When Laura is attacked and killed by the group, Jas discovers her lifeless body back at the cabin they've hired. She is instilled with grief, rage and fury and intent on hunting down and taking out the gang by whatever means necessary as justice for her sister's murder.",
            "popularity": 164.4347,
            "poster_path": "/dlOSBiNULMPzKIze84LDjvEN9z1.jpg",
            "release_date": "2025-06-09",
            "title": "A Woman Scorned",
            "video": false,
            "vote_average": 6.333,
            "vote_count": 12
        },
        {
            "adult": false,
            "backdrop_path": "/yWCZc2TcsCYbMMjvUIsczmQi2TX.jpg",
            "genre_ids": [
                27,
                9648,
                80
            ],
            "id": 1159559,
            "original_language": "en",
            "original_title": "Scream 7",
            "overview": "When a new Ghostface killer emerges in the quiet town where Sidney Prescott has built a new life, her darkest fears are realized as her daughter becomes the next target. Determined to protect her family, Sidney must face the horrors of her past to put an end to the bloodshed once and for all.",
            "popularity": 162.9968,
            "poster_path": "/jjyuk0edLiW8vOSnlfwWCCLpbh5.jpg",
            "release_date": "2026-02-25",
            "title": "Scream 7",
            "video": false,
            "vote_average": 5.772,
            "vote_count": 103
        },
        {
            "adult": false,
            "backdrop_path": "/zXINNssll2zsPGqd7F7Llrw7Uql.jpg",
            "genre_ids": [
                28,
                80,
                18,
                53
            ],
            "id": 1419406,
            "original_language": "zh",
            "original_title": "捕风追影",
            "overview": "Macau Police brings the tracking expert police officer out of retirement to help catch a dangerous group of professional thieves.",
            "popularity": 161.863,
            "poster_path": "/e0RU6KpdnrqFxDKlI3NOqN8nHL6.jpg",
            "release_date": "2025-08-16",
            "title": "The Shadow's Edge",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 455
        },
        {
            "adult": false,
            "backdrop_path": "/OO75q1cTWWXDmy52bB79yzpxBt.jpg",
            "genre_ids": [
                53,
                878,
                80,
                28
            ],
            "id": 1266798,
            "original_language": "fr",
            "original_title": "Chien 51",
            "overview": "In the near future, Paris is divided into three zones that separate social classes, and no one can escape ALMA, a predictive AI that has revolutionized law enforcement. When ALMA’s creator is assassinated, Salia, a top agent, and Zem, a jaded cop, are forced to work together to solve a murder that may expose the dark secrets of the system they serve.",
            "popularity": 158.069,
            "poster_path": "/olMvhbCRuhTbf6EMKxKGHi2on3L.jpg",
            "release_date": "2025-10-15",
            "title": "Dog 51",
            "video": false,
            "vote_average": 6.319,
            "vote_count": 202
        },
        {
            "adult": false,
            "backdrop_path": "/5BeOSbwt6BR7q2Fax70lF4AIshD.jpg",
            "genre_ids": [
                16,
                35,
                12,
                10751,
                9648
            ],
            "id": 1084242,
            "original_language": "en",
            "original_title": "Zootopia 2",
            "overview": "After cracking the biggest case in Zootopia's history, rookie cops Judy Hopps and Nick Wilde find themselves on the twisting trail of a great mystery when Gary De'Snake arrives and turns the animal metropolis upside down. To crack the case, Judy and Nick must go undercover to unexpected new parts of town, where their growing partnership is tested like never before.",
            "popularity": 154.6525,
            "poster_path": "/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg",
            "release_date": "2025-11-26",
            "title": "Zootopia 2",
            "video": false,
            "vote_average": 7.602,
            "vote_count": 1876
        },
        {
            "adult": false,
            "backdrop_path": "/hHDNOlATHhre4eZ7aYz5cdyJLik.jpg",
            "genre_ids": [
                27,
                53,
                878
            ],
            "id": 1272837,
            "original_language": "en",
            "original_title": "28 Years Later: The Bone Temple",
            "overview": "Dr. Kelson finds himself in a shocking new relationship - with consequences that could change the world as they know it - and Spike's encounter with Jimmy Crystal becomes a nightmare he can't escape.",
            "popularity": 149.3133,
            "poster_path": "/kK1BGkG3KAvWB0WMV1DfOx9yTMZ.jpg",
            "release_date": "2026-01-14",
            "title": "28 Years Later: The Bone Temple",
            "video": false,
            "vote_average": 7.202,
            "vote_count": 666
        },
        {
            "adult": false,
            "backdrop_path": "/ImIRPOvlxKC1jsKld5ZEpxmvmV.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 1461181,
            "original_language": "en",
            "original_title": "Hierarchy",
            "overview": "In an undisclosed area of Texas after two adoptive brothers become entangled in criminal activity, forced to evade law enforcement and the greedy Russian mafia.",
            "popularity": 146.2283,
            "poster_path": "/3KVq24NkOn98nrSEAFphnRWVWNd.jpg",
            "release_date": "2025-08-15",
            "title": "Hierarchy",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 8
        },
        {
            "adult": false,
            "backdrop_path": "/u9jE0R1nvkmdWu3bt7Op8joPywa.jpg",
            "genre_ids": [
                12,
                53,
                878
            ],
            "id": 840464,
            "original_language": "en",
            "original_title": "Greenland 2: Migration",
            "overview": "Having found the safety of the Greenland bunker after the comet Clarke decimated the Earth, the Garrity family must now risk everything to embark on a perilous journey across the wasteland of Europe to find a new home.",
            "popularity": 137.4235,
            "poster_path": "/z2tqCJLsw6uEJ8nJV8BsQXGa3dr.jpg",
            "release_date": "2026-01-07",
            "title": "Greenland 2: Migration",
            "video": false,
            "vote_average": 6.504,
            "vote_count": 519
        },
        {
            "adult": false,
            "backdrop_path": "/sK3z0Naed3H1Wuh7a21YRVMxYqt.jpg",
            "genre_ids": [
                18,
                9648,
                53
            ],
            "id": 1368166,
            "original_language": "en",
            "original_title": "The Housemaid",
            "overview": "Trying to escape her past, Millie Calloway accepts a job as a live-in housemaid for the wealthy Nina and Andrew Winchester. But what begins as a dream job quickly unravels into something far more dangerous—a sexy, seductive game of secrets, scandal, and power.",
            "popularity": 117.0776,
            "poster_path": "/cWsBscZzwu5brg9YjNkGewRUvJX.jpg",
            "release_date": "2025-12-18",
            "title": "The Housemaid",
            "video": false,
            "vote_average": 7.247,
            "vote_count": 1335
        },
        {
            "adult": false,
            "backdrop_path": "/sdZSjtGUTSN8B3al5o0f2WoQfQQ.jpg",
            "genre_ids": [
                878,
                12,
                14
            ],
            "id": 83533,
            "original_language": "en",
            "original_title": "Avatar: Fire and Ash",
            "overview": "In the wake of the devastating war against the RDA and the loss of their eldest son, Jake Sully and Neytiri face a new threat on Pandora: the Ash People, a violent and power-hungry Na'vi tribe led by the ruthless Varang. Jake's family must fight for their survival and the future of Pandora in a conflict that pushes them to their emotional and physical limits.",
            "popularity": 112.3288,
            "poster_path": "/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg",
            "release_date": "2025-12-17",
            "title": "Avatar: Fire and Ash",
            "video": false,
            "vote_average": 7.276,
            "vote_count": 1834
        },
        {
            "adult": false,
            "backdrop_path": "/bAFnjhweXxHUWjmFzMTuX12Ud3b.jpg",
            "genre_ids": [
                53
            ],
            "id": 1199193,
            "original_language": "en",
            "original_title": "Pose",
            "overview": "Isolated in a grand country manor, a reclusive artist spends a passionate and paranoid weekend with his ex-lover, an obsessive fan, and a potential muse. Hoping to spark a new wave of artistic brilliance over the course of a few tumultuous days, filled with chaos and revelation not all of them will make it out alive.",
            "popularity": 107.9384,
            "poster_path": "/qhyyyWrHUbl6QG4udAJj17CBa5.jpg",
            "release_date": "2026-02-25",
            "title": "Pose",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 3
        },
        {
            "adult": false,
            "backdrop_path": "/hoqE4Saa4fQyWhUxws2Lw4qv2oz.jpg",
            "genre_ids": [],
            "id": 937101,
            "original_language": "zh",
            "original_title": "動物感傷の清晨",
            "overview": "A provocative erotic drama about a Japanese food delivery man, a Taiwanese prostitute and a Filipino cleaner who are swept up by their insatiable appetites for sex.",
            "popularity": 104.7159,
            "poster_path": "/8lkpsMdOODEoLAxbhnzjEhoZWwt.jpg",
            "release_date": "2023-10-13",
            "title": "In the Morning of La Petite Mort",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        }
    ],
    [
        {
            "adult": false,
            "backdrop_path": "/7mkUu1F2hVUNgz24xO8HPx0D6mK.jpg",
            "genre_ids": [
                18,
                10765,
                10759
            ],
            "id": 224372,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "A Knight of the Seven Kingdoms",
            "overview": "A century before the events of Game of Thrones, two unlikely heroes wandered Westeros: a young, naive but courageous knight, Ser Duncan the Tall, and his diminutive squire, Egg. Set in an age when the Targaryen line still holds the Iron Throne and the last dragon has not yet passed from living memory, great destinies, powerful foes, and dangerous exploits await these improbable and incomparable friends.",
            "popularity": 289.0133,
            "poster_path": "/k8yARbD9iYn2nRX2HvsopfKDN2r.jpg",
            "first_air_date": "2026-01-18",
            "name": "A Knight of the Seven Kingdoms",
            "vote_average": 8.483,
            "vote_count": 521
        },
        {
            "adult": false,
            "backdrop_path": "/luUTaPpTBM8BjP4wgCLxNIPkx6k.jpg",
            "genre_ids": [
                10759,
                18
            ],
            "id": 19530,
            "origin_country": [
                "TW",
                "CN"
            ],
            "original_language": "zh",
            "original_name": "霹靂布袋戲",
            "overview": "Pili is a puppet show from Taiwan. It is made by Pili International Multimedia. The TV series started in 1985, and it still continues today. It is one of the most popular TV shows in Taiwan. Pili puppet show is performed by many kinds of puppets, some of them are cool, some are intelligent, and some are funny. Unlike traditional puppet shows, Pili puppet show uses state-of-the-art animation to help present its fighting art. The delicate design of the appearance and characteristics of each puppet has made Pili puppet show a well-known entertainment in Taiwan.",
            "popularity": 313.6589,
            "poster_path": "/sBVfyRYPmKSARRTodsTbwHqgcRA.jpg",
            "first_air_date": "1988-06-01",
            "name": "Pili",
            "vote_average": 6.9,
            "vote_count": 7
        },
        {
            "adult": false,
            "backdrop_path": "/jP0Rhj9OTPDAwQlHQwOLFDdeE8t.jpg",
            "genre_ids": [
                18
            ],
            "id": 1416,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Grey's Anatomy",
            "overview": "Follows the personal and professional lives of a group of doctors at Seattle's Grey Sloan Memorial Hospital.",
            "popularity": 273.3314,
            "poster_path": "/hjJkrLXhWvGHpLeLBDFznpBTY1S.jpg",
            "first_air_date": "2005-03-27",
            "name": "Grey's Anatomy",
            "vote_average": 8.21,
            "vote_count": 10782
        },
        {
            "adult": false,
            "backdrop_path": "/butPVWgcbtAjL9Z7jU7Xj1KA8KD.jpg",
            "genre_ids": [
                10767,
                35
            ],
            "id": 22980,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Watch What Happens Live with Andy Cohen",
            "overview": "Bravo network executive Andy Cohen discusses pop culture topics with celebrities and reality show personalities.",
            "popularity": 264.8362,
            "poster_path": "/onSD9UXfJwrMXWhq7UY7hGF2S1h.jpg",
            "first_air_date": "2009-07-16",
            "name": "Watch What Happens Live with Andy Cohen",
            "vote_average": 5.031,
            "vote_count": 81
        },
        {
            "adult": false,
            "backdrop_path": "/tc7canPSAn2X14hYi6Rl3gZm1o4.jpg",
            "genre_ids": [
                80,
                18
            ],
            "id": 549,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Law & Order",
            "overview": "In cases ripped from the headlines, police investigate serious and often deadly crimes, weighing the evidence and questioning the suspects until someone is taken into custody. The district attorney's office then builds a case to convict the perpetrator by proving the person guilty beyond a reasonable doubt. Working together, these expert teams navigate all sides of the complex criminal justice system to make New York a safer place.",
            "popularity": 236.3503,
            "poster_path": "/haJ9eHytVO3H3JooMJG1DiWwDNm.jpg",
            "first_air_date": "1990-09-13",
            "name": "Law & Order",
            "vote_average": 7.34,
            "vote_count": 668
        },
        {
            "adult": false,
            "backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
            "genre_ids": [
                10763
            ],
            "id": 94722,
            "origin_country": [
                "DE"
            ],
            "original_language": "de",
            "original_name": "Tagesschau",
            "overview": "German daily news program, the oldest still existing program on German television.",
            "popularity": 249.5811,
            "poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
            "first_air_date": "1952-12-26",
            "name": "Tagesschau",
            "vote_average": 6.8,
            "vote_count": 245
        },
        {
            "adult": false,
            "backdrop_path": "/6iNWfGVCEfASDdlNb05TP5nG0ll.jpg",
            "genre_ids": [
                80,
                18,
                35
            ],
            "id": 79744,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "The Rookie",
            "overview": "Starting over isn't easy, especially for small-town guy John Nolan who, after a life-altering incident, is pursuing his dream of being an LAPD officer. As the force's oldest rookie, he’s met with skepticism from some higher-ups who see him as just a walking midlife crisis.",
            "popularity": 247.3651,
            "poster_path": "/70kTz0OmjjZe7zHvIDrq2iKW7PJ.jpg",
            "first_air_date": "2018-10-16",
            "name": "The Rookie",
            "vote_average": 8.5,
            "vote_count": 2984
        },
        {
            "adult": false,
            "backdrop_path": "/ro0tlgnsco4SwbdAgmscLkSlMSL.jpg",
            "genre_ids": [
                18,
                9648,
                10765
            ],
            "id": 1622,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Supernatural",
            "overview": "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
            "popularity": 300.6763,
            "poster_path": "/u40gJarLPlIkwouKlzGdobQOV9k.jpg",
            "first_air_date": "2005-09-13",
            "name": "Supernatural",
            "vote_average": 8.305,
            "vote_count": 8241
        },
        {
            "adult": false,
            "backdrop_path": "/nn3SuLTO4hum8yAxaY4ql8h6kRk.jpg",
            "genre_ids": [
                80,
                18,
                10759
            ],
            "id": 4614,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "NCIS",
            "overview": "From murder and espionage to terrorism and stolen submarines, a team of special agents investigates any crime that has any connection to Navy and Marine Corps personnel, regardless of rank or position.",
            "popularity": 210.7499,
            "poster_path": "/mBcu8d6x6zB1el3MPNl7cZQEQ31.jpg",
            "first_air_date": "2003-09-23",
            "name": "NCIS",
            "vote_average": 7.625,
            "vote_count": 2459
        },
        {
            "adult": false,
            "backdrop_path": "/obtdxPgmfykYwVnvuYXC5f2xKlQ.jpg",
            "genre_ids": [
                80,
                18,
                9648
            ],
            "id": 2734,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Law & Order: Special Victims Unit",
            "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
            "popularity": 198.3664,
            "poster_path": "/iofokHZoUB4Qhik4PflvJl8TT6a.jpg",
            "first_air_date": "1999-09-20",
            "name": "Law & Order: Special Victims Unit",
            "vote_average": 7.939,
            "vote_count": 4132
        },
        {
            "adult": false,
            "backdrop_path": "/ukzJIPKTTSUzdr7jQoGKdrvZGk7.jpg",
            "genre_ids": [
                10751,
                16,
                35
            ],
            "id": 456,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "The Simpsons",
            "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
            "popularity": 300.4705,
            "poster_path": "/uWpG7GqfKGQqX4YMAo3nv5OrglV.jpg",
            "first_air_date": "1989-12-17",
            "name": "The Simpsons",
            "vote_average": 8.012,
            "vote_count": 10587
        },
        {
            "adult": false,
            "backdrop_path": "/6umsRLI7t0ydFwCl0JNEIO0q2LH.jpg",
            "genre_ids": [
                18
            ],
            "id": 91239,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Bridgerton",
            "overview": "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
            "popularity": 246.0189,
            "poster_path": "/uXTg565ahu9RwonCX1V2Hex1NU6.jpg",
            "first_air_date": "2020-12-25",
            "name": "Bridgerton",
            "vote_average": 8.07,
            "vote_count": 3178
        },
        {
            "adult": false,
            "backdrop_path": "/8zbAoryWbtH0DKdev8abFAjdufy.jpg",
            "genre_ids": [
                10765,
                9648,
                10759
            ],
            "id": 66732,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Stranger Things",
            "overview": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
            "popularity": 181.2454,
            "poster_path": "/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
            "first_air_date": "2016-07-15",
            "name": "Stranger Things",
            "vote_average": 8.579,
            "vote_count": 20724
        },
        {
            "adult": false,
            "backdrop_path": "/gmECX1DvFgdUPjtio2zaL8BPYPu.jpg",
            "genre_ids": [
                16,
                10759,
                10765
            ],
            "id": 95479,
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "呪術廻戦",
            "overview": "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.",
            "popularity": 183.9706,
            "poster_path": "/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg",
            "first_air_date": "2020-10-03",
            "name": "JUJUTSU KAISEN",
            "vote_average": 8.56,
            "vote_count": 4218
        },
        {
            "adult": false,
            "backdrop_path": "/l7wShoIdIUwaDIbsHno9pO5MZXT.jpg",
            "genre_ids": [
                16,
                35
            ],
            "id": 1434,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Family Guy",
            "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
            "popularity": 227.0426,
            "poster_path": "/3PFsEuAiyLkWsP4GG6dIV37Q6gu.jpg",
            "first_air_date": "1999-01-31",
            "name": "Family Guy",
            "vote_average": 7.391,
            "vote_count": 4810
        },
        {
            "adult": false,
            "backdrop_path": "/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg",
            "genre_ids": [
                10765,
                18,
                10759
            ],
            "id": 1399,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Game of Thrones",
            "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
            "popularity": 174.9923,
            "poster_path": "/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
            "first_air_date": "2011-04-17",
            "name": "Game of Thrones",
            "vote_average": 8.459,
            "vote_count": 26334
        },
        {
            "adult": false,
            "backdrop_path": "/arzEXF03COX1Yj39riYGSEfgNtY.jpg",
            "genre_ids": [
                10766,
                35,
                18
            ],
            "id": 14424,
            "origin_country": [
                "BR"
            ],
            "original_language": "pt",
            "original_name": "Malhação",
            "overview": "Malhação is a Brazilian television series for the teenage audience. The soap started in 1995, and was set in a fictional Gym Club called Malhação on Barra da Tijuca, Rio de Janeiro. Through the years the location varied slightly. Although the name of the soap remains the same, it is now set in the Múltipla Escolha High School.",
            "popularity": 156.8707,
            "poster_path": "/bF24r2FxsjzgkJcrbBU8RC9JVoU.jpg",
            "first_air_date": "1995-04-24",
            "name": "Young Hearts",
            "vote_average": 6.2,
            "vote_count": 34
        },
        {
            "adult": false,
            "backdrop_path": "/qFfWFwfaEHzDLWLuttWiYq7Poy2.jpg",
            "genre_ids": [
                10767
            ],
            "id": 2261,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "The Tonight Show Starring Johnny Carson",
            "overview": "The Tonight Show Starring Johnny Carson is a talk show hosted by Johnny Carson under The Tonight Show franchise from 1962 to 1992. It originally aired during late-night. For its first ten years, Carson's Tonight Show was based in New York City with occasional trips to Burbank, California; in May 1972, the show moved permanently to Burbank, California. In 2002, The Tonight Show Starring Johnny Carson was ranked #12 on TV Guide's 50 Greatest TV Shows of All Time.",
            "popularity": 146.6934,
            "poster_path": "/uSvET5YUvHNDIeoCpErrbSmasFb.jpg",
            "first_air_date": "1962-10-01",
            "name": "The Tonight Show Starring Johnny Carson",
            "vote_average": 7.5,
            "vote_count": 87
        },
        {
            "adult": false,
            "backdrop_path": "/c2oiRa7V3bQzof4wVGzLXtWJ5QU.jpg",
            "genre_ids": [
                10759,
                16,
                35,
                10765,
                10762,
                10751
            ],
            "id": 65733,
            "origin_country": [
                "JP"
            ],
            "original_language": "ja",
            "original_name": "ドラえもん",
            "overview": "Robotic cat Doraemon is sent back in time from the 22nd century to protect 10-year-old Noby, a lazy and uncoordinated boy who is destined to have a tragic future. Doraemon can create secret gadgets from a pocket on his stomach, but they usually cause more bad than good because of Noby's propensity to misuse them.",
            "popularity": 233.2796,
            "poster_path": "/9ZN1P32SHviL3SV51qLivxycvcx.jpg",
            "first_air_date": "2005-04-22",
            "name": "Doraemon",
            "vote_average": 8.051,
            "vote_count": 206
        },
        {
            "adult": false,
            "backdrop_path": "/w88B4ooZ2LSYPw5107JOkjvI8PI.jpg",
            "genre_ids": [
                80,
                18,
                9648
            ],
            "id": 4057,
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "Criminal Minds",
            "overview": "An elite team of FBI profilers analyze the country's most twisted criminal minds, anticipating their next moves before they strike again. The Behavioral Analysis Unit's most experienced agent is David Rossi, a founding member of the BAU who returns to help the team solve new cases.",
            "popularity": 157.7324,
            "poster_path": "/gigxjNnACiXAfrwoMox5WJFgc0I.jpg",
            "first_air_date": "2005-09-22",
            "name": "Criminal Minds",
            "vote_average": 8.298,
            "vote_count": 4009
        }
    ],
    [
        {
            "adult": false,
            "backdrop_path": "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 278,
            "original_language": "en",
            "original_title": "The Shawshank Redemption",
            "overview": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            "popularity": 34.148,
            "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
            "release_date": "1994-09-23",
            "title": "The Shawshank Redemption",
            "video": false,
            "vote_average": 8.715,
            "vote_count": 29822
        },
        {
            "adult": false,
            "backdrop_path": "/tSPT36ZKlP2WVHJLM4cQPLSzv3b.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 238,
            "original_language": "en",
            "original_title": "The Godfather",
            "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "popularity": 36.1427,
            "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            "release_date": "1972-03-14",
            "title": "The Godfather",
            "video": false,
            "vote_average": 8.7,
            "vote_count": 22520
        },
        {
            "adult": false,
            "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 240,
            "original_language": "en",
            "original_title": "The Godfather Part II",
            "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "popularity": 18.4089,
            "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
            "release_date": "1974-12-20",
            "title": "The Godfather Part II",
            "video": false,
            "vote_average": 8.571,
            "vote_count": 13630
        },
        {
            "adult": false,
            "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
            "genre_ids": [
                18,
                36,
                10752
            ],
            "id": 424,
            "original_language": "en",
            "original_title": "Schindler's List",
            "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
            "popularity": 14.7986,
            "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
            "release_date": "1993-12-15",
            "title": "Schindler's List",
            "video": false,
            "vote_average": 8.566,
            "vote_count": 17152
        },
        {
            "adult": false,
            "backdrop_path": "/w4bTBXcqXc2TUyS5Fc4h67uWbPn.jpg",
            "genre_ids": [
                18
            ],
            "id": 389,
            "original_language": "en",
            "original_title": "12 Angry Men",
            "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
            "popularity": 14.7111,
            "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
            "release_date": "1957-04-10",
            "title": "12 Angry Men",
            "video": false,
            "vote_average": 8.556,
            "vote_count": 9774
        },
        {
            "adult": false,
            "backdrop_path": "/ukfI9QkU1aIhOhKXYWE9n3z1mFR.jpg",
            "genre_ids": [
                16,
                10751,
                14
            ],
            "id": 129,
            "original_language": "ja",
            "original_title": "千と千尋の神隠し",
            "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
            "popularity": 21.0099,
            "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
            "release_date": "2001-07-20",
            "title": "Spirited Away",
            "video": false,
            "vote_average": 8.534,
            "vote_count": 18001
        },
        {
            "adult": false,
            "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 155,
            "original_language": "en",
            "original_title": "The Dark Knight",
            "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            "popularity": 28.1763,
            "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            "release_date": "2008-07-16",
            "title": "The Dark Knight",
            "video": false,
            "vote_average": 8.527,
            "vote_count": 35249
        },
        {
            "adult": false,
            "backdrop_path": "/zQDFHYNVVVp9OAYSixYAG1SyX1l.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 19404,
            "original_language": "hi",
            "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
            "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
            "popularity": 7.1639,
            "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
            "release_date": "1995-10-20",
            "title": "Dilwale Dulhania Le Jayenge",
            "video": false,
            "vote_average": 8.518,
            "vote_count": 4562
        },
        {
            "adult": false,
            "backdrop_path": "/b6HWTOxn1xevvyHU2K9ICvaRU6g.jpg",
            "genre_ids": [
                14,
                18,
                80
            ],
            "id": 497,
            "original_language": "en",
            "original_title": "The Green Mile",
            "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
            "popularity": 16.9771,
            "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
            "release_date": "1999-12-10",
            "title": "The Green Mile",
            "video": false,
            "vote_average": 8.504,
            "vote_count": 18901
        },
        {
            "adult": false,
            "backdrop_path": "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
            "genre_ids": [
                12,
                14,
                28
            ],
            "id": 122,
            "original_language": "en",
            "original_title": "The Lord of the Rings: The Return of the King",
            "overview": "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
            "popularity": 23.1643,
            "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
            "release_date": "2003-12-17",
            "title": "The Lord of the Rings: The Return of the King",
            "video": false,
            "vote_average": 8.494,
            "vote_count": 26090
        },
        {
            "adult": false,
            "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
            "genre_ids": [
                35,
                53,
                18
            ],
            "id": 496243,
            "original_language": "ko",
            "original_title": "기생충",
            "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            "popularity": 22.4022,
            "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            "release_date": "2019-05-30",
            "title": "Parasite",
            "video": false,
            "vote_average": 8.493,
            "vote_count": 20199
        },
        {
            "adult": false,
            "backdrop_path": "/96hiUXEuYsu4tcnvlaY8tEMFM0m.jpg",
            "genre_ids": [
                53,
                80,
                35
            ],
            "id": 680,
            "original_language": "en",
            "original_title": "Pulp Fiction",
            "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
            "popularity": 21.7326,
            "poster_path": "/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
            "release_date": "1994-09-10",
            "title": "Pulp Fiction",
            "video": false,
            "vote_average": 8.486,
            "vote_count": 29756
        },
        {
            "adult": false,
            "backdrop_path": "/8x9iKH8kWA0zdkgNdpAew7OstYe.jpg",
            "genre_ids": [
                16,
                10749,
                18
            ],
            "id": 372058,
            "original_language": "ja",
            "original_title": "君の名は。",
            "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
            "popularity": 17.9803,
            "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
            "release_date": "2016-08-26",
            "title": "Your Name.",
            "video": false,
            "vote_average": 8.479,
            "vote_count": 12314
        },
        {
            "adult": false,
            "backdrop_path": "/2ssWTSVklAEc98frZUQhgtGHx7s.jpg",
            "genre_ids": [
                12,
                18,
                878
            ],
            "id": 157336,
            "original_language": "en",
            "original_title": "Interstellar",
            "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            "popularity": 43.0052,
            "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            "release_date": "2014-11-05",
            "title": "Interstellar",
            "video": false,
            "vote_average": 8.468,
            "vote_count": 38980
        },
        {
            "adult": false,
            "backdrop_path": "/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg",
            "genre_ids": [
                37
            ],
            "id": 429,
            "original_language": "it",
            "original_title": "Il buono, il brutto, il cattivo",
            "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
            "popularity": 14.9352,
            "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
            "release_date": "1966-12-23",
            "title": "The Good, the Bad and the Ugly",
            "video": false,
            "vote_average": 8.468,
            "vote_count": 9444
        },
        {
            "adult": false,
            "backdrop_path": "/67HggiWaP9ZLv5sPYmyRV37yAJM.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 13,
            "original_language": "en",
            "original_title": "Forrest Gump",
            "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
            "popularity": 20.7911,
            "poster_path": "/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
            "release_date": "1994-06-23",
            "title": "Forrest Gump",
            "video": false,
            "vote_average": 8.462,
            "vote_count": 29306
        },
        {
            "adult": false,
            "backdrop_path": "/gILte6Zd7m1YneIr6MVhh30S9pr.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 769,
            "original_language": "en",
            "original_title": "GoodFellas",
            "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
            "popularity": 20.2441,
            "poster_path": "/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg",
            "release_date": "1990-09-12",
            "title": "GoodFellas",
            "video": false,
            "vote_average": 8.452,
            "vote_count": 14056
        },
        {
            "adult": false,
            "backdrop_path": "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
            "genre_ids": [
                28,
                18
            ],
            "id": 346,
            "original_language": "ja",
            "original_title": "七人の侍",
            "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
            "popularity": 7.5935,
            "poster_path": "/lOMGc8bnSwQhS4XyE1S99uH8NXf.jpg",
            "release_date": "1954-04-26",
            "title": "Seven Samurai",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 4122
        },
        {
            "adult": false,
            "backdrop_path": "/aHaqZpOL7UyVu0nKqp3SMz0o2E1.jpg",
            "genre_ids": [
                16,
                18,
                10752
            ],
            "id": 12477,
            "original_language": "ja",
            "original_title": "火垂るの墓",
            "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
            "popularity": 0.0093,
            "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
            "release_date": "1988-04-16",
            "title": "Grave of the Fireflies",
            "video": false,
            "vote_average": 8.444,
            "vote_count": 6375
        },
        {
            "adult": false,
            "backdrop_path": "/6aNKD81RHR1DqUUa8kOZ1TBY1Lp.jpg",
            "genre_ids": [
                35,
                18
            ],
            "id": 637,
            "original_language": "it",
            "original_title": "La vita è bella",
            "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
            "popularity": 8.9163,
            "poster_path": "/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg",
            "release_date": "1997-12-20",
            "title": "Life Is Beautiful",
            "video": false,
            "vote_average": 8.44,
            "vote_count": 13819
        }
    ]
]
export default function Teste(){
return(<>
<Header/>
<div className='w-screen flex items-center max-sm:overflow-y-scroll'>
<div className='max-sm:hidden  z-0 h-[5%] w-screen absolute flex justify-between items-center'>
</div>
<div   className='hover:transition-all flex scroll overflow-x-hidden max-[640px]:overflow-x-scroll'>

</div>
{data.length>1?data[0].map(e=><img   className='hover:bg-blue-500 cursor-pointer p-4 w-1/4 shadow-2xl  scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):''}
</div>
</>)
}



