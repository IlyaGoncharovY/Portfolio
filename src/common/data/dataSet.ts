import {
    calendarAppImg,
    cardImage,
    chatImg,
    github1,
    JSONLogo1,
    linkedin1,
    social,
    telegram1,
    todolistImg
} from "./urlImg";

export type ProjectsType = {
    title: string
    description: string
    url: string
    style: { backgroundImage: string; }
}

export type SkillSetType = {
    title: string
    iconValue: string
}

export type SocialSetType = {
    href: string
    style: { backgroundImage: string; }
}

export type CommonSetType = {
    title: string
    description: string
}


export const Projects: ProjectsType[] = [
    {
        title: "Todolist",
        description: "ability to create and edit tasks",
        url: "https://ilyagoncharovy.github.io/todolist-ts/",
        style: todolistImg
    },
    {
        title: "Learn card",
        description: "working with maps for training, in any field",
        url: "https://ilyagoncharovy.github.io/fridays-project/",
        style: cardImage
    },
    {
        title: "Social network",
        description: "social network, training project",
        url: "https://ilyagoncharovy.github.io/SocialNetworkHomeWork/",
        style: social
    },
    {
        title: "Chat",
        description: "chat on websockets",
        url: "https://github.com/IlyaGoncharovY/my-chat",
        style: chatImg
    },
    {
        title: "Posts {JSON}",
        description: "implementation of the JSON api",
        url: "https://IlyaGoncharovY.github.io/Posts",
        style: JSONLogo1
    },
    {
        title: "Calendar-app",
        description: "calendar for tasks",
        url: "https://github.com/IlyaGoncharovY/calendar-app",
        style: calendarAppImg
    }
]

export const SkillSet: SkillSetType[] = [
    {title: "React", iconValue: "vscode-icons:file-type-reactts"},
    {title: "Redux", iconValue: "logos:redux"},
    {title: "Type-script", iconValue: "vscode-icons:file-type-typescript-official"},
    {title: "Java-Script", iconValue: "vscode-icons:file-type-js-official"},
    {title: "HTML", iconValue: "vscode-icons:file-type-html"},
    {title: "CSS", iconValue: "logos:css-3"},
    {title: "Rest-API", iconValue: "dashicons:rest-api"},
    {title: "Git-hub", iconValue: "logos:git-icon"},
    {title: "SASS", iconValue: "vscode-icons:file-type-sass"},
    {title: "Material-Ui", iconValue: "logos:material-ui"},
    {title: "Icon-ify", iconValue: "simple-icons:iconify"}
]

export const SocialSet: SocialSetType[] = [
    {href: "https://t.me/ilyaGoncharov93", style: telegram1},
    {href: "https://github.com/IlyaGoncharovY", style: github1},
    {href: "https://www.linkedin.com/in/ilyagoncharovy/", style: linkedin1},
]

export const EducationSet: CommonSetType[] = [
    {
        title: "IT-Incubator",
        description: "Profession: Front-end developer."
    },
    {
        title: "Moscow University of Finance and Industry",
        description: "Profession: Infocommunication technologies and communication systems."
    },
    {
        title: "College of Communication No. 54",
        description: "Profession: Communication equipment maintenance technician."
    }
]

export const InfoLeftSet: CommonSetType[] = [
    {title: "First Name :", description: "Ilya"},
    {title: "Last Name :", description: "Goncharov"},
    {title: "Age :", description: "30 Years"}
]

export const InfoRightSet: CommonSetType[] = [
    {title: "Address :", description: "Moscow"},
    {title: "Phone :", description: "+79653080059"},
    {title: "Email:", description: "goncharov.i93@mail.ru"}
]
