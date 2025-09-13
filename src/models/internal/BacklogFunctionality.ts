import BacklogEntity from "@/models/internal/BacklogEntity.ts";
import TTLockReference from "@/models/internal/TTLockReference.ts";

export default class BacklogFunctionality {
    protected code: string = ''; //4-word functionality acronym
    protected name: string = ''; //The full name of the functionality
    protected description: string = '';
    protected argument: BacklogEntity;

    public constructor(){
       this.argument = new BacklogEntity();
    }
    public setDescription(description: string): BacklogFunctionality{
        this.description = description;
        return this;
    }
    public getDescription(): string{
        return this.description;
    }
    public setName(name: string): BacklogFunctionality {
        this.name = name;
        return this;
    }
    public getName(): string {
        return this.name;
    }
    public get short_name(): string {
        return `${this.code}:${this.argument.code}`;
    }
    public static asDownloadImage(entity: BacklogEntity): BacklogFunctionality{
        const buffer = new BacklogFunctionality();
        buffer.code = 'DWNL' //DownLoaD
        buffer.argument = entity;
        return buffer;
    }
    public static asGotoButton(screen: TTLockReference): BacklogFunctionality{
        const buffer = new BacklogFunctionality();
        buffer.code = 'GOTO'
        buffer.argument = BacklogEntity.asRedirect(screen);
        return buffer;
    }

}