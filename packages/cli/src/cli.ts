import * as inquirer from 'inquirer';

export const cli: any = () => {
    const prompt: inquirer.PromptModule = inquirer.createPromptModule();

    prompt([{
        type: "input",
        name: "mail",
    }, {
        type: "password",
        name: "password",
    }]).then((data: any) => console.log(data));
}
