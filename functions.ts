const R = require('ramda') 
import { Episode } from "../schema";
function selectseason(episodes:Episode[],season?:number){
    const tm = R.cond([
        [R.equals(undefined),R.always(episodes)],
        [R.T, R.always(
          R.filter(
            (episode:Episode) => episode.season === season,
            episodes,
          )
        )]
    ])(season)
    return tm
    
}
// export function countseries(episodes:Episode[],season?:number): number{
//     return R.cond([
//       [R.equals(undefined),R.always(episodes)],
//       [R.T, R.always(
//         R.filter(
//           (episode:Episode) => episode.season === season,
//           episodes,
//         )
//       )]
//     ])(season).length
//   }
export function countseries(episodes:Episode[],season?:number): number{
    //const tm = selectseason(episodes,season)
    return selectseason(episodes,season).length
}
export  function countruntime(episodes:Episode[],season?:number): number{
   // let tmp = 0
    //let ar = R.map( R.lens(R.prop('runtime'),tm)
   // let ar = R.map(R.lensPath(['runtime']),tm)
    // const arr = R.map(R.prop('runtime'), selectseason(episodes,season))
    // tmp = R.sum(arr)
   // console.log(R.reduce(R.add,tmp,tm[0].runtime))
    // for (var prop in tm) {
    //   tmp = tmp+tm[prop].runtime
    // }
   //R.forEach(tmp = tmp +tm.runtime,tm)
    return R.sum(
        R.map(
            R.prop('runtime'),
            selectseason(
                episodes,
                season
            )
        )
    )
}
export function findmax(episodes:Episode[],season?:number): number{
   // const arr = R.map(R.prop('runtime'), selectseason(episodes,season))
    return R.reduce(
        R.max,
        -Infinity,
        R.map(
            R.prop('runtime'),
            selectseason(
                episodes,
                season
            )
        )
    )
  }
export function findmin(episodes:Episode[],season?:number): number{
//    const arr = R.map(R.prop('runtime'), selectseason(episodes,season))
    return R.reduce(
        R.min,
        Infinity,
        R.map(
            R.prop('runtime'),
            selectseason(episodes,season)
        )
    )
  }
export function first(episodes:Episode[],season?:number): number{
    //const arr = R.map(R.prop('airstamp'), selectseason(episodes,season))
    return R.reduce(
        R.min,
        Infinity,
        R.map(
            R.prop('airstamp'),
            selectseason(
                episodes,
                season
            )
        )
    )
  }
export function last(episodes:Episode[],season?:number): number{
    //const arr = R.map(R.prop('airstamp'), selectseason(episodes,season))
    return R.reduce(
        R.min,
        Infinity,
        R.map(
            R.prop('airstamp'),
            selectseason(
                episodes,
                season
            )
        )
    )
  }
