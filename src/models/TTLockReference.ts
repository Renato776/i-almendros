
export default  class TTLockReference {
    protected img_url: string = '';
    protected caption: string = '';
    protected code: string = '';
    protected project_relative_implementation_url: string = '';
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
        return [
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
                'https://i-almendros.s3.us-east-2.amazonaws.com/i-almendros-_-main-_-backlog-references-_-whatsapp_image_2025-09-10_at_7_32_38_pm--_-1wmqhkn.jpeg',
                'Profile Settings',
                'SCREEN-99',
                '#'
            ),
        ]
    }
}