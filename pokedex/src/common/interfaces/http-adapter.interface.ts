
export interface HttpAdapter {
    //! la <T> significa que el metodo get es generico y puede recibir cualquier tipo de dato,
    //! y retorna una promesa de ese tipo de dato
    get<T>(url: string): Promise<T>;

}