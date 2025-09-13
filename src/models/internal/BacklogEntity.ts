import BacklogEntityField from "@/models/internal/BacklogEntityField.ts";

export default class BacklogEntity {
    protected code: string = ''; //The snake-case name of the entity
    protected name: string = ''; //The full, human-name of the entity
    protected description: string = ''; //A description about what it represents in real life, who designed it, etc.
    protected fields: Array<BacklogEntityField> = [];

    public getCode(): string {
        return this.code;
    }
    public getName(): string {
        return this.name;
    }
    public getDescription(): string {
        return this.description;
    }
    public static asProfileSchema(): BacklogEntity {
        const buffer = new BacklogEntity();
        buffer.code = 'profile_schema';
        buffer.name = 'Profile Schema';
        buffer.description = `Conjunto de datos asociados al usuario de la aplicación. No confundir con el esquema "Invitado". Este esquema es de solo lectura, 
        ya que el administrador es el encargado de recopilar los datos y dar de alta a los usuarios. Los usuarios solamente pueden visualizar estos datos, o bien
        solicitar al administrador que los mismos sean actualizados.`;
        buffer.fields = [
            new BacklogEntityField('nombre').setRequired(true),
            new BacklogEntityField('apellido').setRequired(true),
            new BacklogEntityField('dirección').setRequired(true),
            new BacklogEntityField('DPI').setRequired(true).setSize(15),
            new BacklogEntityField('Teléfono').setSize(50),
        ];
        return buffer;
    }
    public static asVisitorSchema(): BacklogEntity {
       const buffer = new BacklogEntity();
       buffer.code = 'visitor';
       buffer.name = 'Visitante';
       buffer.description = `Formulario que se requiere llenar sobre la persona que visita al usuario. 
       En esta versión no existe lista de contactos, por lo que los datos deberán ser establecidos 
       cada vez que se desee generar un QR, aún si la misma persona ya ha visitado con anterioridad.
        Notar que los datos de la visita se refieren a la persona, no a la actividad, por lo que hora de llegada, o razón de la visita no van en este esquema.`;
        buffer.fields = [
            new BacklogEntityField('Nombre completo').setRequired(true),
            new BacklogEntityField('Teléfono').setRequired(true).setSize(50),
            new BacklogEntityField(`DPI`).setRequired(true).setSize(15),
        ];
       return buffer;
    }
    public static asVisitSchema(): BacklogEntity {
        const buffer = new BacklogEntity();
        buffer.code = 'visit';
        buffer.name = 'Visita';
        buffer.description = `Formulario que obtiene información de la visita en sí, un visitante puede tener múltiples visitas. Una visita no puede existir sin visitante.
        Algunos de los campos aplican según el tipo de visita que se generó (QR, Passcode, etc) y el subtipo (One-Time, Recurrent, etc).`;
        buffer.fields = [
            new BacklogEntityField('Visitante').setRequired(true).reference(
                this.asVisitorSchema()
            ),
            new BacklogEntityField('fecha_y_hora_inicio').setType('date').setRequired(true).setDefault('now'),
            new BacklogEntityField('fecha_y_hora_fin').setType('date').setRequired(false).setDefault('now+6h'),
            new BacklogEntityField('tipo').setType('enum(qr,passcode)').setRequired(true),
            new BacklogEntityField('comment').setType('texto').setRequired(true),
            new BacklogEntityField('status').setRequired(false).setDefault('programada').setComment('Se debería actualizar conforme el QR/Passcode cambia de estado, por ejemplo, a estado cancelada, utilizada, expirada, etc.'),
            new BacklogEntityField('qr_url').setType('url').setRequired(false).setComment(`Contiene el URL hacia la imagen en un hosting temporal para visualizar/descargar el QR generado, o puede ser null si el QR no está disponible por alguna razón`),
            new BacklogEntityField('passcode').setType('texto').setSize('25').setRequired(false).setComment(`Contiene el valor del Passcode asociado a la visita (generado). El mismo puede ser null si la visita fue por QR`),
        ]
        return buffer;
    }

    public static asRedirect(ref: TTLockReference): BacklogEntity {
        const buff = new BacklogEntity();
        buff.code = 'link';
        buff.name = ref.getCode;
        buff.description = `Botón para que el usuario pueda navegar a la pantalla indicada.`;
        return buff;
    }
}