import { WeElement } from 'omi';
interface Props {
    from: object;
    to: object;
    duration: number;
    out: object;
    delay: number;
    easing: "quadratic-in" | "quadratic-out" | "quadratic-in-out" | "cubic-in" | "cubic-out" | "cubic-in-out" | "quartic-in" | "quartic-out" | "quartic-in-out" | "quintic-in" | "quintic-out" | "quintic-in-out" | "sinusoidal-in" | "sinusoidal-out" | "sinusoidal-in-out" | "exponential-in" | "exponential-out" | "exponential-in-out" | "circular-in" | "circular-out" | "circular-in-out" | "elastic-in" | "elastic-out" | "elastic-in-out" | "back-in" | "back-out" | "back-in-out" | "bounce-in" | "bounce-out" | "bounce-in-out";
    start: boolean;
}
interface Data {
}
export default class To extends WeElement<Props, Data> {
    static propTypes: {
        from: ObjectConstructor;
        to: ObjectConstructor;
        duration: NumberConstructor;
        out: ObjectConstructor;
        easing: StringConstructor;
        delay: NumberConstructor;
    };
    to: any;
    receiveProps(props: any, data: any, preProps: any): void;
    installed(): void;
    render(): JSX.Element;
}
export {};
