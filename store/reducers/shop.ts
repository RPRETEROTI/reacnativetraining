import _ from "lodash";
import { COMICS, ComicsType, ComicType } from "../../screens/models/Comics";
import { ComicShopType } from "../../screens/models/ComicShop";
import { BUY, EDITASYNCHCOMICTHUNK, TOGGLEPREFERITES } from "../types/types";

const initialState: ComicShopType = {
    acquisti: [{ id: 2 }],
    preferiti: [{ id: 0 }],
    fumettidisponibili: COMICS
    //isFavourite: false
}
export default (state = _.cloneDeep(initialState), action: any) => {
    const newState = { ...state }
    console.log('newState', newState)
    switch (action.type) {
        case BUY: newState.acquisti.push({
            comic: action.payload.comic
        });
            return newState;
        case TOGGLEPREFERITES:
            const removeComic = () => {
                const comicToRemove = newState.preferiti.findIndex((pr: ComicType) => pr.id === action.payload.favrcomic.id)
                newState.preferiti.splice(comicToRemove, 1)
            }
            const addComic = () => {
                newState.preferiti.push(action.payload.favrcomic)
            }
            const isFavourite = newState.preferiti.filter((pr: ComicType) => pr.id === action.payload.favrcomic.id).length > 0
            console.log('isfas', isFavourite)
            isFavourite ? removeComic() : addComic();
            console.log('newStatefv', newState.preferiti)
            return newState;
        case EDITASYNCHCOMICTHUNK: newState.fumettidisponibili.push(action.payload.comicedited);
            console.log('ns', newState)
            return newState;
        default:
            return state
    }

}