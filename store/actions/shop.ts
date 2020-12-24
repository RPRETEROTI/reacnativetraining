import { ComicType } from "../../screens/models/Comics";
import { BUY, TOGGLEPREFERITES } from "../types/types";

export const buy = (comic: ComicType) => ({
    type: BUY,
    payload: {
        comic: comic
    }
})
export const togglePreferites = (comic: ComicType) => ({
    type: TOGGLEPREFERITES,
    payload: {
        favrcomic: comic
    }
})