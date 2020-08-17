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
    const tm = selectseason(episodes,season)
    return tm.length
}
export  function countruntime(episodes:Episode[],season?:number): number{
    const tm = selectseason(episodes,season)
    let tmp = 0
    //let ar = R.map( R.lens(R.prop('runtime'),tm)
   // let ar = R.map(R.lensPath(['runtime']),tm)
    const arr = R.map(R.prop('runtime'), tm)
    tmp = R.sum(arr)
   // console.log(R.reduce(R.add,tmp,tm[0].runtime))
    // for (var prop in tm) {
    //   tmp = tmp+tm[prop].runtime
    // }
   //R.forEach(tmp = tmp +tm.runtime,tm)
    return tmp
  } 
  // function fr(accumulator:number,sum:number){
  //   accumulator = accumulator+sum
  // }
export function findmax(episodes:Episode[],season?:number): number{
    let tm = selectseason(episodes,season)
    let tmp = 0
    const arr = R.map(R.prop('runtime'), tm)
    tmp = R.reduce(R.max, -Infinity, arr)
    //console.log(R.forEach(R.max(tmp,arr),arr))
   //R.forEach(tmp = tmp +tm.runtime,tm)
    return tmp
  }
export function findmin(episodes:Episode[],season?:number): number{
    let tm = selectseason(episodes,season)
   let tmp //= tm[0].runtime
    const arr = R.map(R.prop('runtime'), tm)
    tmp = R.reduce(R.min, Infinity, arr)
   //R.forEach(tmp = tmp +tm.runtime,tm)
    return tmp
  }
export function first(episodes:Episode[],season?:number): number{
    let tm = selectseason(episodes,season)
    let tmp //= tm[0].airstamp
    const arr = R.map(R.prop('airstamp'), tm)
    tmp = R.reduce(R.min, Infinity, arr)
    return tmp
  }
export function last(episodes:Episode[],season?:number): number{
    let tm = selectseason(episodes,season)
    let tmp //= tm[0].airstamp
    const arr = R.map(R.prop('airstamp'), tm)
    tmp = R.reduce(R.max, -Infinity, arr)
    return tmp
  }