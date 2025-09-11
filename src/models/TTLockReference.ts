
export default  class TTLockReference {
    protected img_url: string = '';
    protected caption: string = '';
    protected code: string = '';
    protected project_relative_implementation_url: string = '';
    protected comments: string = '';
    public setComments(comments: string): TTLockReference {
        this.comments = comments;
        return this;
    }
    public get hasComments(): boolean {
        return this.getComments.trim().length > 0;
    }
    public get getComments(): string {
        return this.comments;
    }
    public get getLocalImplementationUrl(): string {
        return this.project_relative_implementation_url;
    }
    public get getUrl(): string {
        return this.img_url;
    }
    public get getCaption(): string {
        return this.caption;
    }
    public get getCode(): string {
        return this.code;
    }

    public constructor(img_url: string, caption: string, code: string, project_relative_implementation_url: string) {
        this.img_url = img_url;
        this.caption = caption;
        this.code = code;
        this.project_relative_implementation_url = project_relative_implementation_url;
    }
    public static asFirstRevision(): Array<TTLockReference> {
        const buffer = [
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_7_32_39_p-_-2z7k3g9.jpeg',
                'Home',
                'SCREEN-01',
                '/'
            ),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_7_32_39_pm--_-384wluq.jpeg',
                'Passcodes > Home',
                'SCREEN-02-01',
                '#'
            ),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_7_32_38_pm--_-xy4eiaq.jpeg',
                'Passcodes > Home: Search',
                'SCREEN-02-01.01',
                '#'
            ),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_7_32_38_pm--_-34xxhpf.jpeg',
                'Passcodes > Home > Generate One-Time Passcode',
                'SCREEN-02-02',
                '#'
            ),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_7_32_38_pm--_-2bqjlsu.jpeg',
                'Passcodes > Home > Generate Timed Passcode',
                'SCREEN-02-03',
                '#'
            ),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_7_32_38_p-_-2v3vi4m.jpeg',
                'Passcodes > Home > Generate Recurring Passcode',
                'SCREEN-02-04',
                '#'
            ),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_7_32_37_p-_-59incy2.jpeg',
                'Passcodes > Home > Passcode Details',
                'SCREEN-02-01-01',
                '#'
            ),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_9_45_33_p-_-58bz0nv.jpeg',
                'QR Codes > Home',
                'SCREEN-03-01',
                '#'
            ),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_9_45_34_p-_-1m7pfw2.jpeg',
                'QR Codes > Home: Search',
                'SCREEN-03-01.01',
                '#'
            ).setComments('El buscado debe ser local. Buscar por nombre del código, nombre del visitante, o dpi. Case-insensitive. Colocar icon de que no hay data si no hubieran matches.'),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_9_45_34_pm--_-2lnjsk9.jpeg',
                'QR Codes > Home > QR Details',
                'SCREEN-03-01-01',
                '#'
            ).setComments('Notar que la APP no muestra el QR, en nuestro caso la API habilita un endpoint para mostrar el QR de una vez. Agregarlo. La app habilita editar detalles del QR, nosotros mostramos datos de solo lectura. Si agregar funcionalidad de eliminar/invalidar el QR. El QR mostrado tambien se debe poder descargar. La funcionalidad de compatir sera solo de texto, la API otorga un link que se puede utilizar para compatir la imagen.'),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_9_45_34_pm--_-3p8ywsm.jpeg',
                'QR Codes > Home > Generate Recurring QR',
                'SCREEN-03-02',
                '#'
            ).setComments('Esta vista es muy simple, ya que solo necesita un nombre o descripción del QR + Datos del visitante, la parte de definición del periodo va en una sub-pantalla. Es la misma que para recurring en pass-codes.'),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_9_45_34_pm--_-3q8a1l8.jpeg',
                'QR Codes > Home > Generate Recurring QR > Define Recurring Period',
                'SCREEN-03-02-01',
                '#'
            ).setComments('Esta screen funciona tanto para passcodes como QR codes. Permite al usuario establecer los parámetros de su periodo de uso'),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_9_45_34_pm--_-4vvfbw0.jpeg',
                'QR Codes > Home > Generate Timed QR',
                'SCREEN-03-03',
                '#'
            ).setComments('Similar al recurrente, pero tiene menos campos. La referencia no muestra el formulario de datos del Visitante'),
            new TTLockReference(
                 'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_9_45_34_pm--_-5f15r5z.jpeg',
                'QR Codes > Home > Generate Timed QR: Success',
                'SCREEN-03-03-01',
                '#'
            ).setComments('Esta pantalla se utiliza tanto al terminar el passcode, como al crear el QR. Pantalla de éxito que muestra los datos generados, ya sea el passcode, o la foto del QR generado.'),
            new TTLockReference(
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_7_32_38_pm--_-1wmqhkn.jpeg',
                'Profile Settings',
                'SCREEN-99',
                '#'
            ).setComments('Ejemplo de un formulario genérico. Necesario para establecer datos del perfil i.e Nombre, apellido, dirección. La mayoría de estos campos estarán deshabilidados, como la dirección o el nombre, y se mostrarán de solo lectura. Algunos campos estarán disponibles, como el sobrenombre.'),
        ]
        return buffer.map((ref, i) => ref.getOrder > 0 ? ref : ref.setOrder(i))
    }
    protected order: number = 0;
    public setOrder(i: number): TTLockReference {
        this.order = i;
        return this;
    }
    public get getOrder(): number {
        return this.order;
    }
    public get getId(): string {
        return this.getUrl.replace(/[^a-z]+/g, '_');
    }
}