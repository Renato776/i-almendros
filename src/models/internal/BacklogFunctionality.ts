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
        return this
    }
    public setName(name: string): BacklogFunctionality {
        this.name = name;
        return this;
    }
    public get short_name_separator(): string {
        return ':';
    }
    public get short_name_fragments(): string[] {
        const parts: Array<string> = [];
        switch (this.code) {
            case 'LINK':
            case 'DESIGN':
                parts.push(this.code, this.argument.getName());
                break;
            default:
                parts.push(this.code, this.argument.getCode());
                break;
        }
        return parts;
    }
    public get short_name_fragments_display(): string [] {
        const res = this.short_name_fragments;
        const solution: Array<string> = [];
        for(let i = 0; i < res.length; i++) {
            solution.push(res[i]);
            if(i != res.length - 1) {
                solution.push(this.short_name_separator);
            }
        }
        return solution;
    }
    public get short_name(): string {
        return this.short_name_fragments.join(this.short_name_separator);
    }
    public get isLink(): boolean {
        return this.code === 'LINK';
    }
    public get isDesign(): boolean {
        return this.code === 'DESIGN';
    }
    public get getHref(): string {
        if(this.isDesign) return 'javascript:void(0)';
        return this.argument.getReferenceUrl();
    }
    public get shouldDisplayDetailsLabel(): boolean {
        return !(this.isLink || this.isDesign);
    }
    public get isBasic(): boolean {
        return this.isLink || this.isDesign;
    }
    public get detailsLabel(): string {
        return 'Detalles';
    }
    public getName(): string {
        return this.name;
    }
    public getDescription(): string{
        return this.description;
    }
    public static asDownloadImage(entity: BacklogEntity): BacklogFunctionality{
        const buffer = new BacklogFunctionality();
        buffer.code = 'DWNL' //DownLoaD
        buffer.argument = entity;
        return buffer;
    }
    public static asDesign(screen: TTLockReference, comment: string): BacklogFunctionality {
        const buffer = new BacklogFunctionality();
        buffer.code = 'DESIGN'
        buffer.argument = BacklogEntity.asDesign(screen, comment);
        return buffer;
    }
    public static asGotoButton(screen: TTLockReference): BacklogFunctionality{
        const buffer = new BacklogFunctionality();
        buffer.code = 'LINK'
        buffer.argument = BacklogEntity.asRedirect(screen);
        return buffer;
    }

}