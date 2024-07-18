export type Genus = 'I' | 'You' | 'He' | 'She' | "We" | 'They' | 'You (Pl)'

const GenusObj = {
    'I': true,
    'You': true,
    'He': true,
    'She': true,
    'We': true,
    'They': true,
    'You (Pl)': true
} as const

type tt = keyof typeof GenusObj
export const list =



    type TimePrefixDefinitions = {
        Genus: Genus,
        Be: string
    }

type TimeDefinition = {
    key: string
} & Record<Genus, string>

const presentContinious: TimeDefinition = {
    key: 'PresentContinious',
    'I': 'am',
    'You': 'are',
    'He': 'is',
    'She': 'is',
    'We': 'are',
    'They': 'are',
    'You (Pl)': 'are',
} as const

type times = Exclude<keyof typeof presentContinious, 'key'>

type Verb = {
    infinitive: string

}

// present simple
// present continius
// past continius
// past tense