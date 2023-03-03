import {cardImage, chatImg, github1, linkedin1, social, telegram1, todolistImg} from "./urlImg";

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