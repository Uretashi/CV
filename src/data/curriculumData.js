import { MentionEnum } from "../enums/MentionEnum";


export const curriculumData = [
    {
        id: 1,
        schoolTitle: "3WA Academy",
        schoolLogo: "./school/logo1.jpg",
        level: "BAC+2",
        levelName: "Développeur d'application Web",
        mention: MentionEnum.BIEN,
        city: "Aix-en-Provence",
        date: new Date("10/10/2020").toLocaleDateString("fr")
    },
    {
        id: 2,
        schoolTitle: "Estiam",
        schoolLogo: "./school/logo2.png",
        level: "BAC+3 - alternance",
        levelName: "Administrateur système d'information",
        mention: MentionEnum.TRESBIEN,
        city: "Lyon",
        date: new Date("10/10/2021").toLocaleDateString("fr")
    }
]