
export const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
        return {
            get() {
                const wrapperFn = (...args: any[]) => {
                    console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
                    //! Llamar la función propiamente con sus argumentos
                    propertyDescriptor.value.apply(this, args);
                }
                return wrapperFn;
            }
        }
    }
}