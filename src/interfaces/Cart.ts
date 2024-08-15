export interface Cart { 
    id: number;
    created_at: string;
    comprado: boolean;
    idUsuario: number;
}

export interface CartItem {
    id: number;
    created_at: string;
    idCarrinho: number;
    idProduto: number;
}