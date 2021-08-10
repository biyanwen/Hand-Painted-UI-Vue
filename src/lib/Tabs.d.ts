import {SetupContext} from "vue";

interface TabsProps {
    select: String;
}

declare const Tabs: {
    name: string;
    components: {
        Button: any;
    };
    props: {
        select: StringConstructor;
    };
    setup(props: TabsProps, context: SetupContext): {
        getCurrent: import("vue").ComputedRef<never>;
        defaults: [];
        titles: any[];
        checkTitle: (e: Event) => void;
    };
};
export {Tabs, TabsProps} ;
