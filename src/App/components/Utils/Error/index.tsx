import React from 'react'

import Paper from '@/components/Utils/Paper'
import ActionError from './action'
// Interface indicates
// what parameters are in the component
interface iPropsСomponentDidCatch {
    children: React.ReactNode
}
export default class СomponentDidCatch extends React.Component<iPropsСomponentDidCatch> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            info: '',
            date: '',
            hasError: false
        }
    }

    static getDerivedStateFromError(error: Error) {
        return {
            title: error.message,
            info: error.stack,
            date: new Date,
            hasError: true
        };
    }

    render() {
        //@ts-ignore
        const { title, info, date, hasError } = this.state

        if (hasError) {
            return <ActionError title={title} info={info} date={date}>
                <Paper
                    title="Uhoh!Server error, 500!!!! Please contact the administrator to continue."
                    supTitle="At this point, we're doing everything we can to resolve this issue."
                />
            </ActionError>
        }

        return this.props.children
    }
}