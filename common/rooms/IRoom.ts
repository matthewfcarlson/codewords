import { IPlayerID, IPlayer } from '../players/IPlayer';


export type RoomId = string;
export type GameType = string;

export interface IRoom {
    players: [IPlayer];
    id: string;
    gameType: GameType;

    /**
     * returns the index of the player that is currently the host
     */
    GetHostPlayer(): IPlayer;
}