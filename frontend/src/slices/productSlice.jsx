import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
  selectCardValue: false,
  payCards: [],
  selectPayCardInfo: null,
};

export const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    // "CardList에서 사용"
    selectCardId: (state, action) => {
      state.value = action.payload;
    },
    // "MainNotice, ProductPage에서 사용 -> 내카드를 선택했다고 알려줌 -> 모달이 열리게 해줌"
    clickMyCard: (state) => {
      state.selectCardValue = !state.selectCardValue;
    },
    // "ProductPag에서 사용 => 결제카드 목록저장"
    saveMyPayCard: (state, action) => {
      state.payCards = action.payload;
    },
    // "ProductPage에서 모달에서 선택한 카드의 정보를 담아서 뿌릴꺼임 (선택된 하나의 카드)"
    selectPayCard: (state, action) => {
      state.selectPayCardInfo = action.payload;
    },
  },
});

export const { selectCardId, clickMyCard, saveMyPayCard, selectPayCard } =
  productSlice.actions;

export default productSlice.reducer;
