import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Produto } from '../../App'

type CarrinhoState = {
    itens: Produto[]
}

const initialState: CarrinhoState = {
    itens: []
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionarProduto: (state, action: PayloadAction<Produto>) => {
            const p = action.payload;

            if(state.itens.find(produto => produto.id === p.id)) {
                alert('Item ja adicionado')
            } else {
                state.itens.push(p)
            }
        }
    }
})

export const { adicionarProduto } = carrinhoSlice.actions
export default carrinhoSlice.reducer