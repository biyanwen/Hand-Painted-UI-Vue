declare const Button: {
    name: string;
    props: {
        theme: {
            type: StringConstructor;
            default: string;
        };
        level: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
};
export default Button;
