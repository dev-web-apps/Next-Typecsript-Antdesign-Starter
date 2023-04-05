/* eslint-disable prettier/prettier */

declare global {
    type ReactNode =
        | React.ReactElement<unknown>
        | FunctionComponent<unknown>
        | React.ComponentClass<unknown>
        | null

    interface IBase extends Record<string, unkonwn> {
        id: string
    }

    interface IUser extends Record<string, unknown> {
        name: string
        firstName: string
        lastName: string
        email: string
        role?: string
        updatedAt?: string
        profileImageURL?: string | null
        timezone?: string
        mentalFitnessAssessmentNeeded?: boolean
        subscriptionTier?: string
    }

    interface ITime {
        hour: number
        minute: number
    }

    interface IDate {
        day: number
        month: number
        year: number
    }
}

export {}
