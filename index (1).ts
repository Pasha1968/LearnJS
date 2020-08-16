import fetch from "node-fetch";
import { basicExtractors } from "./extractors/BasicExtractors";
//import { RamdaExtractors } from "./extractors/RamdaExtractors";
//import * as R from "ramda";
const R = require('ramda') 
import { Convert, Episode } from "./schema";
function countseries(episodes:Episode[],season?:number): number{
  return R.cond([
    [R.equals(undefined),R.always(episodes)],
    [R.T, R.always(
      R.filter(
        (episode:Episode) => episode.season === season,
        episodes,
      )
    )]
  ])(season).length
}
function countruntime(episodes:Episode[],season?:number): number{
  let tm = R.cond([
    [R.equals(undefined),R.always(episodes)],
    [R.T, R.always(
      R.filter(
        (episode:Episode) => episode.season === season,
        episodes,
      )
    )]
  ])(season)
  let tmp = 0
  for (var prop in tm) {
    tmp = tmp+tm[prop].runtime
  }
 //R.forEach(tmp = tmp +tm.runtime,tm)
  return tmp
} 
// function fr(accumulator:number,sum:number){
//   accumulator = accumulator+sum
// }
function findmax(episodes:Episode[],season?:number): number{
  let tm = R.cond([
    [R.equals(undefined),R.always(episodes)],
    [R.T, R.always(
      R.filter(
        (episode:Episode) => episode.season === season,
        episodes,
      )
    )]
  ])(season)
  let tmp = 0
  for (var prop in tm) {
    tmp = R.max(tmp,tm[prop].runtime)
  }
 //R.forEach(tmp = tmp +tm.runtime,tm)
  return tmp
}
function findmin(episodes:Episode[],season?:number): number{
  let tm = R.cond([
    [R.equals(undefined),R.always(episodes)],
    [R.T, R.always(
      R.filter(
        (episode:Episode) => episode.season === season,
        episodes,
      )
    )]
  ])(season)
  let tmp = tm[0].runtime
  for (var prop in tm) {
    tmp = R.min(tmp,tm[prop].runtime)
  }
 //R.forEach(tmp = tmp +tm.runtime,tm)
  return tmp
}

function first(episodes:Episode[],season?:number): number{
  let tm = R.cond([
    [R.equals(undefined),R.always(episodes)],
    [R.T, R.always(
      R.filter(
        (episode:Episode) => episode.season === season,
        episodes,
      )
    )]
  ])(season)
  let tmp = tm[0].airstamp
  for (var prop in tm) {
    tmp = R.min(tmp,tm[prop].airstamp)
  }
  return tmp
}
function last(episodes:Episode[],season?:number): number{
  let tm = R.cond([
    [R.equals(undefined),R.always(episodes)],
    [R.T, R.always(
      R.filter(
        (episode:Episode) => episode.season === season,
        episodes,
      )
    )]
  ])(season)
  let tmp = tm[0].airstamp
  for (var prop in tm) {
    tmp = R.max(tmp,tm[prop].airstamp)
  }
  return tmp
}
async function main() {
  const response = await fetch(process.env.npm_package_config_json_url!);
  const json = await response.text();

  const schema = Convert.toSchema(json);
  const episodes = schema._embedded.episodes;

  // console.log(RamdaExtractors.count.total(episodes))
  // console.log(RamdaExtractors.runtime.total(episodes))
  // console.log(RamdaExtractors.byAirstamp("max").ofSeason(8)(episodes));
  console.log(countseries(episodes))
  console.log(countruntime(episodes,2))
  console.log(findmax(episodes,8))
  console.log(findmin(episodes,8))
  console.log(first(episodes,8))
  console.log(last(episodes,8))
}

main().catch((error) => console.error(error));
