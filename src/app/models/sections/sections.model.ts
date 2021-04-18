export class Sections {
    cd_Section: number
    nm_Section: string
    ds_Image: number

    constructor(
        {
            cd_Section,
            nm_Section,
            ds_Image,
        }: Sections
    ) {
        this.cd_Section = cd_Section
        this.nm_Section = nm_Section
        this.ds_Image = ds_Image
    }
}