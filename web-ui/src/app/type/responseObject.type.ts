import {Team} from "../model/cricket/teams/team.model";


export type responseObject<T> = {
  result: T[],
  message: string
}
