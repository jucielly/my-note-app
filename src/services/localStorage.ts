
export class LocalStorageService {

    static setValue(key: string, value: unknown) {
        const stringifiedValue = JSON.stringify(value)
        localStorage.setItem(key, stringifiedValue)
    }

    static readValue(key: string): unknown {
        const stringifiedValue = localStorage.getItem(key)
        if (!stringifiedValue) return undefined
        const parsedValue = JSON.parse(stringifiedValue)

        return parsedValue

    }

    static deleteValue(key: string) {
        localStorage.removeItem(key)
    }

} 