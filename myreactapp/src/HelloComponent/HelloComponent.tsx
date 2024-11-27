import { Component, ReactNode } from "react";

interface HelloProps {
    name?: string
}

export default class HelloComponent
    extends Component<HelloProps> {

    render(): ReactNode {
        const { name } = this.props
        return <h1>Hello from Component, {name ?? 'World'}</h1>
    }
}