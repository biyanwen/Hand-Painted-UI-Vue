declare module '*.svg' {
    // It's really a string, precisely a resolved path pointing to the image file
    const filePath: string;

    export default filePath;
}
declare module "*.vue" {
    import Vue from 'vue'
    export default Vue
}
declare module 'Button.vue' {
    import Button from "./src/lib/Button";
    export default Button
}