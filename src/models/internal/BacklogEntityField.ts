import BacklogEntity from "@/models/internal/BacklogEntity.ts";

export default class BacklogEntityField {
    public required: boolean = false;
    public visible: boolean = true;
    public type: string = 'texto';
    public size: number = 255;
    public name: string = '';
    public reference?: BacklogEntity;
    public default?: string;
    public comment?: string = '';

    public static asRedirect(ref: TTLockReference): BacklogEntityField {
        const buff = new BacklogEntityField('Ir a');
        buff.type = 'button';
        buff.visible = true;
        buff.default = ref.getCode;
        return buff;
    }

    public constructor(name: string) {
        this.name = name;
    }
    public setName(name: string): BacklogEntityField {
        this.name = name;
        return this;
    }
    public setType(type: string): BacklogEntityField {
        this.type = type;
        return this;
    }
    public setSize(size: number): BacklogEntityField {
        this.size = size;
        return this;
    }
    public setVisible(visible: boolean = false): BacklogEntityField {
        this.visible = visible;
        return this;
    }
    public setComment(comment: string): BacklogEntityField {
        this.comment = comment;
        return this;
    }
    public setRequired(required: boolean = false): BacklogEntityField {
        this.required = required;
        return this;
    }
    public references(entity: BacklogEntity): BacklogEntityField {
        this.reference = entity;
     return this;
    }
    public setDefault(def: string): BacklogEntityField {
        this.default = def;
        return this;
    }
}