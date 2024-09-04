import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';


export class Opportunities {
    @IsNotEmpty({ message: "Requis" })
    @IsString({ message: "Title doit être une chaîne de caractuère" })
    @MinLength(3, {
        message: 'titre trop court',
    })
    title: string;

    @IsNotEmpty({ message: "Requis" })
    @IsString({ message: "Description doit être une chaîne de caractuère" })
    description: string;

    @IsNotEmpty({ message: "Requis" })
    @IsString({ message: "Type doit être une chaîne de caractuère" })
    type: string;

    @IsNotEmpty({ message: "Requis" })
    @IsString({ message: "Sector doit être une chaîne de caractuère" })
    sector: string;

    @IsNotEmpty({ message: "Requis" })
    @IsString({ message: "Target doit être une chaîne de caractuère" })
    target: string;

    @IsNotEmpty({ message: "Requis" })
    @IsString({ message: "Advantages doit être une chaîne de caractuère" })
    advantages: string;

    @IsNotEmpty({ message: "Requis" })
    @IsString({ message: "selectionProcess doit être une chaîne de caractuère" })
    selectionProcess: string;

    @IsNotEmpty({ message: "Requis" })
    @IsString({ message: "Due date doit être une chaîne de caractuère" })
    dueDate: Date;

    @IsNotEmpty({ message: "Requis" })
    @IsNumber({}, { message: "Duration doit être un nombre" })
    duration: number;

    @IsNotEmpty({ message: "Requis" })
    @IsString({ message: "Location doit être une chaîne de caractuère" })
    location: string;

    @IsNotEmpty({ message: "Requis" })
    @IsString({ message: "Application link doit être une chaîne de caractuère" })
    applicationLink: string;
}