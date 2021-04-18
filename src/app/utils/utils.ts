
/**
 * @description Function that makes a copy of the object
 * @export
 * @param {*} objJson
 * @returns
 */
export function Copy(objJson: any) {
    return JSON.parse(JSON.stringify(objJson))
}