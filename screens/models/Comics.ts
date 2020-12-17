

// export class Comics {
//     id: string;
//     title: string;
//     coverImg: string;
//     price: number;
//     description: string;
//     constructor(id: string, title: string, coverImg: string, price: number, description: string) {
//         this.id = id;
//         this.title = title;
//         this.coverImg = coverImg;
//         this.price = price;
//         this.description = description;
//     }
// }

export type ComicsType = Comics[];
export type ComicType = Comics;

export interface Comics {
    id: number | string;
    title: string;
    coverImg: string;
    price: number;
    description: string;
}
export const COMICS: ComicsType = [
    {
        id: 0,
        title: "Naruto",
        coverImg: "https://upload.wikimedia.org/wikipedia/it/3/3e/Naruto1.jpg",
        price: 15,
        description: "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, literally meaning: Seventh Fire Shadow)."
    },

    {
        id: 1,
        title: "Ken il guerriero",
        coverImg: "https://upload.wikimedia.org/wikipedia/it/thumb/b/b2/Ken_il_guerriero.jpg/295px-Ken_il_guerriero.jpg",
        price: 12,
        description: "Un conflitto mondiale negli anni novanta del XX secolo ha causato il collasso della civiltà e una devastazione ambientale in tutto il pianeta. I sopravvissuti alle esplosioni atomiche sono ridotti a vivere in piccole comunità in oasi in mezzo al deserto, assediati da bande di predoni, che saccheggiano e distruggono tutto ciò che incontrano. Kenshiro, 64º successore della scuola di arti marziali , l'Hokuto Shinken, è un maestro di arti marziali di una tecnica di combattimento che può causare effetti devastanti negli avversari o permettere il controllo sul corpo o la sua guarigione mediante la pressione opportuna in determinati punti (detti tsubo). Se inizialmente lo scopo di Kenshiro sembra solo la lotta per potersi ricongiungere con la propria fidanzata rapita, ben presto verrà rivelato che il ragazzo ha nelle sue mani il destino di coloro che sono scampati alla catastrofe."
    },

    {
        id: 2,
        title: "Death Note",
        coverImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Death_Note_Vol_1.jpg/220px-Death_Note_Vol_1.jpg',
        price: 13,
        description: "Death Note (stylized as DEATH NOTE) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who stumbles across a mysterious otherworldly notebook: the Death Note, which belonged to the Shinigami Ryuk and grants the user the supernatural ability to kill anyone whose name is written in its pages. The series centers around Light's subsequent attempts to use the Death Note to carry out a worldwide massacre of individuals whom he deems morally unworthy of life to change the world into a utopian society without crime, using the alias of a god-like vigilante named Kira and the subsequent efforts of an elite task-force of law enforcement officers, consisting of members of the Japanese police force, led by L, an enigmatic international detective whose past is shrouded in mystery, to apprehend him and end his reign of terror."
    },


    {
        id: 3,
        title: "One piece",
        // coverImg: "../assets/dummy-images/onepiece.png",
        coverImg: "https://upload.wikimedia.org/wikipedia/it/thumb/5/5e/One_Piece_vol_1.jpg/294px-One_Piece_vol_1.jpg",
        price: 7,
        description: "Monkey D. Rufy è un giovane pirata sognatore che da piccolo ha inavvertitamente mangiato il frutto del diavolo Gom Gom, diventando così un uomo di gomma con la capacità di allungarsi e deformarsi a piacimento. Con l'obiettivo di diventare il Re dei pirati (海賊王 Kaizoku Ō?) e di ritrovare il leggendario tesoro One Piece (ひとつなぎの大秘宝ワンピース Wan Pīsu?), nascosto secondo le leggende da Gol D. Roger sull'isola di Raftel alla fine della Rotta Maggiore, Rufy si mette in mare e riunisce intorno a sé una ciurma. Entrano così a far parte della ciurma di Cappello di paglia (麦わらの一味 Mugiwara no ichimi?): Roronoa Zoro, un tenace spadaccino dalla particolare tecnica a tre spade; Nami, una ladra, ma soprattutto abile navigatrice; Usop, un cecchino pavido e bugiardo; Sanji, un cuoco galantuomo con un debole per le donne; TonyTony Chopper, una renna antropomorfa e medico di bordo; Nico Robin, un'archeologa che desidera fare luce su un periodo oscuro della storia del mondo; Franky, un carpentiere cyborg; Brook, uno scheletro musicista e schermidore, e Jinbe, uomo-pesce ex membro della Flotta dei Sette ed esperto timoniere. Nel loro viaggio attraverso il Mare Orientale e la prima parte della Rotta Maggiore Rufy e compagni vivono numerose avventure, trovano alleati e affrontano avversari pirati o della Marina che intendono fermarli."
    },

    {
        id: 4,
        title: "Attacco dei Giganti",
        coverImg: "https://upload.wikimedia.org/wikipedia/it/thumb/4/4d/L%27attacco_dei_giganti_copertina.jpeg/290px-L%27attacco_dei_giganti_copertina.jpeg",
        price: 9,
        description: "It is set in a world where humanity lives inside cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the destruction of his hometown and the death of his mother."
    },
    {
        id: 5,
        title: "Lupin",
        coverImg: "https://upload.wikimedia.org/wikipedia/it/thumb/7/74/Le_avventure_di_Lupin_III.png/390px-Le_avventure_di_Lupin_III.png",
        price: 3.99,
        description: "Arsène Lupin is a fictional gentleman thief and master of disguise created in 1905 by French writer Maurice Leblanc. He was originally called Arsène Lopin, until a local politician of the same name protested. The character was first introduced in a series of short stories serialized in the magazine Je sais tout. "
    },
];

